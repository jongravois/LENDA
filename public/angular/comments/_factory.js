(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('CommentsFactory', CommentsFactory);

    CommentsFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function CommentsFactory($http, $q, API_URL) {
        return {
            getComments: getComments,
            getUserByLoan: getUserByLoan
        };

        function getComments(id, userID) {
            return $http.get(API_URL + '/loans/' + id + '/comments');
        }

        //TODO: create getUserByLoan function
        function getUserByLoan(loanId, UserId) {
            return false;
        }
    } // end controller function
})();
