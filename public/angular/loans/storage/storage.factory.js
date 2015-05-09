(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('StorageFactory', StorageFactory);

    StorageFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function StorageFactory($http, $q, API_URL) {
        var service = {
            calcContractAmount: calcContractAmount,
            calcEligible: calcEligible,
            calcRevenue: calcRevenue,
            getStorageContracts: getStorageContracts
        };

        return service;

        //////////
        function calcContractAmount(o) {
            return _.reduce(o, function(result, item){
                return result + item.contract_amount;
            }, 0);
        }
        function calcEligible(o, percent) {
            var rev = _.reduce(o, function(result, item){
                return result + item.revenue;
            }, 0);
            return rev * percent / 100;
        }
        function calcRevenue(o) {
            return _.reduce(o, function(result, item){
                return result + item.revenue;
            }, 0);
        }
        function getStorageContracts(id) {
            return $http.get(API_URL + '/loans/' + id + '/storage');
        }
    } // end factory
})();