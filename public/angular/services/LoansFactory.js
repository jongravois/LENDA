(function(){
    'use strict';
    angular.module('ARM')
      .factory('LoansFactory', function LoansFactory($http, API_URL){
        return {
          getFinancials: getFinancials,
          getLoan: getLoan,
          getLoans: getLoans,
          getScreens: getScreens
        };

        function getFinancials(id){
          return $http.get(API_URL + '/loans/' + id + '/financials');
        }

        function getLoan(id){
          return id;
        }

        function getLoans(){
          return $http.get(API_URL + '/loans');
        }

        function getScreens(type){
          return $http.get(API_URL + '/loantypes/' + type + '/screens');
        }
      });
})();