(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('StorageFactory', StorageFactory);

    StorageFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function StorageFactory($http, $q, API_URL) {
        var service = {
            getStorageContracts: getStorageContracts
        };

        return service;

        //////////
        function getStorageContracts(id){
            return $http.get(API_URL + '/loans/' + id + '/storage');
        }
    } // end factory
})();