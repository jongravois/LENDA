(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('ReportsFactory', ReportsFactory);

    ReportsFactory.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function ReportsFactory($http, API_URL) {
        return {
            getJson: getJson
        };

        /* @ngInject */
        function getJson(fn) {
            return $http.get(API_URL + fn);
        }

    } // end factory
})();
