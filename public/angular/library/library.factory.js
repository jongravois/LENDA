(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LibraryFactory', LibraryFactory);

    LibraryFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function LibraryFactory($http, $q, API_URL) {
        return {
            getCalendarEvents: getCalendarEvents,
            getPdfApps: getPdfApps
        };

        //////////
        function getCalendarEvents(){
            return $http.get(API_URL + '/calendars');
        }
        function getPdfApps() {
            return $http.get(API_URL + '/pdfapps')
                .then(function success(rsp){
                    return rsp.data.data;
                });
        }

        /**
         * Use LoDash to return a single record
         *
         * find: function(id){
         *      return _.find(collection, function(single){
         *          return single.id === id;
         *      });
         * }
         */
    } // end factory
})();
