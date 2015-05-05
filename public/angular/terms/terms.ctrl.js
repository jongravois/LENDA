(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('TermsController', TermsController);
    
        TermsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'ExceptionsFactory', 'GlobalsFactory', 'LoansFactory'];
    
        function TermsController(
            $scope, $state, $stateParams, AppFactory, ExceptionsFactory, GlobalsFactory, LoansFactory
        ){
            activate();

            function activate() {
                var curr = $state.current.url;
                var currScreen = curr.substring(1, curr.length);
                $scope.newapplication = $state.current.data.newapplication;

                if ($scope.newapplication && $scope.screens) {
                    angular.forEach($scope.screens, function (obj) {
                        if (obj.screen === currScreen) {
                            obj.status = 1;
                        }
                    });
                }// end if

                $scope.gridData = [
                    {
                        due_date: $scope.loan.due_date,
                        fee_processing_percent: $scope.loan.fins.fee_processing_percent,
                        fee_processing_onTotal: $scope.loan.fins.fee_processing_onTotal,
                        fee_service_percent: $scope.loan.fins.fee_service_percent,
                        fee_service_onTotal: $scope.loan.fins.fee_service_onTotal,
                        int_percent_arm: $scope.loan.fins.int_percent_arm,
                        int_percent_dist: $scope.loan.fins.int_percent_dist,
                        total_commit_arm: AppFactory.getArmPrincipal($scope.loan),
                        total_commit_dist: AppFactory.getDistPrincipal($scope.loan)
                    }
                ];
            } // end activate

            $scope.gridOptions = {
                data: 'gridData',
                enableCellSelection: true,
                enableCellEditOnFocus: true,
                enableRowSelection: false
            };

            //TODO: Set to default on creation and trigger exception if changed
            if ($scope.loan.fins.fee_service_percent === 0) {
                $scope.loan.fins.fee_service_percent = $scope.globals.svc_fee_rate;
            }

            if (!$scope.loan.fins.fee_processing_percent) {
                $scope.loan.fins.fee_processing_percent = $scope.globals.proc_fee_rate;
            }

            if (!$scope.loan.fins.int_percent_arm) {
                $scope.loan.fins.int_percent_arm = $scope.globals.int_percent_arm;
            }

            if (!$scope.loan.fins.int_percent_dist) {
                $scope.loan.fins.int_percent_dist = $scope.globals.int_percent_dist;
            }

            /** CALCULATIONS */
            // Processing Fee
            if (($scope.loan_type_id === 2 || $scope.loan_type_id === 6) && $scope.loan.fins.fee_processing_onTotal) {
                $scope.loan.fins.proc_fee = ($scope.loan.fins.fee_processing_percent / 100) * ($scope.loan.fins.commit_arm + $scope.loan.fins.commit_dist);
            } else {
                $scope.loan.fins.proc_fee = ($scope.loan.fins.fee_processing_percent / 100) * $scope.loan.fins.commit_arm;
            } // end if

            if ($scope.loan.fins.proc_fee < $scope.globals.min_proc_fee) {
                $scope.loan.fins.proc_fee = $scope.globals.min_proc_fee;
            } // end if

            // Service Fee
            if (($scope.loan.loan_type_id === 2 || $scope.loan.loan_type_id === 6) && $scope.loan.fins.fee_service_onTotal) {
                $scope.loan.fins.srvc_fee = ($scope.loan.fins.fee_service_percent / 100) * ($scope.loan.fins.commit_arm + $scope.loan.fins.commit_dist);
            } else {
                $scope.loan.fins.srvc_fee = ($scope.loan.fins.fee_service_percent / 100) * $scope.loan.fins.commit_arm;
            } // end if

            // ARM Interest
            $scope.loan.fins.int_arm = ((Number($scope.loan.loan_days) / 365) * 0.5) * (Number($scope.loan.fins.int_percent_arm) / 100) * Number($scope.loan.fins.commit_arm);

            // Distributor Interest
            $scope.loan.fins.int_dist = ((Number($scope.loan.loan_days) / 365) * 0.5) * (Number($scope.loan.fins.int_percent_dist) / 100) * Number($scope.loan.fins.commit_dist);

            $scope.insertTerms = function () {
                var calcTerms = {
                    fee_processing: $scope.loan.fins.fee_processing_percent,
                    proc_fee: $scope.loan.fins.proc_fee,
                    proc_fee_arm_only: $scope.loan.fins.proc_fee_arm_only,
                    fee_processing_on_total: $scope.loan.fins.fee_processing_onTotal,
                    fee_service: $scope.loan.fins.fee_service_percent,
                    srvc_fee: $scope.loan.fins.srvc_fee,
                    srvc_fee_arm_only: $scope.loan.fins.srvc_fee_arm_only,
                    fee_service_on_total: $scope.loan.fins.fee_service_onTotal,
                    fee_total: Number($scope.loan.fins.proc_fee) + Number($scope.loan.fins.srvc_fee),
                    int_percent_arm: $scope.loan.fins.int_percent_arm,
                    int_arm: $scope.loan.fins.int_arm,
                    int_percent_dist: $scope.loan.fins.int_percent_dist,
                    int_dist: $scope.loan.fins.int_dist
                };

                if (Number($scope.loan.fins.commit_arm) === 0 && Number($scope.loan.fins.amount_requested) !== 0) {
                    $scope.loan.fins.commit_arm = $scope.loan.fins.amount_requested;
                } // end if

                checkExceptions();

                AppFactory.putIt('/loanfinancials/', $scope.loan.id, calcTerms);

                var finalized = LoansFactory.finalizeNewLoan($scope.loan);

                if (finalized) {
                    AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
                } else {
                    $state.go('new.purgatory');
                }
            };
            $scope.updateTerms = function () {
                var calcTerms = {
                    fee_processing: $scope.loan.fins.fee_processing_percent,
                    proc_fee: $scope.loan.fins.proc_fee,
                    proc_fee_arm_only: $scope.loan.fins.proc_fee_arm_only,
                    fee_processing_on_total: $scope.loan.fins.fee_processing_onTotal,
                    fee_service: $scope.loan.fins.fee_service_percent,
                    srvc_fee: $scope.loan.fins.srvc_fee,
                    srvc_fee_arm_only: $scope.loan.fins.srvc_fee_arm_only,
                    fee_service_on_total: $scope.loan.fins.fee_service_onTotal,
                    fee_total: Number($scope.loan.fins.proc_fee) + Number($scope.loan.fins.srvc_fee),
                    int_percent_arm: $scope.loan.fins.int_percent_arm,
                    int_arm: $scope.loan.fins.int_arm,
                    int_percent_dist: $scope.loan.fins.int_percent_dist,
                    int_dist: $scope.loan.fins.int_dist
                };

                checkExceptions();

                AppFactory.patchIt('/loans/', $scope.loan.id, {due_date: moment($scope.loan.due_date).format('YYYY-MM-DD')});

                AppFactory.putIt('/loanfinancials/', $scope.loan.id, calcTerms);
            }; // end updateTerms

            function checkExceptions() {
                // check for nonstandardDueDate exception
                ExceptionsFactory.handler($scope.loan.id, 'nonstandardDueDate', $scope.loan.due_date === $scope.loan.default_due_date, {});

                // check for nonstandardProcessingFee exception
                ExceptionsFactory.handler($scope.loan.id, 'nonstandardProcessingFee', parseFloat($scope.loan.fins.fee_processing_percent) !== parseFloat($scope.globals.proc_fee_rate), {});

                // check for nonstandardServiceFee exception
                ExceptionsFactory.handler($scope.loan.id, 'nonstandardServiceFee', parseFloat($scope.loan.fins.fee_service_percent) !== parseFloat($scope.globals.svc_fee_rate), {});

                // check for nonstandardArmInterest exception
                ExceptionsFactory.handler($scope.loan.id, 'nonstandardArmInterest', parseFloat($scope.loan.fins.int_percent_arm) !== parseFloat($scope.globals.int_percent_arm), {});

                // check for differingInterestRates exception if loan_type has a distributor
                if ($scope.loan.loan_type_id === 2 || $scope.loan.loan_type_id === 6) {
                    ExceptionsFactory.handler($scope.loan.id, 'differingInterestRates', parseFloat($scope.loan.fins.int_percent_arm) !== parseFloat($scope.loan.fins.int_percent_dist), {});
                } // end if

                // check for processingFeeNotOnTotal exception
                ExceptionsFactory.handler($scope.loan.id, 'processingFeeNotOnTotal', $scope.loan.fins.fee_processing_onTotal, {});

                // check for serviceFeeNotOnTotal exception
                ExceptionsFactory.handler($scope.loan.id, 'serviceFeeNotOnTotal', $scope.loan.fins.fee_service_onTotal, {});
            }
        } // end controller
})();