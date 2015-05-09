(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('DefaultsFactory', DefaultsFactory);

    DefaultsFactory.$inject = [''];

    /* @ngInject */
    function DefaultsFactory() {
        var publicAPI = {};

        return publicAPI;

        //////////

    } // end factory
})();