(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('SystemicsController', SystemicsController);
    
        SystemicsController.$inject = ['$scope', '$state', '$stateParams', 'LoansFactory'];
    
        function SystemicsController($scope, $state, $stateParams, LoansFactory){

        } // end function
})();