(function(){
    'use strict';
    angular.module('ARM')
        .factory('FarmersFactory', function FarmersFactory($http, API_URL){
            return {
              getFarmer: getFarmer,
              getFarmers: getFarmers
            };

            function getFarmer(id){
              return $http.get(API_URL + '/farmers/' + id);
            }

            function getFarmers(){
              return $http.get(API_URL + '/farmers');
            }
        });
})();