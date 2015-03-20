(function () {
    'use strict';
    /* jshint ignore:start */
    angular
        .module('ARM')
        .controller('YieldController', YieldController);

    YieldController.$inject = ['$scope', '$state', '$stateParams', 'InitialData', 'AppFactory', 'LoansFactory'];

    function YieldController($scope, $state, $stateParams, InitialData, AppFactory, LoansFactory) {
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

        $scope.loan = $scope.loan || InitialData.data.data[0];

        $scope.averageArray = AppFactory.averageArray;

        if (!$scope.loan.loanCrops) {
            LoansFactory.getLoanCrops($stateParams.loanID)
                .then(function success(response) {
                    $scope.loan.loanCrops = response.data.data;
                });
        }

        if (!$scope.defaultYields) {
            LoansFactory.getDefaultYields($scope.loan.loc_id)
                .then(function success(rsp) {
                    var yields = rsp.data.data;
                    $scope.defaultYields = yields;
                });
        }

        $scope.updateYield = function () {
            //TODO: Create function
            alert('Updating');
        }

        $scope.moveFromYields = function () {
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        }
    }
    /* jshint ignore:end */
})();
