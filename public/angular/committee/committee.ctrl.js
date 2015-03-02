(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommitteeController', CommitteeController);

    CommitteeController.$inject = ['$scope', '$state', '$stateParams', 'InitialData', 'AppFactory', 'LoansFactory'];

    function CommitteeController($scope, $state, $stateParams, InitialData, AppFactory, LoansFactory) {
        $scope.loan = $scope.loan || InitialData.data.data[0];

        LoansFactory.getCommittee($stateParams.loanID)
            .then(function success(rsp) {
                $scope.committee = rsp.data.data;
            });
    } // end function
})();
