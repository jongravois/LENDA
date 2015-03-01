(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('ReportsFactory', ReportsFactory);

    ReportsFactory.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function ReportsFactory($http, API_URL) {
        return {};

    } // end factory
})();
