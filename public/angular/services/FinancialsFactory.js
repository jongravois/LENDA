(function(){
    'use strict';
    angular
      .module('ARM')
        .factory('FinancialsFactory', FinancialsFactory);

        FinancialsFactory.$inject = [];

        /* @ngInject */
        function FinancialsFactory(){
            return {};

          } // end factory
})();