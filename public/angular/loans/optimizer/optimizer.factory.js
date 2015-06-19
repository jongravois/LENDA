(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('OptimizerFactory', OptimizerFactory);

    OptimizerFactory.$inject = ['$q'];

    /* @ngInject */
    function OptimizerFactory($q) {
        var publicAPI = {};
        return publicAPI;

        //////////

    } // end factory
})();