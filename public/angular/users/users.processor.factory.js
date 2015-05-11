(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('UsersProcessorService', UsersProcessorService);

    UsersProcessorService.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function UsersProcessorService($http, $q, API_URL) {
        var publicAPI = {
            getUsersWithExtraData: getUsersWithExtraData
        };
        return publicAPI;

        //////////
        function getUsersWithExtraData() {
            return $http.get(API_URL + '/users').then(updateUsersData);
        }
        function updateUserData(user) {
            return $q.all({
                notificator: getNotifyCount(user)
            })
                .then(function(updatedData) {
                    angular.extend(user, updatedData);
                    return user;
                });
        }
        function updateUsersData(response) {
            var allUsers = response.data.data;
            return $q.all(allUsers.map(updateUserData));
        }
        //////////
        function getNotifyCount(user) {
            var notes = user.notifications;
            var catNotify = _.chain(notes)
                .groupBy('notification_type')
                .value();
            ;
            return {
                count: (notes ? notes.length : 0),
                pending_actions: (catNotify.vote ? catNotify.vote.length : 0),
                management_required: (catNotify.office ? catNotify.office.length : 0),
                review_reports: (catNotify.report ? catNotify.report.length : 0)
            };
        }
    } // end factory
})();