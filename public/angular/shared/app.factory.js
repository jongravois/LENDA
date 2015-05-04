(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('AppFactory', AppFactory);

    AppFactory.$inject = ['$http', 'API_URL', '$state', '$stateParams', 'toastr', 'Logger', 'ModalService'];

    /* @ngInject */
    function AppFactory($http, API_URL, $state, $stateParams, toastr, Logger, ModalService) {
        return {
            agentsInAgency: agentsInAgency,
            averageArray: averageArray,
            calcClaimsCollateralValue: calcClaimsCollateralValue,
            calcEquipmentCollateralValue: calcEquipmentCollateralValue,
            calcFSACollateralValue: calcFSACollateralValue,
            calcInsuranceGuaranty: calcInsuranceGuaranty,
            calcInsuranceValue: calcInsuranceValue,
            calcIODCollateralValue: calcIODCollateralValue,
            calcMarketValueTotal: calcMarketValueTotal,
            calcNRPCollateralValue: calcNRPCollateralValue,
            calcPlannedCropValue: calcPlannedCropValue,
            calcSuppInsValue: calcSuppInsValue,
            calcOtherCollateralValue: calcOtherCollateralValue,
            calcRECollateralValue: calcRECollateralValue,
            calcTotalCollateral: calcTotalCollateral,
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
            getDefaultDueDate: getDefaultDueDate,
            getFullSeason: getFullSeason,
            getIrrPerString: getIrrPerString,
            gtZero: gtZero,
            inArray: inArray,
            incomeBookValue: incomeBookValue,
            incomeCropTotal: incomeCropTotal,
            incomeCropValue: incomeCropValue,
            incomeHarvestValue: incomeHarvestValue,
            income_totalCollateral: income_totalCollateral,
            income_totalCropValue: income_totalCropValue,
            moveToNextNewLoanScreen: moveToNextNewLoanScreen,
            monitorAdjustedRisk: monitorAdjustedRisk,
            monitorCashFlow: monitorCashFlow,
            monitorRiskMargin: monitorRiskMargin,
            patchIt: patchIt,
            postIt: postIt,
            putIt: putIt,
            returnColor: returnColor,
            sumThese: sumThese
        };

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

        function calcClaimsCollateralValue(obj) {
            return (Number(obj.fins.total_claims) * (1 - (Number(obj.fins.claims_percent) / 100))) - Number(obj.priorlien[0].claims * 1);
        }

        function calcEquipmentCollateralValue(obj) {
            return (Number(obj.fins.collateral_equipment) * (1 - (Number(obj.fins.equipment_percent) / 100))) - Number(obj.priorlien[0].equipment);
        }

        function calcFSACollateralValue(obj) {
            return (Number(obj.fins.total_fsa_payment) * (1 - (Number(obj.fins.fsa_assignment_percent) / 100))) - Number(obj.priorlien[0].fsa_payments);
        }

        function calcInsuranceGuaranty(obj) {
            return ((obj.aph * 1 * obj.level / 100 * obj.price) - obj.premium) * (obj.acres * obj.share / 100);
        }

        function calcInsuranceValue(obj) {
            return (obj.guaranty - obj.premium) * obj.share / 100 * obj.acres;
        }

        function calcMarketValueTotal(loan) {
            return Number(loan.fins.adj_prod) + Number(loan.fins.total_fsa_payment) + Number(loan.fins.ins_disc_prod) + Number(loan.insurance.nonrp.value) + Number(loan.supplements.totals.value) + Number(loan.fins.collateral_equipment) + Number(loan.fins.collateral_realestate) + Number(loan.fins.total_claims) + Number(loan.othercollateral.totals.value);
        }

        function calcIODCollateralValue(obj) {
            return (Number(obj.fins.ins_disc_prod) * (1 - (Number(obj.fins.disc_ins_percent) / 100))) - Number(obj.priorlien[0].ins_over_discount);
        }

        function calcNRPCollateralValue(obj) {
            return (Number(obj.insurance.nonrp.value) * (1 - (Number(obj.fins.non_rp_percent) / 100))) - Number(obj.priorlien[0].nonrp_discount);
        }

        function calcOtherCollateralValue(obj) {
            return (Number(obj.othercollateral.totals.value) * (1 - (Number(obj.fins.other_discount_percent) / 100))) - Number(obj.priorlien[0].other);
        }

        function calcPlannedCropValue(obj) {
            return (Number(obj.fins.adj_prod) * (1 - (Number(obj.fins.disc_prod_percent) / 100))) - Number(obj.priorlien[0].projected_crops);
        }

        function calcSuppInsValue(obj) {
            return (Number(obj.supplements.totals.value) * (1 - (Number(obj.fins.supplement_insurance_discount_percent) / 100))) - Number(obj.priorlien[0].supplemental_coverage);
        }

        function calcRECollateralValue(obj) {
            return (Number(obj.fins.collateral_realestate) * (1 - Number(obj.fins.realestate_percent) / 100)) - Number(obj.priorlien[0].realestate);
        }

        function calcTotalCollateral(loan) {
            return Number(calcPlannedCropValue(loan)) +
                   Number(calcFSACollateralValue(loan)) +
                   Number(calcIODCollateralValue(loan)) +
                   Number(calcNRPCollateralValue(loan)) +
                   Number(calcSuppInsValue(loan)) +
                   Number(calcEquipmentCollateralValue(loan)) +
                   Number(calcRECollateralValue(loan)) +
                   Number(calcClaimsCollateralValue(loan)) +
                   Number(calcOtherCollateralValue(loan));
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
                buttons: ['no upload', 'cancel']
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
            if(Number(obj.permission_to_insure_verified) == 1){
                recordPERINS(user, 3, obj);
            } else {
                recordPERINS(user, 1, obj);
                // TODO: Other Actions??
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
            } else {
                recordREC(user, 1, obj);
                if(!obj.has_distributor) {
                    recordDISTAPP(user, 1, obj);
                }
            } // end if

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
            var intFirst = parseInt(first);
            var intSecond = parseInt(second);

            if (intFirst < intSecond) {
                return intSecond - intFirst;
            } else {
                return intFirst - intSecond;
            } // end if
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

        function getFullSeason(initial) {
            switch (initial) {
                case 'F':
                    return 'Fall';
                case 'S':
                    return 'Spring';
            } // end switch
        }

        function getIrrPerString(loan) {
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

        function income_totalCollateral(loan) {
            //R/M == income_totalCollateral - commitment_total
            var allCropValue = _.reduce(loan.loancrops, function(sum, obj){
                return sum + Number(obj.crop_total);
            }, 0);

            var totRev = allCropValue + Number(loan.fins.total_fsa_payment) + Number(loan.fins.total_claims);
            return totRev;
        }

        function income_totalCropValue(loan) {
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

        function monitorAdjustedRisk(loan) {
            var old_adj_risk = Number(loan.fins.risk_adj);
            var adj_risk = Number(loan.fins.risk_adj);
            return adj_risk;
        }

        function monitorCashFlow(loan) {
            var old_cash_flow = Number(loan.fins.cash_flow);
            var cash_flow = Number(loan.fins.cash_flow);
            return cash_flow;
        }

        function monitorRiskMargin(loan) {
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
