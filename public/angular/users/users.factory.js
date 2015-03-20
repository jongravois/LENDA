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

        function getCurrentUser(id){
            return $http.get(API_URL + '/users/' + id)
                .then(function success(rsp){
                    var cuser = rsp.data.data;
                    cuser.badged = cuser.notifications.length;
                    cuser.tooltipNotifications = '<p>' + cuser.notifications.map(function (arr) {
                        return arr.task;
                    })
                        .join('</p><p>') + '</p>';
                    return cuser;
                });
        }

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
