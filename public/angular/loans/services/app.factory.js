(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('AppFactory', AppFactory);

    AppFactory.$inject = ['$http', 'API_URL', '$state', '$stateParams', 'toastr', 'Logger', 'ModalService'];

    /* @ngInject */
    function AppFactory($http, API_URL, $state, $stateParams, toastr, Logger, ModalService) {
        var publicAPI = {
            agentsInAgency: agentsInAgency,
            averageArray: averageArray,
            calcAdjustedProd: calcAdjustedProd,
            calcAdjustedRiskMargin: calcAdjustedRiskMargin,
            calcAdjProd: calcAdjProd,
            calcArmAndDist: calcArmAndDist,
            calcBreakEvenPercent: calcBreakEvenPercent,
            calcCashFlow: calcCashFlow,
            calcCropValue: calcCropValue,
            calcEquipmentCollateralTotal: calcEquipmentCollateralTotal,
            calcEquipmentCollateralValue: calcEquipmentCollateralValue,
            calcFSACollateralValue: calcFSACollateralValue,
            calcInsCoverageExcess: calcInsCoverageExcess,
            calcInsCropValue: calcInsCropValue,
            calcInsOverDisc: calcInsOverDisc,
            calcInsOverDiscNonRP: calcInsOverDiscNonRP,
            calcInsuranceGuaranty: calcInsuranceGuaranty,
            calcInsuranceTotalGuarantee: calcInsuranceTotalGuarantee,
            calcInsuranceTotalValue: calcInsuranceTotalValue,
            calcInsuranceValue: calcInsuranceValue,
            calcIODCollateralValue: calcIODCollateralValue,
            calcMarketValueTotal: calcMarketValueTotal,
            calcNRPCollateralValue: calcNRPCollateralValue,
            calcOtherCollateralTotal: calcOtherCollateralTotal,
            calcOtherCollateralValue: calcOtherCollateralValue,
            calcPlannedCropValue: calcPlannedCropValue,
            calcPriorLienTotal: calcPriorLienTotal,
            calcRECollateralTotal: calcRECollateralTotal,
            calcRECollateralValue: calcRECollateralValue,
            calcRiskMargin: calcRiskMargin,
            calcSuppInsTotalAcres: calcSuppInsTotalAcres,
            calcSuppInsTotalValue: calcSuppInsTotalValue,
            calcSuppInsValue: calcSuppInsValue,
            calcTotalCollateral: calcTotalCollateral,
            calcTotalCropValue: calcTotalCropValue,
            calcTotalEquipmentCollateral: calcTotalEquipmentCollateral,
            calcTotalExpenses: calcTotalExpenses,
            calcTotalInsGuar: calcTotalInsGuar,
            calcTotalInsValue: calcTotalInsValue,
            calcTotalOtherCollateral: calcTotalOtherCollateral,
            calcTotalOverDisc: calcTotalOverDisc,
            calcTotalOverDiscNonRP: calcTotalOverDiscNonRP,
            calcTotalRECollateral: calcTotalRECollateral,
            calcTotalRevenue: calcTotalRevenue,
            click3PC: click3PC,
            clickADDLAND: clickADDLAND,
            clickAOI: clickAOI,
            clickARMAPP: clickARMAPP,
            clickARMUCC: clickARMUCC,
            clickBORCVD: clickBORCVD,
            clickCCC: clickCCC,
            clickCLOSE: clickCLOSE,
            clickCROPINS: clickCROPINS,
            clickDISTAPP: clickDISTAPP,
            clickDISTUCC: clickDISTUCC,
            clickFSA: clickFSA,
            clickITS: clickITS,
            clickLEASE: clickLEASE,
            clickLIEN: clickLIEN,
            clickPERINS: clickPERINS,
            clickREBA: clickREBA,
            clickREC: clickREC,
            countiesInState: countiesInState,
            createLenda: createLenda,
            diffInDates: diffInDates,
            getAllCommits: getAllCommits,
            getAllCrops: getAllCrops,
            getArmCommit: getArmCommit,
            getArmDistCollateral: getArmDistCollateral,
            getArmInterest: getArmInterest,
            getArmPrincipal: getArmPrincipal,
            getDefaultDueDate: getDefaultDueDate,
            getDistCommit: getDistCommit,
            getDistInterest: getDistInterest,
            getDistPrincipal: getDistPrincipal,
            getFeeForArmProc: getFeeForArmProc,
            getFeeForArmSrvc: getFeeForArmSrvc,
            getFeesForArm: getFeesForArm,
            getFullSeason: getFullSeason,
            getIrrPerString: getIrrPerString,
            getLoanBreakEvenPercent: getLoanBreakEvenPercent,
            getOtherCommit: getOtherCommit,
            getOtherPrincipal: getOtherPrincipal,
            getTotalClaims: getTotalClaims,
            getTotalCommit: getTotalCommit,
            getTotalFSAPayment: getTotalFSAPayment,
            getTotalInterest: getTotalInterest,
            getTotalPrincipal: getTotalPrincipal,
            gtZero: gtZero,
            inArray: inArray,
            incomeBookValue: incomeBookValue,
            incomeCropTotal: incomeCropTotal,
            incomeCropValue: incomeCropValue,
            incomeHarvestValue: incomeHarvestValue,
            income_totalCollateral: income_totalCollateral,
            income_totalCropValue: income_totalCropValue,
            monitorAdjustedRisk: monitorAdjustedRisk,
            monitorCashFlow: monitorCashFlow,
            monitorRiskMargin: monitorRiskMargin,
            moveToNextNewLoanScreen: moveToNextNewLoanScreen,
            nullOrNot: nullOrNot,
            patchIt: patchIt,
            postIt: postIt,
            putIt: putIt,
            returnColor: returnColor,
            sumThese: sumThese
        };
        return publicAPI;

        //////////
        function agentsInAgency(id) {
            return $http.get(API_URL + '/agencies/' + id + '/agents');
        }

        function averageArray(arr) {
            var sum = arr.reduce(function (a, b) {
                return a + b;
            }, 0);
            var avg = sum / arr.length;
            return avg;
        }

        function calcAdjustedProd(loan) {
            if(!loan){ return 0; }

            var prod = incomeCropValue(loan);
            var bkd_val = incomeBookedValue(loan);
            var rebate_val = incomeRebateValue(loan);

            var formula = Number(prod) + Number(bkd_val) + Number(rebate_val);
            return formula;
        }

        function calcArmAndDist(loan) {
            if(!loan) { return 0;}

            var arm_principal = getArmPrincipal(loan);
            var dist_principal = getDistPrincipal(loan);
            var arm_interest = getArmInterest(loan);
            var dist_interest = getDistInterest(loan);

            var formula = Number(arm_principal) + Number(dist_principal) + Number(arm_interest) + Number(dist_interest);
            return formula;
        }

        function calcBreakEvenPercent(loan) {
            //TODO: Hard Coded
            return 76;
            //return Number(calcArmAndDist(loan)) / Number(calcAdjustedProd(loan));
        }

        function calcCropValue(obj) {
            if(!obj.yield){
                obj.yield = obj.ins_yield;
            }
            //console.log('calcCropValue', obj);
            return obj.acres * obj.yield * obj.price * (obj.share/100);
        }

        function calcAdjProd(loan) {
            var adj_prod = _.sumCollection(loan.loancrops, 'crop_total');
            return adj_prod;
        }

        function calcAdjustedRiskMargin(loan) {
            if(!loan) { return 0; }

            var old_adjusted_risk_margin = loan.fins.adjusted_risk;
            return -999999; //TODO: find out formula
        }

        function calcCashFlow(loan) {
            if(!loan) { return; }

            // adj_prod - (principal + interest)
            var old_cash_flow = loan.fins.cash_flow;
            var total_revenue = calcTotalRevenue(loan);
            var principal = getTotalPrincipal(loan);
            var interest = getTotalInterest(loan);

            var formula = Number(total_revenue) - (Number(principal) - Number(interest));
            return formula;
        }

        function calcEquipmentCollateralTotal(loan) {
            if(!loan) { return; }

            var col = loan.collateral.equipment;
            return _.sumCollection(col, 'amount');
        }

        function calcEquipmentCollateralValue(loan) {
            if(!loan) { return; }

            var formula = (Number(calcEquipmentCollateralTotal(loan)) * (1 - (Number(loan.fins.equipment_percent) / 100))) - Number(loan.priorlien.totals.equipment);

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcFSACollateralValue(loan) {
            if(!loan) { return; }

            var formula = (Number(loan.fins.total_fsa_payment) * (1 - (Number(loan.fins.fsa_assignment_percent) / 100))) - Number(loan.priorlien.totals.fsa_payments);

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcInsCoverageExcess(loan) {
            //return Number(calcInsuranceTotalValue(loan)) - (loan.expenses.totals.byLoan.arm + loan.expenses.totals.byLoan.dist);
        }

        function calcInsCropValue(obj) {
            //(Guarantee-Premium)*(Share/100)*Acres
            return (Number(obj.guarantee) - Number(obj.premium)) * (Number(obj.share)/100) * Number(obj.acres);
        }

        function calcInsOverDisc(obj) {
            //console.log('calcInsOverDisc', obj);
            //InsValue - (CropValue * (1 - ProjectedCropDiscount))
            var insValue = Number(calcInsCropValue(obj));
            var cropValue = Number(calcCropValue(obj));
            var projectedCropDiscount = Number(obj.proj_crop_discount);

            //console.log(insValue, cropValue, projectedCropDiscount);
            var formula = insValue - (cropValue * (1 - (projectedCropDiscount/100)));

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcInsOverDiscNonRP(obj) {
            //(Guar-Premium)*share/100*Acres*nonRPPercent%
            if(obj.type == 'RP') {
                return 0;
            } else {
                return (obj.guarantee - obj.premium) * (obj.share/100) * obj.acres * 20/100;
            } //end if
        }

        function calcInsuranceGuaranty(obj) {
            if(!obj.yield){
                obj.yield = obj.aph;
            }
            return (Number(obj.level) / 100) * Number(obj.price) * Number(obj.yield);
        }

        function calcInsuranceTotalGuarantee(loan) {
            if(!loan) { return; }

            // TOTAL INSURANCE VALUE
            return calcTotalOverDisc(loan);
        }

        function calcInsuranceTotalValue(loan) {
            if(!loan) { return; }

            var policies = loan.insurance.byCrop;
            return _.sumCollection(policies, 'value');
        }

        function calcInsuranceValue(obj) {
            if(!obj.yield){
                obj.yield = obj.ins_yield;
            }

            return (Number(calcInsuranceGuaranty(obj)) - Number(obj.premium)) * (Number(obj.share) / 100) * obj.acres;
        }

        function calcMarketValueTotal(loan) {
            if(!loan) { return 0; }

            //formula: calcPlannedCropValue(loan) + calcFSACollateralValue(loan) + calcIODCollateralValue(loan) + calcNRPCollateralValue(loan) + calcSuppInsValue(loan) + calcEquipmentCollateralValue(loan) + calcRECollateralTotal(loan) + calcOtherCollateralValue(loan);

            return Number(loan.fins.adj_prod) + Number(loan.fins.total_fsa_payment) + Number(loan.fins.ins_disc_prod) + Number(loan.insurance.nonrp.value) + Number(loan.supplements.totals.value) + Number(calcEquipmentCollateralValue(loan)) + Number(calcRECollateralValue(loan)) + Number(calcOtherCollateralValue(loan));
        }

        function calcIODCollateralValue(loan) {
            if(!loan) { return 0; }
            var li = loan.insurance.byCrop;
            var lc = loan.loancrops;

            //MAX(InsuranceValue-(CropValue*(1-disc_ins_percent)),0)
            var ins_val = _.sumCollection(li, 'value');
            var crop_val = _.sumCollection(lc, 'crop_value');
            var disc_ins_pc = Number(loan.fins.disc_ins_percent)/100;
            var prior_lien_iod = Number(loan.priorlien.totals.ins_over_discount);

            var formula = ins_val - (crop_val * (1 -  disc_ins_pc)) - prior_lien_iod;

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcNRPCollateralValue(loan) {
            if(!loan) { return; }

            var formula = (Number(loan.insurance.nonrp.value) * (1 - (Number(loan.fins.non_rp_percent) / 100))) - Number(loan.priorlien.totals.nonrp_discount);

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcOtherCollateralTotal(loan) {
            if(!loan) { return; }

            var col = loan.collateral.other;
            return _.sumCollection(col, 'amount');
        }

        function calcOtherCollateralValue(loan) {
            if(!loan) { return; }

            var formula = (Number(calcOtherCollateralTotal(loan)) * (1 - Number(loan.fins.other_discount_percent) / 100)) - Number(loan.priorlien.totals.other);

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcPlannedCropValue(loan) {
            if(!loan) { return 0; }

            var adj_prod = calcAdjProd(loan);
            var disc_prod_pc = Number(loan.fins.disc_prod_percent)/100;
            var lien_projection = Number(loan.priorlien.totals.projected_crops);

            var formula = adj_prod * (1 - disc_prod_pc) - lien_projection;

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcPriorLienTotal(loan) {
            if(!loan) { return; }

            var lean = loan.priorlien;
            return _.sumCollection(lean, 'lientotal');
        }

        function calcRECollateralTotal(loan) {
            if(!loan) { return; }

            var col = loan.collateral.realestate;
            return _.sumCollection(col, 'amount');
        }

        function calcRECollateralValue(loan) {
            if(!loan) { return; }

            var formula = (Number(calcRECollateralTotal(loan)) * (1 - Number(loan.fins.realestate_percent) / 100)) - Number(loan.priorlien.totals.realestate);

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcRiskMargin(loan) {
            if(!loan) { return; }

            var old_risk_margin = loan.fins.risk;
            var total_collateral = calcTotalCollateral(loan);
            var arm_and_dist = calcArmAndDist(loan);

            var formula = Number(total_collateral) - Number(arm_and_dist);

            //console.log('R/M', total_collateral, arm_and_dist, formula );

            return formula;
        }

        function calcSuppInsTotalAcres(loan) {
            if(!loan) { return; }

            var supps = loan.supplements.policies;
            return _.sumCollection(supps, 'acres');
        }

        function calcSuppInsTotalValue(loan) {
            if(!loan) { return; }

            var supps = loan.supplements.policies;
            return _.sumCollection(supps, 'value');
        }

        function calcSuppInsValue(loan) {
            if(!loan) { return; }

            var formula = (Number(loan.supplements.totals.value) * (1 - (Number(loan.fins.supplement_insurance_discount_percent) / 100))) - Number(loan.priorlien.totals.supplemental_coverage);

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcTotalCollateral(loan) {
            if(!loan) { return; }

            var formula = Number(calcAdjProd(loan)) +
                   Number(calcFSACollateralValue(loan)) +
                   Number(calcIODCollateralValue(loan)) +
                   Number(calcNRPCollateralValue(loan)) +
                   Number(calcSuppInsValue(loan)) +
                   Number(calcEquipmentCollateralValue(loan)) +
                   Number(calcRECollateralValue(loan)) +
                   Number(calcOtherCollateralValue(loan));

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcTotalCropValue(loan) {
            if(!loan) { return; }
            var col = loan.loancrops;

            //console.log('loan.loancrops', col);
            //console.log('pluck', _.pluck(col, 'crop_value') );
            //console.log('pluckNcompact', _.compact(_.pluck(col, 'crop_value')) );
            //console.log('pluckNcompactNsum', _.sum(_.compact(_.pluck(col, 'crop_value'))) );
            //return 555;
            //return _.sumCollection(col, 'crop_value');
            return  _.sum(_.compact(_.pluck(col, 'crop_value')));
        }

        function calcTotalEquipmentCollateral(loan) {
            if(!loan) { return; }

            var collection = loan.collateral.equipment;
            return _.sumCollection(collection, 'amount');
        }

        function calcTotalExpenses(loan) {
            if(!loan) { return; }

            return getTotalPrincipal(loan);
        }

        function calcTotalInsGuar(loan) {
            if(!loan) { return; }

            //insurance.byCrop
            var guar = _.reduce(loan.insurance.byCrop, function(sum, obj){
                return sum + Number(obj.guarantee);
            }, 0);
            return guar;
        }

        function calcTotalInsValue(loan) {
            if(!loan) { return 0; }
            var col = loan.insurance.byCrop;

            return _.sumCollection(col, 'value');
        }

        function calcTotalOtherCollateral(loan) {
            if(!loan) { return; }

            var collection = loan.collateral.other;
            return _.sumCollection(collection, 'amount');
        }

        function calcTotalOverDisc(loan) {
            //InsValue - (CropValue * (1 - ProjectedCropDiscount))
            var insValue = Number(calcTotalInsValue(loan));
            var cropValue = Number(calcTotalCropValue(loan));
            var projectedCropDiscount = Number(_.pluckuniq(loan.insurance.byCrop, 'proj_crop_discount'));

            var formula = insValue - (cropValue * (1 - (projectedCropDiscount/100)));

            if(Number(formula) > 0) {
                return Number(formula);
            } else {
                return 0;
            }
        }

        function calcTotalOverDiscNonRP(loan) {
            if(!loan) { return; }

            var guarantee = _.reduce(loan.insurance.byCrop, function(sum, obj){
                if(obj.type !== 'RP') {
                    return sum + Number(obj.guarantee);
                } // end if
            }, 0);
            var premium = _.reduce(loan.insurance.byCrop, function(sum, obj){
                if(obj.type !== 'RP') {
                    return sum + Number(obj.premium);
                } //end if
            }, 0);
            var share = _.reduce(loan.insurance.byCrop, function(sum, obj){
                if(obj.type !== 'RP') {
                    return Number(obj.share);
                } // end if
            }, 0);
            var acres = _.reduce(loan.insurance.byCrop, function(sum, obj){
                if(obj.type !== 'RP') {
                    return Number(obj.acres);
                } // end if
            }, 0);

            var nonRP = (Number(guarantee) - Number(premium)) * (Number(share)/100) * Number(acres);

            if( !nonRP ) {
                return 0;
            } else {
                return nonRP;
            } // end if
        }

        function calcTotalRECollateral(loan) {
            if(!loan) { return; }

            var collection = loan.collateral.realestate;
            return _.sumCollection(collection, 'amount');
        }

        function calcTotalRevenue(loan) {
            if(!loan) { return; }
            //R/M == totalCollateral - commit_total

           // console.log('calcTotalCropValue', calcTotalCropValue(loan));
            //console.log('FSA', loan.fins.total_fsa_payment);
            //console.log('Claims', loan.fins.total_claims);
            return calcTotalCropValue(loan) + Number(loan.fins.total_fsa_payment) + Number(loan.fins.total_claims);
        }

        //TODO: REQUIRED UPLOAD
        function click3PC(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'Third Party Credit Verification',
                filename: 'verify3partycredit.pdf',
                title: 'Third Party Credit Verification Received',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.received_3party) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function(){
                        if(Number(obj.received_3party) == 1){
                            record3PC(user, 3, obj);
                        } else {
                            record3PC(user, 1, obj);
                            if(obj.its_list !== 1) {
                                recordITS(user, 3, obj);
                            }
                            if(obj.fsa_compliant !== 1) {
                                recordFSA(user, 3, obj);
                            }
                            if(obj.prev_lien_verified !== 1) {
                                recordLIEN(user, 3, obj);
                            }
                            if(obj.leases_valid !== 1) {
                                recordLEASE(user, 3, obj);
                            }
                            if(obj.bankrptcy_order_received !== 1) {
                                recordBORCVD(user, 3, obj);
                            }
                        } // end if
                    }, function(){
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        // ADDLAND COMPLETE
        function clickADDLAND(obj, user) {
            if(Number(obj.added_land_verified) == 1){
                recordADDLAND(user, 3, obj);
            } else {
                recordADDLAND(user, 1, obj);
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD (Need Name)
        function clickAOI(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'AOI',
                filename: 'aoi.pdf',
                title: 'AOI',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.aoi_received) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.aoi_received) == 1){
                            recordAOI(user, 3, obj);
                        } else {
                            recordAOI(user, 1, obj);
                            if(obj.loan_type_id == 5 || obj.loan_type_id == 6) {
                                recordCCC(user, 1, obj);
                                if(!obj.has_rebates) {
                                    recordREBA(user, 1, obj);
                                }
                            }
                        } // end if
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        // TODO: ARMAPP - DIFFERENT FUNCTIONALITY
        function clickARMAPP(obj, user) {
            if (!obj.analyst_can_approve) { return; }
            if(Number(obj.arm_approved) == 1){
                recordARMAPP(user, 3, obj);
            } else {
                recordARMAPP(user, 1, obj);
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD (Need Name)
        function clickARMUCC(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'ARMUCC',
                filename: 'armucc.pdf',
                title: 'ARMUCC',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.arm_ucc_received) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.arm_ucc_received) == 1){
                            recordARMUCC(user, 3, obj);
                        } else {
                            recordARMUCC(user, 1, obj);
                            if(!obj.has_distributor) {
                                recordDISTUCC(user, 1, obj);
                            }
                            if(!obj.quests.insInPlace) {
                                recordAOI(user, 1, obj);
                            }
                        } // end if
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD
        function clickBORCVD(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'Order to Incur Debt',
                filename: 'orderToIncur.pdf',
                title: 'Bankruptcy Order Received',
                buttons: ['ok', 'cancel']
            };

            if( Number(obj.bankruptcy_order_received) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function () {
                        if(Number(obj.bankruptcy_order_received) == 1){
                            recordBORCVD(user, 3, obj);
                        } else {
                            recordBORCVD(user, 1, obj);
                            if (!obj.quests.credit_3p_available) {
                                record3PC(user, 1, obj);
                            }
                            if (obj.its_list !== 1) {
                                recordITS(user, 3, obj);
                            }
                            if (obj.fsa_compliant !== 1) {
                                recordFSA(user, 3, obj);
                            }
                            if (obj.prev_lien_verified !== 1) {
                                recordLIEN(user, 3, obj);
                            }
                            if (obj.leases_valid !== 1) {
                                recordLEASE(user, 3, obj);
                            }
                        } // end if
                    }, function () {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD (Need Name)
        function clickCCC(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'CCC',
                filename: 'ccc.pdf',
                title: 'CCC',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.ccc_received) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.loan_type_id) !== 5 && Number(obj.loan_type_id) !== 6) {
                            obj.ccc_received = 1;
                            return;
                        }

                        if(Number(obj.ccc_received) === 1) {
                            recordCCC(user, 3, obj);
                        } else {
                            if(!obj.has_rebates) {
                                recordREBA(user, 1, obj);
                            }
                            recordCCC(user, 1, obj);
                        } // end if
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        // TODO: CLOSE - DIFFERENT FUNCTIONALITY
        function clickCLOSE(obj, user) {
            if(Number(obj.loan_closed) == 1){
                recordCLOSE(user, 3, obj);
            } else {
                recordCLOSE(user, 1, obj);
            } // end if

            return obj;
        }

        //TODO: MODAL FOR UPLOAD OR INSPECTION FORM
        function clickCROPINS(obj, user) {
            if(obj.loan_type_id != 5 || obj.loan_type_id != 6) { return; }
            if(Number(obj.crop_inspection) == 1){
                recordCROPINS(user, 3, obj);
            } else {
                recordCROPINS(user, 1, obj);
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD
        function clickDISTAPP(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'Distributor Approval',
                filename: 'distributorApproval.pdf',
                title: 'Distributor Approval',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.dist_approved) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.dist_approved) == 1){
                            recordDISTAPP(user, 3, obj);
                        } else {
                            recordDISTAPP(user, 1, obj);
                        } // end if
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD (Need Name)
        function clickDISTUCC(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'DISTUCC',
                filename: 'distucc.pdf',
                title: 'DISTUCC',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.dist_ucc_received) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.dist_ucc_received) == 1){
                            recordDISTUCC(user, 3, obj);
                        } else {
                            recordDISTUCC(user, 1, obj);
                            if(!obj.quests.insInPlace) {
                                recordAOI(user, 1, obj);
                            }
                        } // end if
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        // FSA COMPLETE
        function clickFSA(obj, user) {
            if(Number(obj.fsa_compliant) == 1){
                recordFSA(user, 3, obj);
                if(!obj.quests.liens) {
                    recordLIEN(user, 1, obj);
                }
            } else {
                recordFSA(user, 1, obj);
                if(obj.its_list !== 1) {
                    recordITS(user, 3, obj);
                }
            } // end if

            return obj;
        }

        // ITS COMPLETE
        function clickITS(obj, user) {
            if(Number(obj.its_list) == 1){
                recordITS(user, 3, obj);
            } else {
                recordITS(user, 1, obj);
                if(!obj.quests.insInPlace) {
                    recordFSA(user, 1, obj);
                }
            } // end if

            return obj;
        }

        //TODO: OPTIONAL UPLOAD
        function clickLEASE(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'Leases Verified',
                filename: 'leasesVerified.pdf',
                title: 'Leases Verified',
                buttons: ['ok', 'cancel']
            };
            ModalService.optionalUpload(data)
                .then(function () {
                    toastr.info('Optional file upload declined.', 'No File Uploaded');
                    if(Number(obj.leases_valid) == 1){
                        recordLEASE(user, 3, obj);
                    } else {
                        recordLEASE(user, 1, obj);
                        if(!obj.quests.bankruptcy_order) {
                            recordBORCVD(user, 1, obj);
                        }
                        if(obj.its_list !== 1) {
                            recordITS(user, 3, obj);
                        }
                        if(obj.fsa_compliant !== 1) {
                            recordFSA(user, 3, obj);
                        }
                        if(obj.prev_lien_verified !== 1) {
                            recordLIEN(user, 3, obj);
                        }
                    } // end if
                }, function () {
                    toastr.warning('No data saved.', 'User Cancelled Action');
                });

            return obj;
        }

        // LIEN COMPLETE
        function clickLIEN(obj, user) {
            if(Number(obj.prev_lien_verified) == 1){
                recordLIEN(user, 3, obj);
            } else {
                recordLIEN(user, 1, obj);
                if(obj.its_list !== 1) {
                    recordITS(user, 3, obj);
                }
                if(obj.fsa_compliant !== 1) {
                    recordFSA(user, 3, obj);
                }
            } // end if

            return obj;
        }

        // PERINS COMPLETE
        function clickPERINS(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'Permission to Insure',
                filename: 'permissionToInsure.pdf',
                title: 'Permission To Insure',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.permission_to_insure_verified) !== 1){
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.permission_to_insure_verified) == 1){
                            recordPERINS(user, 3, obj);
                        } else {
                            recordPERINS(user, 1, obj);
                        }
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
               // Update Existing Document
            } // end if

            return obj;
        }

        //TODO: REQUIRED UPLOAD
        function clickREBA(obj, user) {
            var data = {
                loanID: obj.id,
                document: 'Rebate Assignment',
                filename: 'rebateAssignment.pdf',
                title: 'Rebate Assignment',
                buttons: ['ok', 'cancel']
            };

            if(Number(obj.rebate_assignment) !== 1) {
                ModalService.requiredUpload(data)
                    .then(function() {
                        if(Number(obj.rebate_assignment) == 1){
                            recordREBA(user, 3, obj);
                        } else {
                            recordREBA(user, 1, obj);
                            if(obj.loan_type_id == 5 || obj.loan_type_id == 6) {
                                recordCROPINS(user, 1, obj);
                            }
                        } // end if
                    }, function() {
                        toastr.warning('No data saved.', 'User Cancelled Action');
                    });
            } else {
                // Update Existing Document
            } // end if

            return obj;
        }

        //TODO: LoanToClose Actions needed
        function clickREC(obj, user) {
            if(Number(obj.recommended) == 1){
                recordREC(user, 3, obj);
            }

            return obj;
        }

        function countiesInState(id) {
            return $http.get(API_URL + '/states/' + id + '/counties');
        }

        /*
        * obj includes loan_id, user_id and comment
        */
        function createLenda(obj) {
            $http.post(API_URL + '/comments', obj)
                .then(function (res) {
                    toastr.warning(obj.comment, 'LENDA', {closeButton: true});
                });
        }

        function diffInDates(first, second) {
            var intFirst = Number(first);
            var intSecond = Number(second);

            if (intFirst < intSecond) {
                return intSecond - intFirst;
            } else {
                return intFirst - intSecond;
            } // end if
        }

        function getAllCommits(loan) {
            var exps = [],
                calced = [];
            if(loan.expenses.loancrops) {
                exps = loan.expenses.byEntry;
            } else {
                exps = loan.expenses;
            }
            var expsByEntry = exps.byEntry;

            var grped = _.chain(expsByEntry).groupBy('crop').value();

            var byCrop = [];
            angular.forEach(grped, function(crop) {
                var byExp = [];
                angular.forEach(crop, function(exp) {
                    var acred = Number(exp.acres);
                    var single = {
                        expense: exp.expense,
                        crop_id: exp.loancrop_id,
                        acres: acred,
                        arm: Number(exp.arm),
                        arm_total: acred * Number(exp.arm),
                        dist: Number(exp.dist),
                        dist_total: acred * Number(exp.dist),
                        other: Number(exp.other),
                        other_total: acred * Number(exp.other)
                    };
                    this.push(single);
                }, byExp);
                this.push(byExp);
            }, byCrop);

            var armed = _.sumCollection(byCrop[0], 'arm_total');
            var disted = _.sumCollection(byCrop[0], 'dist_total');
            var othered = _.sumCollection(byCrop[0], 'other_total');

            return {
                arm: armed,
                dist: disted,
                other: othered,
                total: Number(armed) + Number(disted) + Number(othered)
            };
        }

        function getAllCrops() {
            //TODO: Hard Coded
            return ['corn', 'soybeans', 'beansFAC', 'sorghum', 'wheat', 'cotton', 'rice', 'peanuts', 'sugarcane'];
        }

        function fixDollars(num, digits) {
            num += 0.5;
            var numS = num.toString(),
                decPos = numS.indexOf('.'),
                substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
                trimmedResult = numS.substr(0, substrLength),
                finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;
            return parseFloat(finalResult);

        }

        function getArmDistCollateral(loan) {
            if(!loan) { return; }

            return Number(getArmPrincipal(loan)) + Number(getDistPrincipal(loan));
        }

        function getArmCommit(loan) {
            var comms = getAllCommits(loan);
            return comms.arm;
        }

        function getArmInterest(loan) {
            if(!loan) { return; }

            return Number(getArmPrincipal(loan)) * (Number(loan.fins.int_percent_arm)/100);
        }

        function getArmPrincipal(loan) {
            //crop inputs + fees
            if(!loan) { return; }

            return Number(getArmCommit(loan)) + Number(getFeesForArm(loan));
        }

        function getDistCommit(loan) {
            var comms = getAllCommits(loan);
            return comms.dist;
        }

        function getDistInterest(loan) {
            if(!loan) { return; }

            return Number(getDistPrincipal(loan)) * (Number(loan.fins.int_percent_dist)/100);
        }

        function getDistPrincipal(loan) {
            if(!loan) { return; }

            return Number(getDistCommit(loan));
        }

        function getOtherCommit(loan) {
            var comms = getAllCommits(loan);
            return comms.other;
        }

        function getLoanBreakEvenPercent(loan) {
            var armPrincipal = getArmPrincipal(loan);
            var armInterest = getArmInterest(loan);
            var distPrincipal = getDistPrincipal(loan);
            var distInterest = getDistInterest(loan);
            var totalFSAPayment = getTotalFSAPayment(loan);
            var totalClaims = getTotalClaims(loan);
            var projectedIncomeTotal = calcTotalRevenue(loan);

            //console.log('armPrincipal', armPrincipal);
            //console.log('armInterest', armInterest);
            //console.log('distPrincipal', distPrincipal);
            //console.log('distInterest', distInterest);
            //console.log('totalFSAPayment', totalFSAPayment);
            //console.log('totalClaims',totalClaims);
            //console.log('projectedIncomeTotal', projectedIncomeTotal);

            //return 76.3;
            return ((armPrincipal + armInterest) + (distPrincipal + distInterest) - totalFSAPayment - totalClaims)/(projectedIncomeTotal - totalFSAPayment - totalClaims);
        }

        function getOtherPrincipal(loan) {
            if(!loan) { return; }

            return Number(getOtherCommit(loan));
        }

        function getTotalInterest(loan) {
            if(!loan) { return; }

            return Number(getArmInterest(loan)) + Number(getDistInterest(loan));
        }

        function getTotalPrincipal(loan) {
            if(!loan) { return 0; }
            if(!loan.expenses){ return 0; }

            return Number(loan.expenses.totals.byLoan.total) + Number(getFeesForArm(loan));
        }

        function getDefaultDueDate(type, year) {
            switch (type) {
                case '5':
                case '6':
                case '7':
                    return '3/15/' + year;
                default:
                    return '12/15/' + year;
            } // end switch
        }

        function getFeeForArmProc(loan) {
            if(!loan) { return; }

            var prFee = 0,
                armCommit = getArmCommit(loan),
                distCommit = getDistCommit(loan),
                procFeePercent = loan.fins.fee_processing_percent;

            if(loan.fins.fee_processing_onTotal) {
                prFee = (armCommit + distCommit) * (procFeePercent/100);
            } else {
                prFee = armCommit * (procFeePercent/100);
            } // end if

            // TODO: use global for minimum prFee
            if(prFee < 330) {
                prFee = 330;
            }

            return prFee;
        }

        function getFeeForArmSrvc(loan) {
            if(!loan) { return; }

            var svcFee = 0,
                armCommit = getArmCommit(loan),
                distCommit = getDistCommit(loan),
                srvcFeePercent = loan.fins.fee_service_percent;

            if(loan.fins.fee_service_onTotal) {
                svcFee = (armCommit + distCommit) * (srvcFeePercent/100);
            } else {
                svcFee = armCommit * (srvcFeePercent/100);
            } //end if

            return svcFee;
        }

        function getFeesForArm(loan) {
            if(!loan) { return; }

            var prFee = getFeeForArmProc(loan),
                svcFee = getFeeForArmSrvc(loan);

            return prFee + svcFee;
        }

        function getFullSeason(initial) {
            switch (initial) {
                case 'F':
                    return 'Fall';
                case 'S':
                    return 'Spring';
            } // end switch
        }

        function getIrrPerString(loan) {
            if(!loan) { return; }

            var IrrPer = '';
            var bEven = [];
            var lc = loan.loancrops;

            _.forEach(lc, function(item){
                if(item.acres > 0){
                    IrrPer += item.crop.name + ': ' + item.percent_irrigated + '% | ' ;
                }
            });

            if(IrrPer.length === 0){
                IrrPer = 'No crops selected.';
            } else {
                IrrPer = IrrPer.slice(0, -2);
            }

            return IrrPer;
        }

        function getTotalClaims(loan) {
            if(!loan) {return 0; }

            var col = loan.loancrops;
            return _.sumCollection(col, 'claims');
        }

        function getTotalCommit(loan){
            return Number(getArmCommit(loan)) + Number(getDistCommit(loan)) + Number(getOtherCommit(loan));
        }

        function getTotalFSAPayment(loan) {
            if(!loan) {return 0; }

            var col = loan.loancrops;
            return _.sumCollection(col, 'fsa_payment');
        }

        function gtZero(value) {
            if (value <= 0) {
                return 'text-center';
            }
            else {
                return 'text-right';
            }
        }

        function inArray(needle, haystack) {
            if (haystack.indexOf(needle) === -1) {
                return false;
            }

            return true;
        }

        function incomeBookedValue(loan) {
            if(!loan){ return 0; }

            //TODO: Get values
            var bkprice = 0;
            var bkqty = 0;
            var price = 0;
            var harvest = 0;
            var prod_yield = 0;
            var acres = 0;

            var formula = ((Number(bkprice) - Number(price)) * Number(bkqty)) - (Number(harvest) * Number(prod_yield) * Number(acres));
            return formula;
        }

        function incomeBookValue(o) {
            return (Number(o.bkprice) - Number(o.prod_price)) * Number(o.bkqty);
        }

        function incomeCropTotal(o) {
            return incomeCropValue(o) + incomeBookValue(o) - incomeHarvestValue(o);
        }

        function incomeCropValue(o) {
            return Number(o.acres) * Number(o.prod_yield) * Number(o.prod_price) * (Number(o.prod_share)/100);
        }

        function incomeHarvestValue(o) {
            return Number(o.acres) * Number(o.prod_yield) * Number(o.harvest);
        }

        function incomeRebateValue(loan) {
            var rebate = 999999;
            var prod_yield = 999999;
            var prod_share = 999999;
            var acres = 999999;

            var formula = Number(rebate) * Number(prod_yield) * Number(prod_share) * Number(acres);
            return formula;
        }

        function income_totalCollateral(loan) {
            if(!loan) { return; }

            //R/M == income_totalCollateral - commitment_total
            var allCropValue = _.reduce(loan.loancrops, function(sum, obj){
                return sum + fixDollars(Number(obj.crop_total),0);
            }, 0);

            var totRev = allCropValue + Number(loan.fins.total_fsa_payment) + Number(loan.fins.total_claims);
            return totRev;
        }

        function income_totalCropValue(loan) {
            if(!loan) { return; }

            var allCropValue = _.reduce(loan.loancrops, function(sum, obj){
                return sum + Number(obj.crop_total);
            }, 0);
            return allCropValue;
        }

        function moveToNextNewLoanScreen(screenName, $stateParams) {
            //debugger;
            $http.get(API_URL + '/loantypes/' + $stateParams.loantypeID + '/screens')
                .then(function success(response) {
                    var screens = response.data.data;
                    //find screenName in screens
                    var cScreenId = _.findIndex(screens, function (i) {
                        return i.screen === screenName;
                    });
                    if (screens[parseInt(cScreenId) + 1] !== undefined) {
                        var cScreen = screens[parseInt(cScreenId) + 1];
                        var nextScr = cScreen.screen;
                        cScreen.status = 1;
                        //console.log(cScreen);
                        $state.go('new.' + nextScr, $stateParams);
                    } else {
                        $state.go('edit.summary', $stateParams);
                    }
                });
        }

        function nullOrNot(obj) {
            return !angular.isDefined(obj) || obj===null;
        }

        function monitorAdjustedRisk(loan) {
            if(!loan) { return; }

            var old_adj_risk = Number(loan.fins.risk_adj);
            var adj_risk = Number(loan.fins.risk_adj);
            return adj_risk;
        }

        function monitorCashFlow(loan) {
            if(!loan) { return; }

            var old_cash_flow = Number(loan.fins.cash_flow);
            var cash_flow = Number(loan.fins.cash_flow);
            return cash_flow;
        }

        function monitorRiskMargin(loan) {
            if(!loan) { return; }

            var old_risk_margin = Number(loan.fins.risk);
            var risk_margin = Number(loan.fins.risk);
            return risk_margin;
        }

        function patchIt(end, id, data) {
            return $http.patch(API_URL + end + id, data);
        }

        function postIt(end, data) {
            return $http.post(API_URL + end, data);
        }

        function putIt(end, id, data) {
            return $http.put(API_URL + end + id, data);
        }

        function returnColor(val) {
            /* 0-Gray, 1-Green, 2-Yellow, 3-Red, 4-Blue */
            /* 5-Orange, 6-Yellow+, 7-Orange+, 8-Red+ */
            var colors = ['gray', 'green', 'yellow', 'red', 'blue', 'orange', 'yellow_inner', 'orange_inner', 'red_inner'];
            return colors[val] || 'gray';
        }

        function sumThese(a, b) {
            return a + b;
        }

        //////////
        /* PRIVATE FUNCTIONS */
        function record3PC(user, status, obj) {
            if( Number(status) === 0) {
                obj.received_3party = 0;
                Logger.newSystemic(obj.id, user, 'Marked Third Party Credit Verification as not started.');
            } else if( Number(status) === 1) {
                obj.received_3party = 1;
                Logger.newSystemic(obj.id, user, 'Marked Received Third Party Credit Verification as complete.');
            } else {
                obj.received_3party = 3;
                Logger.newSystemic(obj.id, user, 'Marked Received Third Party Credit Verification as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {received_3party: obj.received_3party});
            return obj;
        }

        function recordADDLAND(user, status, obj) {
            if( Number(status) === 0) {
                obj.added_land_verified = 0;
                Logger.newSystemic(obj.id, user, 'Marked Added Land Verified as not started.');
            } else if( Number(status) === 1) {
                obj.added_land_verified = 1;
                Logger.newSystemic(obj.id, user, 'Marked Added Land Verified as complete.');
            } else {
                obj.added_land_verified = 3;
                Logger.newSystemic(obj.id, user, 'Marked Added Land Verified as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {added_land_verified: obj.added_land_verified});
            return obj;
        }

        function recordAOI(user, status, obj) {
            if( Number(status) === 0) {
                obj.aoi_received = 0;
                Logger.newSystemic(obj.id, user, 'Marked AOI Received as not started.');
            } else if( Number(status) === 1) {
                obj.aoi_received = 1;
                Logger.newSystemic(obj.id, user, 'Marked AOI Received as complete.');
            } else {
                obj.aoi_received = 3;
                Logger.newSystemic(obj.id, user, 'Marked AOI Received as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {aoi_received: obj.aoi_received});
            return obj;
        }

        function recordARMAPP(user, status, obj) {
            if( Number(status) === 0) {
                obj.arm_approved = 0;
                Logger.newSystemic(obj.id, user, 'Marked ARM Approved as not started.');
            } else if( Number(status) === 1) {
                obj.arm_approved = 1;
                Logger.newSystemic(obj.id, user, 'Marked ARM Approved as complete.');
            } else {
                obj.arm_approved = 3;
                Logger.newSystemic(obj.id, user, 'Marked ARM Approved as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {arm_approved: obj.arm_approved});
            return obj;
        }

        function recordARMUCC(user, status, obj) {
            if( Number(status) === 0) {
                obj.arm_ucc_verified = 0;
                Logger.newSystemic(obj.id, user, 'Marked ARM UCC Verified as not started.');
            } else if( Number(status) === 1) {
                obj.arm_ucc_verified = 1;
                Logger.newSystemic(obj.id, user, 'Marked ARM UCC Verified as complete.');
            } else {
                obj.arm_ucc_verified = 3;
                Logger.newSystemic(obj.id, user, 'Marked ARM UCC Verified as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {arm_ucc_verified: obj.arm_ucc_verified});
            return obj;
        }

        function recordBORCVD(user, status, obj) {
            if( Number(status) === 0) {
                obj.bankrptcy_order_received = 0;
                Logger.newSystemic(obj.id, user, 'Marked Bankruptcy Order Received as not started.');
            } else if( Number(status) === 1) {
                obj.bankruptcy_order_received = 1;
                Logger.newSystemic(obj.id, user, 'Marked Bankruptcy Order Received as complete.');
            } else {
                obj.bankruptcy_order_received = 3;
                Logger.newSystemic(obj.id, user, 'Marked Bankruptcy Order Received as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {bankruptcy_order_received: obj.bankruptcy_order_received});
            return obj;
        }

        function recordCCC(user, status, obj) {
            if( Number(status) === 0) {
                obj.ccc_received = 0;
                Logger.newSystemic(obj.id, user, 'Marked CCC Received as not started.');
            } else if( Number(status) === 1) {
                obj.ccc_received = 1;
                Logger.newSystemic(obj.id, user, 'Marked CCC Received as complete.');
            } else {
                obj.ccc_received = 3;
                Logger.newSystemic(obj.id, user, 'Marked CCC Received as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {ccc_received: obj.ccc_received});
            return obj;
        }

        function recordCLOSE(user, status, obj) {
            if( Number(status) === 0) {
                obj.loan_closed = 0;
                Logger.newSystemic(obj.id, user, 'Marked Loan Closed as not started.');
            } else if( Number(status) === 1) {
                obj.loan_closed = 1;
                Logger.newSystemic(obj.id, user, 'Marked Loan Closed as complete.');
            } else {
                obj.loan_closed = 3;
                Logger.newSystemic(obj.id, user, 'Marked Loan Closed as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {loan_closed: obj.loan_closed});
            return obj;
        }

        function recordCROPINS(user, status, obj) {
            if( Number(status) === 0) {
                obj.crop_inspection = 0;
                Logger.newSystemic(obj.id, user, 'Marked Crop Inspection as not started.');
            } else if( Number(status) === 1) {
                obj.crop_inspection = 1;
                Logger.newSystemic(obj.id, user, 'Marked Crop Inspection as complete.');
            } else {
                obj.crop_inspection = 3;
                Logger.newSystemic(obj.id, user, 'Marked Crop Inspection as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {crop_inspection: obj.crop_inspection});
            return obj;
        }

        function recordDISTAPP(user, status, obj) {
            if( Number(status) === 0) {
                obj.dist_approved = 0;
                Logger.newSystemic(obj.id, user, 'Marked Distributor Approved as not started.');
            } else if( Number(status) === 1) {
                obj.dist_approved = 1;
                Logger.newSystemic(obj.id, user, 'Marked Distributor Approved as complete.');
            } else {
                obj.dist_approved = 3;
                Logger.newSystemic(obj.id, user, 'Marked Distributor Approved as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {dist_approved: obj.dist_approved});
            return obj;
        }

        function recordDISTUCC(user, status, obj) {
            if( Number(status) === 0) {
                obj.dist_ucc_received = 0;
                Logger.newSystemic(obj.id, user, 'Marked Distributor UCC Received as not started.');
            } else if( Number(status) === 1) {
                obj.dist_ucc_received = 1;
                Logger.newSystemic(obj.id, user, 'Marked Distributor UCC Received as complete.');
            } else {
                obj.dist_ucc_received = 3;
                Logger.newSystemic(obj.id, user, 'Marked Distributor UCC Received as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {dist_ucc_received: obj.dist_ucc_received});
            return obj;
        }

        function recordFSA(user, status, obj) {
            if( Number(status) === 0) {
                obj.fsa_compliant = 0;
                Logger.newSystemic(obj.id, user, 'Marked FSA Compliant as not started.');
            } else if( Number(status) === 1) {
                obj.fsa_compliant = 1;
                Logger.newSystemic(obj.id, user, 'Marked FSA Compliant as complete.');
            } else {
                obj.fsa_compliant = 3;
                Logger.newSystemic(obj.id, user, 'Marked FSA Compliant as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {fsa_compliant: obj.fsa_compliant});
            return obj;
        }

        function recordITS(user, status, obj) {
            if( Number(status) === 0) {
                obj.its_list = 0;
                Logger.newSystemic(obj.id, user, 'Marked ITS List as not started.');
            } else if( Number(status) === 1) {
                obj.its_list = 1;
                Logger.newSystemic(obj.id, user, 'Marked ITS List as complete.');
            } else {
                obj.its_list = 3;
                Logger.newSystemic(obj.id, user, 'Marked ITS List as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {its_list: obj.its_list});
            return obj;
        }

        function recordLEASE(user, status, obj) {
            if( Number(status) === 0) {
                obj.leases_valid = 0;
                Logger.newSystemic(obj.id, user, 'Marked Leases Valid as not started.');
            } else if( Number(status) === 1) {
                obj.leases_valid = 1;
                //TODO: OPTIONAL UPLOAD MODAL
                Logger.newSystemic(obj.id, user, 'Marked Leases Valid as complete.');
            } else {
                obj.leases_valid = 3;
                Logger.newSystemic(obj.id, user, 'Marked Leases Valid as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {leases_valid: obj.leases_valid});
            return obj;
        }

        function recordLIEN(user, status, obj) {
            if( Number(status) === 0) {
                obj.prev_lien_verified = 0;
                Logger.newSystemic(obj.id, user, 'Marked Prior Lien as not started.');
            } else if( Number(status) === 1) {
                obj.prev_lien_verified = 1;
                Logger.newSystemic(obj.id, user, 'Marked Prior Lien as complete.');
            } else {
                obj.prev_lien_verified = 3;
                Logger.newSystemic(obj.id, user, 'Marked Prior Lien as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {prev_lien_verified: obj.prev_lien_verified});
            return obj;
        }

        function recordPERINS(user, status, obj) {
            if( Number(status) === 0) {
                obj.permission_to_insure_verified = 0;
                Logger.newSystemic(obj.id, user, 'Marked Permission to Insure Verification as not started.');
            } else if( Number(status) === 1) {
                obj.permission_to_insure_verified = 1;
                Logger.newSystemic(obj.id, user, 'Marked Permission to Insure Verification as complete.');
            } else {
                obj.permission_to_insure_verified = 3;
                Logger.newSystemic(obj.id, user, 'Marked Permission to Insure Verification as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {permission_to_insure_verified: obj.permission_to_insure_verified});
            return obj;
        }

        function recordREBA(user, status, obj) {
            if( Number(status) === 0) {
                obj.rebate_assignment = 0;
                Logger.newSystemic(obj.id, user, 'Marked Rebate Assignment as not started.');
            } else if( Number(status) === 1) {
                obj.rebate_assignment = 1;
                Logger.newSystemic(obj.id, user, 'Marked Rebate Assignment as complete.');
            } else {
                obj.rebate_assignment = 3;
                Logger.newSystemic(obj.id, user, 'Marked Rebate Assignment as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {rebate_assignment: obj.rebate_assignment});
            return obj;
        }

        function recordREC(user, status, obj) {
            if( Number(status) === 0) {
                obj.recommended = 0;
                Logger.newSystemic(obj.id, user, 'Marked Recommended as not started.');
            } else if( Number(status) === 1) {
                obj.recommended = 1;
                Logger.newSystemic(obj.id, user, 'Marked Recommended as complete.');
            } else {
                obj.recommended = 3;
                Logger.newSystemic(obj.id, user, 'Marked Recommended as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {recommended: obj.recommended});
            return obj;
        }
    } // end controller function
})();
