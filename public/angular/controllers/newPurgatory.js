(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('NewPurgatoryController', NewPurgatoryController);

        NewPurgatoryController.$inject = ['$scope', 'Loan'];

        function NewPurgatoryController(
            $scope, Loan
        ){
            if(!$scope.loan){
                $scope.loan = Loan.data.data[0];
            } // end if
        } // end function
})();