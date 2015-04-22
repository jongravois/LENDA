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
            calcInsuranceGuaranty: calcInsuranceGuaranty,
            calcInsuranceValue: calcInsuranceValue,
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
            diffInDates: diffInDates,
            getDefaultDueDate: getDefaultDueDate,
            getFullSeason: getFullSeason,
            gtZero: gtZero,
            inArray: inArray,
            moveToNextNewLoanScreen: moveToNextNewLoanScreen,
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

        function calcInsuranceGuaranty(obj) {
            return ((obj.aph * 1 * obj.level / 100 * obj.price) - obj.premium) * (obj.acres * obj.share / 100);
        }

        function calcInsuranceValue(obj) {
            return (obj.guaranty - obj.premium) * obj.share / 100 * obj.acres;
        }

        function click3PC(obj, user) {
            console.log('obj:', obj);
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

            return obj;
        }

        function clickADDLAND(obj, user) {
            if(Number(obj.added_land_verified) == 1){
                recordADDLAND(user, 3, obj);
            } else {
                recordADDLAND(user, 1, obj);
            } // end if

            return obj;
        }

        function clickAOI(obj, user) {
            if(Number(obj.aoi_received) == 1){
                recordAOI(user, 3, obj);
            } else {
                recordAOI(user, 1, obj);
                if(obj.loan_type_id == 5 || obj.loan_type_id == 6) {
                    recordCCC(user, 1, obj);
                }
            } // end if

            return obj;
        }

        function clickARMAPP(obj, user) {
            if (!obj.analyst_can_approve) { return; }
            if(Number(obj.arm_approved) == 1){
                recordARMAPP(user, 3, obj);
            } else {
                recordARMAPP(user, 1, obj);
            } // end if

            return obj;
        }

        function clickARMUCC(obj, user) {
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

            return obj;
        }

        function clickBORCVD(obj, user) {
            //TODO: REQUIRED MODAL FOR UPLOAD
            var data = {
                loanID: obj.id,
                document: 'Order to Incur Debt',
                filename: 'orderToIncur.pdf',
                title: 'Bankruptcy Order Received',
                buttons: ['ok', 'cancel']
            };
            ModalService.requiredUpload(data)
                .then(function() {
                    alert('OK, then!');
                }, function() {
                    toastr.warning('No data saved.', 'User Cancelled Action');
                });
            /*if(Number(obj.bankruptcy_order_received) == 1){
                recordBORCVD(user, 3, obj);
            } else {
                recordBORCVD(user, 1, obj);
                if(!obj.quests.credit_3p_available) {
                    record3PC(user, 1, obj);
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
             if(obj.leases_valid !== 1) {
             recordLEASE(user, 3, obj);
             }*/

            return obj;
        }

        function clickCCC(obj, user) {
            if(obj.loan_type_id != 5 || obj.loan_type_id != 6) { return; }
            if(Number(obj.ccc_received) == 1){
                recordCCC(user, 3, obj);
            } else {
                recordCCC(user, 1, obj);
            } // end if

            return obj;
        }

        function clickCLOSE(obj, user) {
            if(Number(obj.loan_closed) == 1){
                recordCLOSE(user, 3, obj);
            } else {
                recordCLOSE(user, 1, obj);
            } // end if

            return obj;
        }

        function clickCROPINS(obj, user) {
            if(obj.loan_type_id != 5 || obj.loan_type_id != 6) { return; }
            if(Number(obj.crop_inspection) == 1){
                recordCROPINS(user, 3, obj);
            } else {
                recordCROPINS(user, 1, obj);
            } // end if

            return obj;
        }

        function clickDISTAPP(obj, user) {
            if(Number(obj.dist_approved) == 1){
                recordDISTAPP(user, 3, obj);
            } else {
                recordDISTAPP(user, 1, obj);
            } // end if

            return obj;
        }

        function clickDISTUCC(obj, user) {
            if(Number(obj.dist_ucc_received) == 1){
                recordDISTUCC(user, 3, obj);
            } else {
                recordDISTUCC(user, 1, obj);
                if(!obj.quests.insInPlace) {
                    recordAOI(user, 1, obj);
                }
            } // end if

            return obj;
        }

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

        function clickLEASE(obj, user) {
            //TODO: OPTIONAL MODAL FOR UPLOAD
            var data = {
                loanID: obj.id,
                document: 'Leases Verified',
                filename: 'leasesVerified.pdf',
                title: 'Leases Verified',
                buttons: ['ok', 'cancel']
            };
            ModalService.optionalUpload(data)
                .then(function() {
                    toastr.success('File uploaded.', 'Success');
                }, function() {
                    toastr.info('Optional file upload declined.', 'No File Uploaded');
                });

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

            return obj;
        }

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

        function clickPERINS(obj, user) {
            if(Number(obj.permission_to_insure_verified) == 1){
                recordPERINS(user, 3, obj);
            } else {
                recordPERINS(user, 1, obj);
                // TODO: Other Actions??
            } // end if

            return obj;
        }

        function clickREBA(obj, user) {
            if(Number(obj.rebate_assignment) == 1){
                recordREBA(user, 3, obj);
            } else {
                recordREBA(user, 1, obj);
                if(obj.loan_type_id == 5 || obj.loan_type_id == 6) {
                    recordCROPINS(user, 1, obj);
                }
            } // end if

            return obj;
        }

        function clickREC(obj, user) {
            //TODO: LoanToClose Actions needed
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
