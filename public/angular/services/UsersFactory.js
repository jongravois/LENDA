(function(){
    'use strict';
    angular.module('ARM')
      .factory('UsersFactory', function UsersFactory($http, API_URL){
        return {
          getBadges: getBadges,
          getUser: getUser,
          getUsers: getUsers
        };

        function getBadges(id){
          return '10';
        };

        function getUser(id){
          return $http.get(API_URL + '/users/' + id);
        };

        function getUsers(){
          return $http.get(API_URL + '/users');
        }
      });
})();