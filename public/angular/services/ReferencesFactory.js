(function(){
  'use strict';
  angular.module('ARM')
    .factory('ReferencesFactory', function ReferencesFactory($http, API_URL){
      return {
        create: create
      };

      function create(o){
        return $http.post(API_URL + '/references', o);
      }
    });
})();