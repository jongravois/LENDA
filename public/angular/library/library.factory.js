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
            getMatrix: getMatrix,
            getPdfApps: getPdfApps
        };

        //////////
        function getCalendarEvents(){
            return $http.get(API_URL + '/calendars');
        }
        function getMatrix(){
            return $http.get(API_URL + '/matrix')
                .then(function success(rsp){
                    return rsp.data.data;
                });
        }
        function getPdfApps() {
            return $http.get(API_URL + '/pdfapps');
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
