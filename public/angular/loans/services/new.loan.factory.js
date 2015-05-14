(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('NewLoansFactory', NewLoansFactory);

    NewLoansFactory.$inject = [''];

    /* @ngInject */
    function NewLoansFactory() {
        var publicAPI = {
            createAgInput: createAgInput,
            createAgPro: createAgPro,
            createAgVest: createAgVest,
            createAllIn: createAllIn,
            createCapitalBridge: createCapitalBridge,
            createFastTrack: createFastTrack,
            createGrainStorage: createGrainStorage
        };
        return publicAPI;

        //////////
        function createAgInput() {}
        function createAgPro() {}
        function createAgVest() {}
        function createAllIn() {}
        function createCapitalBridge() {}
        function createFastTrack() {}
        function createGrainStorage() {}
    } // end factory
})();