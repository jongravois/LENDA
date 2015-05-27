(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('DisbursementsController', DisbursementsController);

        DisbursementsController.$inject = ['$scope'];

        function DisbursementsController($scope){


            $scope.disburse_arm_total = function() {
                return 999999;
            };
            $scope.disburse_rem_total = function() {
                return 888888;
            };
            $scope.disburse_spent_total =function() {
                return 111111;
            };
            $scope.calc_disburse.total = function() {
                // = disburse.custom * 1 + disburse.fuel * 1 + disburse.labor * 1 + disburse.repairs * 1 + disburse.misc_acres * 1 + disburse.equipment * 1
                return 393102;
            };
        } // end controller
})();
