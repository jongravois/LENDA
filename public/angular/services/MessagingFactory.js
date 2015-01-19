(function(){
    'use strict';
    angular.module('ARM')
        .factory('MessagingFactory', function MessagingFactory(
            $http,
            API_URL
        ){
          return {
            getNotifications: getNotifications
          };

          function getNotifications(id){
            $http.get(API_URL + '/users/' + id + 'notifications');
          }
          });
})();