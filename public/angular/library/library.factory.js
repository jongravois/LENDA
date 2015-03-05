(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LibraryFactory', LibraryFactory);

    LibraryFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function LibraryFactory($http, $q, API_URL) {
        return {
            getPdfApps: getPdfApps
        };

        function getPdfApps() {
            return $http.get(API_URL + '/pdfapps')
                .then(function success(rsp){
                    return rsp.data.data;
                });
        }
    } // end factory
})();
