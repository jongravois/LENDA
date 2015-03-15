(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('UsersFactory', UsersFactory);

    UsersFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function UsersFactory($http, $q, API_URL) {
        return {
            getCurrentUser: getCurrentUser,
            getNotifications: getNotifications,
            getUser: getUser,
            getUsers: getUsers
        };

        function getCurrentUser(id){}

        function getNotifications(id) {
            return $http.get(API_URL + '/users/' + id + '/notifications');
        }

        function getUser(id) {
            return $http.get(API_URL + '/users/' + id);
        }

        function getUsers() {
            return $http.get(API_URL + '/users');
        }
    } // end factory
})();
