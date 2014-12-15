(function(){
    'use strict';
    angular.module('ARM')
        .factory('AffiliatesFactory', function AffiliatesFactory($http, API_URL){
            return {
                create: create
            };

            function create(o){
                return $http.post(API_URL + '/affiliates', o);
            }
          });
})();