(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('LoanProductsController', LoanProductsController);

        LoanProductsController.$inject = ['$scope'];

        function LoanProductsController(
            $scope
        ){} // end function
})();