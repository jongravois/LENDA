(function(){
    'use strict';
    angular.module('ARM')
      .factory('UsersFactory', function UsersFactory($http, API_URL){
        return {
          getBadges: getBadges,
          getNotifications: getNotifications,
          getUser: getUser,
          getUsers: getUsers
        };

        function getBadges(id){
          return '6';
        };

        function getNotifications(id){
          return $http.get(API_URL + '/users/' + id + '/notifications');
        };

        function getUser(id){
          return $http.get(API_URL + '/users/' + id);
        };

        function getUsers(){
          return $http.get(API_URL + '/users');
        }
      });
})();