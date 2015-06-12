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
        $scope.tggl = {
            showRentRows: false,
            showOverRentRows: false,
            showInsuranceRows: false,
            showCashFlowRows: false,
            showRiskMarginRows: false,
            tcropCorn: ($scope.loan.crop_totals[0].acres > 0 ? true : false),
            tcropSoybeans: ($scope.loan.crop_totals[1].acres > 0 ? true : false),
            tcropBeansFAC: ($scope.loan.crop_totals[2].acres > 0 ? true : false),
            tcropSorghum: ($scope.loan.crop_totals[3].acres > 0 ? true : false),
            tcropWheat: ($scope.loan.crop_totals[4].acres > 0 ? true : false),
            tcropCotton: ($scope.loan.crop_totals[5].acres > 0 ? true : false),
            tcropRice: ($scope.loan.crop_totals[6].acres > 0 ? true : false),
            tcropPeanuts: ($scope.loan.crop_totals[7].acres > 0 ? true : false),
            tcropSugarcane: ($scope.loan.crop_totals[8].acres > 0 ? true : false),
            tcropOther: ($scope.loan.crop_totals[9].acres > 0 ? true : false)
        };
    } // end function
})();
