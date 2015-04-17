(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LoansProcessor', LoansProcessor);

    LoansProcessor.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function LoansProcessor($http, $q, API_URL) {

        //PUBLIC API
        return {
            getLoansWithExtraData: getLoansWithExtraData
        };

        function getLoansWithExtraData() {
            return $http.get(API_URL + '/loans').then(updateLoansData);
        }

        function getLoanQuestions(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/quests')
                .then(function (response) {
                    //console.log('LoanQuestions: ', response);
                    return (response.data.data[0]);
                });
        }

        function getPendingComments(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/commentstatus')
                .then(function (response) {
                    //console.log(response);
                    if(response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }
                });
        }

        function getPendingVotes(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/pendingvotes')
                .then(function (response) {
                    if(response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }

                });
        }

        function getTotalInsValue(loan) {
            return $http.get(API_URL + '/insurance/' + loan.id + '/value')
                .then(function (response) {
                    return response.data;
                });
        }

        function updateLoanData(loan) {
            return $q.all({
                need_vote: getPendingVotes(loan),
                has_comment: getPendingComments(loan),
                total_ins_value: getTotalInsValue(loan),
                quests: getLoanQuestions(loan)
            })
                .then(function (updatedData) {
                    angular.extend(loan, updatedData);
                    return loan;
                });
        }

        function updateLoansData(response) {
            var allLoans = response.data.data;
            return $q.all(allLoans.map(updateLoanData));
        }

    } // end factory
})();
