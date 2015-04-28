(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('FinancialsFactory', FinancialsFactory);

    FinancialsFactory.$inject = ['$http', '$q', 'toastr', 'API_URL'];

    /* @ngInject */
    function FinancialsFactory($http, $q, toastr, API_URL) {
        var service = {
            getAppFins: getAppFins
        };

        return service;

        //////////
        function getAppFins(id) {
            $http.get(API_URL + '/loans/' + id + '/appfins')
                .then(function(rsp){
                    var appFins = rsp.data.data;
                    return appFins;
                });
        }

    } // end factory
})();