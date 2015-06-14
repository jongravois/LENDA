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

        //console.log($scope.loan.practices);
        $scope.loan.crop_totals = [
            {crop: 'Corn', acres: AppFactory.calcAcresCrop('1', $scope.loan)},
            {crop: 'Soybeans', acres: AppFactory.calcAcresCrop('2', $scope.loan)},
            {crop: 'Soybeans FAC', acres: AppFactory.calcAcresCrop('3', $scope.loan)},
            {crop: 'Sorghum', acres: AppFactory.calcAcresCrop('4', $scope.loan)},
            {crop: 'Wheat', acres: AppFactory.calcAcresCrop(5, $scope.loan)},
            {crop: 'Cotton', acres: AppFactory.calcAcresCrop('6', $scope.loan)},
            {crop: 'Rice', acres: AppFactory.calcAcresCrop('7', $scope.loan)},
            {crop: 'Peanuts', acres: AppFactory.calcAcresCrop('8', $scope.loan)},
            {crop: 'Sugar Cane', acres: AppFactory.calcAcresCrop('9', $scope.loan)},
            {crop: 'Other', acres: AppFactory.calcAcresCrop('10', $scope.loan)}
        ];
        //console.log('crop_totals', $scope.loan.crop_totals);

        $scope.tggl = {
            showRentRows: false,
            showOverRentRows: false,
            showInsuranceRows: false,
            showCashFlowRows: false,
            showRiskMarginRows: false,
            tcropCorn: (AppFactory.calcAcresCrop('1', $scope.loan) > 0 ? true : false),
            tcropSoybeans: (AppFactory.calcAcresCrop('2', $scope.loan) > 0 ? true : false),
            tcropBeansFAC: (AppFactory.calcAcresCrop('3', $scope.loan) > 0 ? true : false),
            tcropSorghum: (AppFactory.calcAcresCrop('4', $scope.loan) > 0 ? true : false),
            tcropWheat: (AppFactory.calcAcresCrop('5', $scope.loan) > 0 ? true : false),
            tcropCotton: (AppFactory.calcAcresCrop('6', $scope.loan) > 0 ? true : false),
            tcropRice: (AppFactory.calcAcresCrop('7', $scope.loan) > 0 ? true : false),
            tcropPeanuts: (AppFactory.calcAcresCrop('8', $scope.loan) > 0 ? true : false),
            tcropSugarcane: (AppFactory.calcAcresCrop('9', $scope.loan) > 0 ? true : false),
            tcropOther: (AppFactory.calcAcresCrop('10', $scope.loan) > 0 ? true : false)
        };

        $scope.calcInsGuarantee = function(crop) {
            //console.log('Guar Crop', crop);
            return Number(crop.c_aph) * Number(crop.c_ins_price) * (Number(crop.c_ins_level)/100);
        };

        $scope.calcInsValue = function(crop) {
            //console.log('Value Crop', crop);
            var guar = $scope.calcInsGuarantee(crop),
                premium = Number(crop.c_ins_premium),
                share = (crop.c_ins_share ? Number(crop.c_ins_share)/100 : 1);

            return (guar + premium) / share;
        };

        $scope.calcScoMax = function(crop) {
            return 89.82;
        };

        $scope.calcProdRevenue = function(crop) {
            //console.log('ProdRev Crop', crop);
            return Number(crop.c_prod_yield) * Number(crop.c_prod_price) * (Number(crop.c_prod_share)/100);
        };

        $scope.calcProdRevenueAdj = function(crop) {
            //console.log('ProdRev Crop', crop);
            return Number(crop.c_prod_yield) * (Number(crop.c_prod_share)/100) * (Number(crop.c_var_harv) + Number(crop.c_rebate));
        };

        $scope.calcFee = function(crop) {
            var fee = 0;
            if($scope.loan.fee_processing_onTotal) {
                fee += (Number(crop.expenses.arm) + Number(crop.expenses.dist)) * (Number($scope.loan.fins.fee_processing_percent)/100);
            } else {
                fee += Number(crop.expenses.arm) * (Number($scope.loan.fins.fee_processing_percent)/100);
            }
            if($scope.loan.fee_service_onTotal) {
                fee += (Number(crop.expenses.arm) + Number(crop.expenses.dist)) * (Number($scope.loan.fins.fee_service_percent)/100);
            } else {
                fee += Number(crop.expenses.arm) * (Number($scope.loan.fins.fee_service_percent)/100);
            }
            return fee;
        };

        $scope.calcArmCommit = function(crop) {
            return crop.expenses.arm + $scope.calcFee(crop);
        };

        $scope.calcInterestARM = function(crop) {
            return (Number($scope.loan.fins.int_percent_arm)/100) * 0.375 * $scope.calcArmCommit(crop);
        };

        $scope.calcInterestDist = function(crop) {
            return (Number($scope.loan.fins.int_percent_dist)/100) * 0.375 * crop.expenses.dist;
        };

        $scope.calcDiscCrop = function(crop) {
            return Number($scope.calcProdRevenue(crop)) * (1 - (Number(crop.c_crop_disc)/100));
        };

        $scope.calcDiscFSA = function(crop, acreFSA) {
            return Number(acreFSA) * (1 - (Number(crop.c_fsa_disc)/100));
        };

        $scope.calcInsOverCropDisc = function(crop) {
            var insval = Number($scope.calcInsValue(crop));
            var disccrop = Number($scope.calcDiscCrop(crop));
            var iocd = insval - disccrop;
            if(iocd < 0) {
                return 0;
            } else {
                return iocd;
            }
        };

        $scope.calcDiscIns = function(crop) {
            if(crop.c_ins_type === 'RP') {
                return Number($scope.calcInsOverCropDisc(crop)) * (1 - (Number(crop.c_cropins_disc)/100));
            } else {
                return Number($scope.calcInsOverCropDisc(crop)) * (1 - ((Number(crop.c_cropins_disc)/100)) + (Number(crop.c_nonrp_disc)/100));
            }
        };

        $scope.calcDiscSCO = function(crop) {
            return Number($scope.calcScoMax(crop)) * (1 - (Number(crop.c_sco_disc)/100));
        };

        $scope.calcDiscCollateral = function(crop, acreFSA) {
            return Number($scope.calcDiscCrop(crop)) + Number($scope.calcDiscFSA(crop, acreFSA)) + Number($scope.calcInsOverCropDisc(crop)) + Number($scope.calcDiscIns(crop)) + Number($scope.calcDiscSCO(crop));
        };

        $scope.getTotalCashRent = function(practices) {
            return _.sumCollection(practices, 'cash_rent');
        };

        $scope.getTotalWaived = function(practices) {
            return _.sumCollection(practices, 'waived');
        };

        $scope.getTotalRentOvr = function(practices) {
            return _.weighted(practices, 'share_rent', 'acres');
        };

        $scope.getTotalAPH = function(practices) {
            return 999999;
        };

        $scope.calcRelativeCF = function(crop, acre_fsa) {
          var revenue = Number($scope.calcProdRevenue(crop)) + Number($scope.calcProdRevenueAdj(crop)) + acre_fsa;
          var expenses = Number($scope.calcArmCommit(crop)) + Number(crop.expenses.dist) + Number(crop.expenses.other) + Number($scope.calcInterestARM(crop)) + Number($scope.calcInterestDist(crop));

            return Number(revenue) - Number(expenses);
        };

        $scope.calcRelativeRM = function(crop, acre_fsa) {
            var discountedCollateral = Number($scope.calcDiscCollateral(crop, acre_fsa));
            var fullCommittment = Number($scope.calcArmCommit(crop)) + Number(crop.expenses.dist) + Number($scope.calcInterestARM(crop)) + Number($scope.calcInterestDist(crop));
            return discountedCollateral - fullCommittment;
        };

        /*
        * =discCollateral-commit_arm-commit_dist-interest_arm-interest_dist
        */
    } // end function
})();
