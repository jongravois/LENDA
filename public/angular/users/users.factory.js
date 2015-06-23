(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('UsersFactory', UsersFactory);

    UsersFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function UsersFactory($http, $q, API_URL) {
        var publicAPI = {
            getCurrentUser: getCurrentUser,
            getNotifications: getNotifications,
            getUser: getUser,
            getUsers: getUsers
        };
        return publicAPI;

        ///////////
        function getCurrentUser(id){
            return $http.get(API_URL + '/users/' + id)
                .then(function success(rsp){
                    var cuser = rsp.data.data;
                    cuser.badged = cuser.notifications.length;
                    cuser.tooltipNotifications = '<p>Pending Actions: ()</p><p>Management Required: ()</p><p>Review Reports: ()</p>';
                    return cuser;
                });
        }

        function getNotifications(id) {
            return $http.get(API_URL + '/users/' + id + '/notifications');
        }

        function getNotificationText(array) {
            return '<p>Pending Actions: ()</p><p>Management Required: ()</p><p>Review Reports: ()</p>';
        }

        function getUser(id) {
            return $http.get(API_URL + '/users/' + id);
        }

        function getUsers() {
            return $http.get(API_URL + '/users');
        }
    } // end factory
})();
