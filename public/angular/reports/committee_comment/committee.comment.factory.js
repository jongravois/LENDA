(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('CropMixFactory', CropMixFactory);

    CropMixFactory.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function CropMixFactory($http, API_URL) {
        return {

        };
    } // end factory
})();
