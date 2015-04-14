(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('Logger', Logger);

    Logger.$inject = ['$http', 'API_URL', 'toastr'];

    /* @ngInject */
    function Logger($http, API_URL, toastr) {
        return {
            newSystemic: newSystemic
        };

        //////////
        function newSystemic(loan, user, action) {
            var obj = {
                loan_id: loan,
                user: user,
                action: action
            };

            $http.post(API_URL + '/systemics', obj)
                .then(function (res) {
                    toastr.success('Activity has been logged', 'New Loan Activity');
                });
        }

    } // end factory
})();
