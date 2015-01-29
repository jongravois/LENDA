(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('NewTermsController', NewTermsController);
  
      NewTermsController.$inject = ['$scope',  '$state', '$stateParams', 'AppFactory', 'ConditionsFactory', 'LoansFactory', 'Loan'];
  
      function NewTermsController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          ConditionsFactory,
          LoansFactory,
          Loan
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        //alert(currScreen);

        if(!$scope.loan){
          $scope.loan = Loan.data.data[0];
        } // end if
        
        if(!$scope.loan.fins){
          LoansFactory.getFinancials($stateParams.loanID)
            .then(function success(rsp){
              var sng = rsp.data.data[0];
              //console.log(sng);

              //TODO: create lenda, if changed from global
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

        //TODO: watch due_date and patch to loans on change -- lenda, if changed
        /*$scope.$watch('loan.due_date', function(newVal, oldVal){
          console.log(newVal, oldVal);
        });*/


        $scope.insertTerms = function(){
          if(parseFloat($scope.loan.fins.commit_arm) == 0){
            $scope.loan.fins.commit_arm = $scope.loan.fins.amount_requested;
          } // end if

          //TODO: if !processing_fee, processing_fee = 330 (global)

          //TODO: persist data
          AppFactory.putIt('/loanfinancials/', $stateParams.loanID, $scope.loan.fins);

          //TODO: Move from New Loan to Managed Loan
          var finalized = LoansFactory.finalizeNewLoan();

          if(finalized){
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
          } else {
            $state.go('purgatory');
          }
        }
      } // end function
})();