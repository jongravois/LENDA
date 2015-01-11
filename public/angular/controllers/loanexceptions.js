(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('LoanExceptionsController', LoanExceptionsController);
    
        LoanExceptionsController.$inject = ['$scope'];
    
        function LoanExceptionsController(
            $scope
        ){} // end function
})();