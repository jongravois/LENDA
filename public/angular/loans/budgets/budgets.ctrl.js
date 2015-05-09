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

        $scope.calc_arm_total = function(o) {
            return _.reduce(o.expenses, function(sum, obj) {
                return sum + Number(obj.arm);
            }, 0);
        };

        $scope.calc_dist_total = function(o) {
            return _.reduce(o.expenses, function(sum, obj) {
                return sum + Number(obj.dist);
            }, 0);
        };

        $scope.calc_other_total = function(o) {
            return _.reduce(o.expenses, function(sum, obj) {
                return sum + Number(obj.other);
            }, 0);
        };

        $scope.insertBudget = function () {
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };
    } // end function
})();
