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

            $scope.farmer = ($scope.loan.farmer_id && parseInt($scope.loan.farmer_id) > 0 ? true : false);
            $scope.applicant = ($scope.loan.applicant_id && parseInt($scope.loan.applicant_id) > 0 ? true : false);

        } // end function
})();