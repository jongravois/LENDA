(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('EmailFactory', EmailFactory);

    EmailFactory.$inject = [];

    /* @ngInject */
    function EmailFactory() {
        return {};

    } // end controller function
})();
