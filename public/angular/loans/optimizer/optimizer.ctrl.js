(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('OptimizerController', OptimizerController);

    OptimizerController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'OptimizerFactory'];

    function OptimizerController($scope, $state, $stateParams, AppFactory, LoansFactory, OptimizerFactory) {
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

        var farms = [];
        var dbFarms = $scope.loan.farms;
        console.log('dbFarms', $scope.loan.farms);

        _.each(dbFarms, function(f){
            var thisIrFarm = {
                id: f.id,
                farm_id: f.farm_id,
                county_id: f.county_id,
                county: f.county.county,
                state_abr: f.county.states.abr,
                fsn: f.fsn,
                owner: f.owner,
                perm_ins: (f.perm_ins === '1' ? 'Y' : 'N'),
                irr: Number(f.irr),
                ni: Number(f.ni),
                acres: Number(f.irr),
                total_acres: Number(f.irr) + Number(f.ni),
                practice: 'IR',
                share_rent: Number(f.share_rent),
                cash_rent: Number(f.cash_rent),
                waived: Number(f.waived),
                cash_rent_acre_ARM: (Number(f.irr) > 0 ? (Number(f.cash_rent) - Number(f.waived))/Number(f.irr) : 0),
                cash_rent_acre_dist: 0,
                cash_rent_acre_other: (Number(f.irr) > 0 ? Number(f.waived)/Number(f.irr) : 0),
                when_due: f.when_due,
                total_fsa_paid: Number(f.fsa_paid),
                fsa_paid: Number(f.fsa_paid) * Number(f.irr)/(Number(f.irr) + Number(f.ni)) || 0,
                fsa_acre: (Number(f.fsa_paid) * Number(f.irr) / (Number(f.irr) + Number(f.ni)) / f.irr) || 0,
                percent_irrigated: Number(f.irr)/(Number(f.irr) + Number(f.ni)),
                farmpractices: f.farmpractices,
                cotton: OptimizerFactory.makeFarmPractice('6', _.where(f.farmpractices, {'crop_id': '6', 'irrigated': '1'}), $scope.loan),

            };
            var thisNiFarm = {
                id: f.id,
                farm_id: f.farm_id,
                county_id: f.county_id,
                county: f.county.county,
                state_abr: f.county.states.abr,
                fsn: f.fsn,
                owner: f.owner,
                perm_ins: (f.perm_ins === '1' ? 'Y' : 'N'),
                irr: Number(f.irr),
                ni: Number(f.ni),
                acres: Number(f.ni),
                total_acres: Number(f.irr) + Number(f.ni),
                practice: 'NI',
                share_rent: Number(f.share_rent),
                cash_rent: Number(f.cash_rent),
                waived: Number(f.waived),
                cash_rent_acre_ARM: (Number(f.ni) > 0 ? (Number(f.cash_rent)-Number(f.waived))/Number(f.ni) : 0),
                cash_rent_acre_dist: 0,
                cash_rent_acre_other: (Number(f.ni) > 0 ? Number(f.waived)/Number(f.ni) : 0),
                when_due: f.when_due,
                total_fsa_paid: Number(f.fsa_paid),
                fsa_paid: Number(f.fsa_paid) * Number(f.ni)/(Number(f.irr) + Number(f.ni)) || 0,
                fsa_acre: (Number(f.fsa_paid) * Number(f.ni) / (Number(f.irr) + Number(f.ni)) / f.ni) || 0,
                percent_irrigated: Number(f.irr)/(Number(f.irr) + Number(f.ni)),
                farmpractices: f.farmpractices,
                cotton: OptimizerFactory.makeFarmPractice('6', _.where(f.farmpractices, {'crop_id': '6', 'irrigated': '0'}), $scope.loan),
            };

            farms.push(thisIrFarm);
            farms.push(thisNiFarm);
        });

        $scope.loan.optifarms = farms;
        console.log('Optifarms', $scope.loan.optifarms);

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
            if(crop){
                return Number(crop.c_aph) * Number(crop.c_ins_price) * (Number(crop.c_ins_level)/100);
            } else {
                return 0;
            }
        };

        $scope.calcInsValue = function(crop) {
            //console.log('Value Crop', crop);
            if(crop){
                var guar = $scope.calcInsGuarantee(crop),
                    premium = Number(crop.c_ins_premium),
                    share = (crop.c_ins_share ? Number(crop.c_ins_share)/100 : 1);

                return (guar + premium) / share;
            } else {
                return 0;
            }
        };

        $scope.calcScoMax = function(crop) {
            return 89.82;
        };

        $scope.calcProdRevenue = function(crop) {
            //console.log('ProdRev Crop', crop);
            if(crop){
                return Number(crop.c_prod_yield) * Number(crop.c_prod_price) * (Number(crop.c_prod_share)/100);
            } else {
                return 0;
            }
        };

        $scope.calcProdRevenueAdj = function(crop) {
            if(!crop) { return 0; }

            return Number(crop.c_prod_yield) * (Number(crop.c_prod_share)/100) * (Number(crop.c_var_harv) + Number(crop.c_rebate));
        };

        $scope.calcFee = function(crop) {
            if(!crop) { return 0; }

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
            if(!crop) { return 0; }

            if (crop.expenses) {
                return crop.expenses.arm + $scope.calcFee(crop);
            } else {
                return 0;
            }
        };

        $scope.calcInterestARM = function(crop) {
            if(!crop) { return 0; }

            return (Number($scope.loan.fins.int_percent_arm)/100) * 0.375 * $scope.calcArmCommit(crop);
        };

        $scope.calcInterestDist = function(crop) {
            if(!crop) { return 0; }

            return (Number($scope.loan.fins.int_percent_dist)/100) * 0.375 * crop.expenses.dist;
        };

        $scope.calcDiscCrop = function(crop) {
            if(!crop){ return 0; }

            return Number($scope.calcProdRevenue(crop)) * (1 - (Number(crop.c_crop_disc)/100));
        };

        $scope.calcDiscFSA = function(crop, acreFSA) {
            if(!crop){ return 0; }

            return Number(acreFSA) * (1 - (Number(crop.c_fsa_disc)/100));
        };

        $scope.calcInsOverCropDisc = function(crop) {
            if(!crop) {  return 0; }

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
            if(!crop) { return 0; }

            if(crop.c_ins_type === 'RP') {
                return Number($scope.calcInsOverCropDisc(crop)) * (1 - (Number(crop.c_cropins_disc)/100));
            } else {
                return Number($scope.calcInsOverCropDisc(crop)) * (1 - ((Number(crop.c_cropins_disc)/100)) + (Number(crop.c_nonrp_disc)/100));
            }
        };

        $scope.calcDiscSCO = function(crop) {
            if(!crop) { return 0; }

            return Number($scope.calcScoMax(crop)) * (1 - (Number(crop.c_sco_disc)/100));
        };

        $scope.calcDiscCollateral = function(crop, acreFSA) {
            if(!crop) { return 0; }

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
            if(!crop){ return 0; }

          var revenue = Number($scope.calcProdRevenue(crop)) + Number($scope.calcProdRevenueAdj(crop)) + acre_fsa;
          var expenses = Number($scope.calcArmCommit(crop)) + Number(crop.expenses.dist) + Number(crop.expenses.other) + Number($scope.calcInterestARM(crop)) + Number($scope.calcInterestDist(crop));

            return Number(revenue) - Number(expenses);
        };

        $scope.calcRelativeRM = function(crop, acre_fsa) {
            if(!crop){ return 0; }
            var discountedCollateral = Number($scope.calcDiscCollateral(crop, acre_fsa));
            var fullCommittment = Number($scope.calcArmCommit(crop)) + Number(crop.expenses.dist) + Number($scope.calcInterestARM(crop)) + Number($scope.calcInterestDist(crop));
            return discountedCollateral - fullCommittment;
        };
    } // end function
})();
