(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('AppFactory', AppFactory);

    AppFactory.$inject = ['$http', 'API_URL', '$state', 'toastr', 'Logger'];

    /* @ngInject */
    function AppFactory($http, API_URL, $state, toastr, Logger) {
        return {
            agentsInAgency: agentsInAgency,
            averageArray: averageArray,
            calcInsuranceGuaranty: calcInsuranceGuaranty,
            calcInsuranceValue: calcInsuranceValue,
            clickFSA: clickFSA,
            clickITS: clickITS,
            clickLIEN: clickLIEN,
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

        function clickFSA(obj, user) {
            if(Number(obj.fsa_compliant) == 1){
                recordFSA(user, 3, obj);
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
                //TODO: Check if FSA
                if(obj.fsa_compliant !== 1) {
                    recordFSA(user, 3, obj);
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
        function recordFSA(user, status, obj) {
            if( Number(status) === 1) {
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
            if( Number(status) === 1) {
                obj.its_list = 1;
                Logger.newSystemic(obj.id, user, 'Marked ITS List as complete.');
            } else {
                obj.its_list = 3;
                Logger.newSystemic(obj.id, user, 'Marked ITS List as overdue.');
            } // end if

            patchIt('/loans/', obj.id, {its_list: obj.its_list});
            return obj;
        }
        function recordLIEN() {}
    } // end controller function
})();
