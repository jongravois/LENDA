(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ReferencesController', ReferencesController);

    ReferencesController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

    function ReferencesController($scope, $state, $stateParams, AppFactory, LoansFactory) {
        var curr = $state.current.url;
        var currScreen = curr.substring(1, curr.length);
        $scope.newapplication = $state.current.data.newapplication;

        if ($scope.newapplication && $scope.screens) {
            angular.forEach($scope.screens, function (obj) {
                if (obj.screen === currScreen) {
                    obj.status = 1;
                }
            });
        }// end if

        if (!$scope.references) {
            LoansFactory.getReferences($stateParams.loanID)
                .then(function success(rsp) {
                    $scope.references = rsp.data.data;
                });
        }

        $scope.moveFromReferences = function () {
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };
        $scope.createNewReference = function (o) {
            o.loan_id = $stateParams.loanID;
            LoansFactory.createReference(o)
                .then(function (rsp) {
                });
            $scope.references.push(o);
            $scope.newReference = {};
        };
    } // end function
})();
