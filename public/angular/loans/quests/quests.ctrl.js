(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('QuestsController', QuestsController);

    QuestsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'ExceptionsFactory', 'LoansFactory', 'QuestsFactory'];

    function QuestsController($scope, $state, $stateParams, AppFactory, ExceptionsFactory, LoansFactory, QuestsFactory) {
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

        if (!$scope.loan) {
            $scope.loan = _.find($scope.loans, function(i) {
                return i.id == $stateParams.loanID;
            });
        } // end if

        $scope.insertQuestions = function () {
            checkExceptions();
            QuestsFactory.update($scope.quests.id, $scope.quests)
                .then(function success(rsp) {
                    AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
                });
        };

        $scope.updateQuestions = function () {
            checkExceptions();

            if(!$scope.quests.insInPlace) {
                AppFactory.patchIt('/loans/', $stateParams.loanID, {
                    'its_list': 1,
                    'fsa_compliant': 1
                });
            } // end if

            AppFactory.putIt('/loanquestions/', $stateParams.loanID, $scope.quests);
        };

        function checkExceptions() {
            ExceptionsFactory.handler($stateParams.loanID, 'bankruptcyHistory', !$scope.loan.quests.bankruptcy, {});
            ExceptionsFactory.handler($stateParams.loanID, 'bankruptcyOrder', !$scope.loan.quests.bankruptcyOrder, {});
            ExceptionsFactory.handler($stateParams.loanID, 'cashOutlayProvisions', $scope.loan.quests.other_cash, {});
            ExceptionsFactory.handler($stateParams.loanID, 'contractualObligations', !$scope.loan.quests.future_liabilities, {});
            ExceptionsFactory.handler($stateParams.loanID, 'equipmentObligations', $scope.loan.quests.equip_obligations, {});
            ExceptionsFactory.handler($stateParams.loanID, 'fmaGoodStanding', $scope.loan.quests.fci_good, {});
            ExceptionsFactory.handler($stateParams.loanID, 'fsaGoodStanding', $scope.loan.quests.fsa_good, {});
            ExceptionsFactory.handler($stateParams.loanID, 'harvestOwn', $scope.loan.quests.harvest_own, {});
            ExceptionsFactory.handler($stateParams.loanID, 'isDefendant', !$scope.loan.quests.legal_defendant, {});
            ExceptionsFactory.handler($stateParams.loanID, 'outstandingJudgement', !$scope.loan.quests.judgements, {});
            ExceptionsFactory.handler($stateParams.loanID, 'outstandingLiens', !$scope.loan.quests.liens, {});
            ExceptionsFactory.handler($stateParams.loanID, 'pastDuePremiums', $scope.loan.quests.premiums_past, {});
            ExceptionsFactory.handler($stateParams.loanID, 'plantOwn', $scope.loan.quests.plant_own, {});
            ExceptionsFactory.handler($stateParams.loanID, 'thirdPartyCredit', !$scope.loan.quests.credit_3p_available, {});
        }
    } // end function
})();
