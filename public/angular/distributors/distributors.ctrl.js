(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('DistributorsController', DistributorsController);

    DistributorsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

    function DistributorsController($scope, $state, $stateParams,
                                   AppFactory, LoansFactory) {
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

        if (!$scope.distributor) {
            LoansFactory.getDistributor($stateParams.loanID).then(function success(rsp) {
                $scope.distributor = rsp.data.data[0];
            });
        }

        $scope.newDistributor = $scope.newDistributor || {};

        $scope.insertDistributor = function (obj) {
            obj.loan_id = $stateParams.loanID;

            LoansFactory.createDistributor(obj);
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };

        $scope.onDistributorSelect = function ($item, $model, $label) {
            if ($item) {
                $scope.distributorID = $item.id;
                $scope.newDistributor = $item;
                $scope.$apply();
            }
        };

    }
})();
