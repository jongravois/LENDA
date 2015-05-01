(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('BudgetsController', BudgetsController);

    BudgetsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'ExpensesFactory'];

    function BudgetsController($scope, $state, $stateParams, AppFactory, ExpensesFactory) {
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
        }



        $scope.insertBudget = function () {
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };
    } // end function
})();
