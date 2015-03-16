(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('AddendumsFactory', AddendumsFactory);

    AddendumsFactory.$inject = ['$http', '$q', 'API_URL', 'LoansFactory'];

    /* @ngInject */
    function AddendumsFactory($http, $q, API_URL, LoansFactory) {
        var service = {
            getLoanAddendums: getLoanAddendums
        };

        return service;

        //////////
        function getLoanAddendums(id){
            return $http.get(API_URL + '/loans/' + id + '/addendums');
        }
    } // end factory
})();