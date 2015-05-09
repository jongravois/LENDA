(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('UsersProcessorService', UsersProcessorService);

    UsersProcessorService.$inject = [''];

    /* @ngInject */
    function UsersProcessorService() {
        var publicAPI = {};
        return publicAPI;

        //////////

    } // end factory
})();