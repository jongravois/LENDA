(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('OptimizerController', OptimizerController);

    OptimizerController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

    function OptimizerController($scope, $state, $stateParams, AppFactory, LoansFactory) {
        $scope.AppFactory = AppFactory;

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

        LoansFactory.getFarmPractices($stateParams.loanID)
            .then(function success(rsp) {
                $scope.farmPractices = rsp.data.data;
            });

        //console.log($scope.loan.practices);
        $scope.tggl = {
            showRentRows: false,
            showOverRentRows: false,
            showInsuranceRows: false,
            showCashFlowRows: false,
            showRiskMarginRows: false,
            tcropCorn: false,
            tcropSoybeans: false,
            tcropBeansFAC: false,
            tcropSorghum: false,
            tcropWheat: false,
            tcropCotton: true,
            tcropRice: false,
            tcropPeanuts: false,
            tcropSugarcane: false,
            tcropOther: false
        };

        $scope.loan.crop_totals = [
            {crop: 'Corn', acres: 2000},
            {crop: 'Soybeans', acres: 1000},
            {crop: 'Soybeans FAC', acres: 0},
            {crop: 'Sorghum', acres: 0},
            {crop: 'Wheat', acres: 0},
            {crop: 'Cotton', acres: 1400},
            {crop: 'Rice', acres: 0},
            {crop: 'Peanuts', acres: 0},
            {crop: 'Sugar Cane', acres: 0},
            {crop: 'Other', acres: 0}
        ];
    } // end function
})();
