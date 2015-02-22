(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('TermsController', TermsController);

        TermsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'ConditionsFactory', 'ExceptionsFactory', 'GlobalsFactory', 'LoansFactory', 'InitialData'];

        function TermsController(
          $scope, $state, $stateParams,
          AppFactory, ConditionsFactory, ExceptionsFactory, GlobalsFactory,
          LoansFactory, InitialData
        ){
          var curr = $state.current.url;
          var currScreen = curr.substring(1,curr.length);
          if( $state.includes('new') ){
              $scope.newapplication == true;
              angular.forEach($scope.screens, function(obj, index) {
                  if (obj.screen == currScreen) { obj.status = 1; }
              });
          } else {
              $scope.newapplication == false;
          }// end if
          //alert(currScreen);

          $scope.loan = $scope.loan || InitialData.data.data[0];
          
          if(!$scope.globals){
            GlobalsFactory.getGlobals()
              .then(function success(rsp){
                  $scope.globals = rsp.data.data;
              });
          }

          if(!$scope.loan.fins){
              LoansFactory.getFinancials($stateParams.loanID)
                .then(function success(rsp){
                    var sng = rsp.data.data[0];
                    //console.log(sng);

                    if(sng.fee_service_percent == 0){
                        sng.fee_service_percent = $scope.globals.svc_fee_rate;
                    }

                    if(sng.fee_processing_percent == 0){
                        sng.fee_processing_percent = $scope.globals.proc_fee_rate;
                    }

                    if(sng.int_percent_arm == 0){
                        sng.int_percent_arm = $scope.globals.int_percent_arm;
                    }

                    if(sng.int_percent_dist == 0){
                        sng.int_percent_dist = $scope.globals.int_percent_dist;
                    }

                    $scope.loan.fins = sng;
                });
          }

          $scope.insertTerms = function(){
              if(parseFloat($scope.loan.fins.commit_arm) == 0 && parseFloat($scope.loan.fins.amount_requested) != 0){
                  $scope.loan.fins.commit_arm = $scope.loan.fins.amount_requested;
              } // end if

              AppFactory.putIt('/loanfinancials/', $scope.loan.id, calcTerms());

              var finalized = LoansFactory.finalizeNewLoan($scope.loan);

              if(finalized){
                  AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
              } else {
                  $state.go('new.purgatory');
              }
          }
          $scope.updateTerms = function(){
            checkExceptions();

            AppFactory.patchIt('/loans/', $scope.loan.id, {due_date: moment($scope.loan.due_date).format('YYYY-MM-DD')});

            AppFactory.putIt('/loanfinancials/', $scope.loan.id, calcTerms());
          } // end updateTerms

          function checkExceptions(){
            // check for nonstandardDueDate exception
            ExceptionsFactory.handler($scope.loan.id, 'nonstandardDueDate', $scope.loan.due_date == $scope.loan.default_due_date, {});

            // check for nonstandardProcessingFee exception
            ExceptionsFactory.handler($scope.loan.id, 'nonstandardProcessingFee', parseFloat($scope.loan.fins.fee_processing_percent) !== parseFloat($scope.globals.proc_fee_rate), {});

            // check for nonstandardServiceFee exception
            ExceptionsFactory.handler($scope.loan.id, 'nonstandardServiceFee', parseFloat($scope.loan.fins.fee_service_percent) !== parseFloat($scope.globals.svc_fee_rate), {});

            // check for nonstandardArmInterest exception
            ExceptionsFactory.handler($scope.loan.id, 'nonstandardArmInterest', parseFloat($scope.loan.fins.int_percent_arm) !== parseFloat($scope.globals.int_percent_arm), {});

            // check for differingInterestRates exception if loan_type has a distributor
            if($scope.loan.loan_type_id == 2 || $scope.loan.loan_type_id == 6) {
              ExceptionsFactory.handler($scope.loan.id, 'differingInterestRates', parseFloat($scope.loan.fins.int_percent_arm) !== parseFloat($scope.loan.fins.int_percent_dist), {});
            } // end if

            // check for processingFeeNotOnTotal exception
            ExceptionsFactory.handler($scope.loan.id, 'processingFeeNotOnTotal', $scope.loan.fins.fee_processing_onTotal, {});

            // check for serviceFeeNotOnTotal exception
            ExceptionsFactory.handler($scope.loan.id, 'serviceFeeNotOnTotal', $scope.loan.fins.fee_service_onTotal, {});
          }
          function calcTerms(){
            // TODO: persist principal_totals --which one includes fees
            if(($scope.loan.loan_type_id == 2 || $scope.loan.loan_type_id == 6) && $scope.loan.fins.fee_processing_onTotal ) {
              var procFee = ($scope.loan.fins.fee_processing_percent/100) * ($scope.loan.fins.commit_arm + $scope.loan.fins.commit_dist);
            } else {
              var procFee = ($scope.loan.fins.fee_processing_percent/100) * $scope.loan.fins.commit_arm;
            } // end if

            if(($scope.loan.loan_type_id == 2 || $scope.loan.loan_type_id == 6) && $scope.loan.fins.fee_service_onTotal ) {
              var svcFee = ($scope.loan.fins.fee_service_percent/100) * ($scope.loan.fins.commit_arm + $scope.loan.fins.commit_dist);
            } else {
              var svcFee = ($scope.loan.fins.fee_service_percent/100) * $scope.loan.fins.commit_arm;
            } // end if

            if(parseFloat(procFee) < $scope.globals.min_proc_fee){
              procFee = $scope.globals.min_proc_fee;
            }

            var doTerms = {
              fee_processing: $scope.loan.fins.fee_processing_percent,
              proc_fee: procFee,
              proc_fee_arm_only: ($scope.loan.fins.fee_processing_percent/100) * $scope.loan.fins.commit_arm,
              fee_processing_on_total: $scope.loan.fins.fee_processing_onTotal,
              fee_service: $scope.loan.fins.fee_service_percent,
              srvc_fee: svcFee,
              srvc_fee_arm_only: ($scope.loan.fins.fee_service_percent/100) * $scope.loan.fins.commit_arm,
              fee_service_on_total: $scope.loan.fins.fee_service_onTotal,
              fee_total: 1 * procFee + svcFee * 1,
              int_percent_arm: $scope.loan.fins.int_percent_arm,
              int_arm: (($scope.loan.loan_days/365) * .5) * ($scope.loan.fins.int_percent_arm/100) * $scope.loan.fins.commit_arm,
              int_percent_dist: $scope.loan.fins.int_percent_dist,
              int_dist: (($scope.loan.loan_days/365) * .5) * ($scope.loan.fins.int_percent_dist/100) * $scope.loan.fins.commit_dist
          };
            return doTerms;
          }
      } // end function
})();