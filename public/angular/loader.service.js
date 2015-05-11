(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('LoaderService', LoaderService);

    LoaderService.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function LoaderService($http, $q, API_URL) {
        var publicAPI = {
            getData: getData
        };
        return publicAPI;

        //////////
        function getData() {
            // users
            // globals
            // defaults
            // feeders
            // loans
            // farmers
            // applicants
        }
    } // end factory
})();