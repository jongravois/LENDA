(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('PurgatoryController', PurgatoryController);

    PurgatoryController.$inject = ['$scope'];

    function PurgatoryController($scope) {
        if (!$scope.loan) {
            $scope.loan = _.find($scope.loans, function(i) {
                return i.id == $stateParams.loanID;
            });
        } // end if

        $scope.farmer = ($scope.loan.farmer_id && parseInt($scope.loan.farmer_id) > 0 ? true : false);
        $scope.applicant = ($scope.loan.applicant_id && parseInt($scope.loan.applicant_id) > 0 ? true : false);

    } // end function
})();
