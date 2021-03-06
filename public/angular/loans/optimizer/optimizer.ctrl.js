(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('OptimizerController', OptimizerController);

    OptimizerController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'OptimizerFactory'];

    function OptimizerController($scope, $state, $stateParams, AppFactory, LoansFactory, OptimizerFactory) {
        $scope.AppFactory = AppFactory;
        $scope.OptimizerFactory = OptimizerFactory;

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

        //////////////////////////
        if($scope.loan) {
            OptimizerFactory.getOptimizedLoan($scope.loan)
                .then(function success(rsp) {
                    //console.log('RSP', rsp);
                    var farms = rsp.farms;
                    //console.log('OptFarms', rsp);
                    $scope.loan.optimized = rsp;
                });
        } else {
            alert('No Loan Loaded!');
/*            LoansFactory.getLoan($stateParams.loanID)
                .then(function success(res){
                    console.log('RES', res);
                    $scope.loan = res.data.data;
                    OptimizerFactory.getOptimizedLoan($scope.loan)
                        .then(function success(rsp) {
                            console.log('RSP', rsp);
                        });
                });
*/
        }
        //////////////////////////

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

        $scope.addFarm = function() {
            alert('Adding a Farm.');
        };
        $scope.showCrop = function() {
            alert('Showing another crop.');
        };

        $scope.calcScoMax = function(crop) {
            var supplements = crop.insurance[0].suppins;
            //console.log('SCOMAX CROP', crop);
            //console.log('SCOMAX SUP', supplements);
            if(supplements.length === 0) {
                return 0;
            } else {
                var supplemental = [];
                _.each(supplements, function(i){
                    var harvestPriceRecalc = 0;
                    var adjustedClaim = 0;
                    var coverageRange = 0;
                    /* listed as second Harvest Price Recalculated */
                    var expCountyRevenueAdj = 0;
                    /* listed as second Harvest Price Recalculated */

                    var HPEO = (i.harvest_price_exclusion === '1' ? true : false);
                    var aph = Number(crop.c_aph);
                    var coverageLevel = Number(crop.c_ins_level);
                    var basePrice = Number(crop.c_ins_price);
                    var harvestPrice = Number(crop.c_ins_price) + Number(crop.c_var_harv);
                    var revenueCoverage = aph * (coverageLevel/100) * basePrice;
                    if(HPEO) {
                        harvestPriceRecalc = aph * (coverageLevel/100) * basePrice;
                    } else {
                        if(basePrice > harvestPrice) {
                            harvestPriceRecalc = aph * (coverageLevel/100) * basePrice;
                        } else {
                            harvestPriceRecalc = aph * (coverageLevel/100) * harvestPrice;
                        }
                    }
                    var harvestYield = Number(crop.c_prod_yield);
                    var calcRevenue = harvestYield * harvestPrice;
                    if((revenueCoverage + (calcRevenue * -1)) < 0 ) {
                        adjustedClaim = 0;
                    } else {
                        adjustedClaim = (revenueCoverage + (calcRevenue * -1));
                    }

                    var supplement = i.supplement;
                    var lossTrigger = Number(i.loss_trigger);
                    var desiredRange =  Number(i.range);

                    if(desiredRange < (lossTrigger - coverageLevel)) {
                        coverageRange = desiredRange;
                    } else {
                        coverageRange = (lossTrigger - coverageLevel);
                    }

                    var protectionFactor = Number(i.protection_factor);
                    var expCountyYield = Number(i.expected_yield);
                    var expCountyRevenue = expCountyYield * basePrice;

                    if(HPEO) {
                        expCountyRevenueAdj = expCountyYield * basePrice;
                    } else {
                        if( basePrice > harvestPrice) {
                            expCountyRevenueAdj = expCountyYield * basePrice;
                        } else {
                            expCountyRevenueAdj = expCountyYield * harvestPrice;
                        }
                    }

                    var finalCountyYield = Number(i.final_county_yield);
                    var finalCountyRevenue = harvestPrice * finalCountyYield;
                    var maxIndemnity = (coverageRange/100) * expCountyRevenueAdj * (protectionFactor/100);

                    supplemental.push({'maxIdemnity': maxIndemnity});
                });
                return _.average(supplemental, 'maxIdemnity');
            }
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

        $scope.calcDiscInsOverCrop = function(crop) {
            var insval = Number(OptimizerFactory.calcInsValue(crop));
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
                return Number($scope.calcDiscInsOverCrop(crop)) * (1 - (Number(crop.c_cropins_disc)/100));
            } else {
                return Number($scope.calcDiscInsOverCrop(crop)) * (1 - ((Number(crop.c_cropins_disc)/100)) + (Number(crop.c_nonrp_disc)/100));
            }
        };

        $scope.calcDiscSCO = function(crop) {
            return Number($scope.calcScoMax(crop)) * (1 - (Number(crop.c_sco_disc)/100));
        };

        $scope.calcDiscCollateral = function(crop, acre_fsa) {
            return Number($scope.calcDiscCrop(crop)) + Number($scope.calcDiscFSA(crop, acre_fsa)) + Number($scope.calcDiscInsOverCrop(crop)) + Number($scope.calcDiscIns(crop)) + Number($scope.calcDiscSCO(crop));
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
    } // end function
})();
