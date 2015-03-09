(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('StorageData', StorageData);

    StorageData.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function StorageData($http, API_URL) {
        return {
            load: _load
        };

        //////////
        function _load(loan_id) {
            return $http.get(API_URL + '/loans/' + loan_id + '/storage')
                .then(parseResponse);
        }

        function parseResponse(res) {
            return res.data.data;
        }

    } // end factory
})();