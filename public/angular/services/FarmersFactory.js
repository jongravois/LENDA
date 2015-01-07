(function(){
    'use strict';
    angular.module('ARM')
      .factory('FarmersFactory', function FarmersFactory(
        $http, API_URL
      ){
          return {
            getFarmer: getFarmer,
            getFarmers: getFarmers,
            createFarmer: createFarmer,
            updateFarmer: updateFarmer
          };

          function getFarmer(id){
            return $http.get(API_URL + '/farmers/' + id);
          }

          function getFarmers(){
            return $http.get(API_URL + '/farmers');
          }

          function createFarmer(o){
            return $http.post(API_URL + '/farmers', o);
          }

          function updateFarmer(o){
            return $http.put(API_URL + '/farmers/' + o.id, o);
          }
        });
})();