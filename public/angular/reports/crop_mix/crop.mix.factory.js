(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('CropMixFactory', CropMixFactory);

    CropMixFactory.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function CropMixFactory($http, API_URL) {
        return {
            getCropMix: getCropMix
        };

        /* @ngInject */
        function getCropMix() {
            return $http.get('./crop.mix.json');
        }

    } // end factory
})();
