(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LoansProcessor', LoansProcessor);

    LoansProcessor.$inject = ['$q', 'LoansFactory'];

    /* @ngInject */
    function LoansProcessor($q, LoansFactory) {

        //PUBLIC API
        return {
            getLoansWithExtraData: getLoansWithExtraData
        };

        function getLoansWithExtraData() {
            return LoansFactory.getLoans().then(updateLoansData);
        }

        function getLoanQuestions(loan) {
            return LoansFactory.getQuests(loan.id)
                .then(function (response) {
                    //console.log('LoanQuestions: ', response);
                    return (response.data.data[0]);
                });
        }

        function getPendingComments(loan) {
            return LoansFactory.getPendingComments(loan.id)
                .then(function (response) {
                    //console.log(response);
                    return (response.data.data.length !== 0);
                });
        }

        function getPendingVotes(loan) {
            return LoansFactory.getPendingVotes(loan.id)
                .then(function (response) {
                    return (response.data.data.length !== 0);
                });
        }

        function getTotalInsValue(loan) {
            return LoansFactory.getInsuranceTotal(loan.id)
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
