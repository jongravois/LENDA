(function(){
    'use strict';
    angular.module('ARM')
      .factory('LoansFactory', function LoansFactory($http, API_URL){
        return {
          getFinancials: getFinancials,
          getLoans: getLoans
        };

        function getFinancials(id){
          return $http.get(API_URL + '/loans/' + id + '/financials');
        }

        function getLoans(){
          return $http.get(API_URL + '/loans');
        }
      });
})();