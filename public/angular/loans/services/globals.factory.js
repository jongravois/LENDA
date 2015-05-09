(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('GlobalsFactory', GlobalsFactory);

    GlobalsFactory.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function GlobalsFactory($http, $q, API_URL) {
        return {
            getAdminGrader: getAdminGrader,
            getGlobals: getGlobals
        };

        function getAdminGrader() {
            return $http.get(API_URL + '/admingrader/');
        }

        function getGlobals() {
            var deferred = $q.defer();
            $http.get(API_URL + '/globals')
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function(){
                    console.log('Error while making HTTP call');
                    deferred.reject();
                });
            return deferred.promise;
        }
    } // end factory
})();
