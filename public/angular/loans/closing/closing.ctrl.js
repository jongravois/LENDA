(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ClosingController', ClosingController);

    ClosingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'InsuranceFactory'];

    function ClosingController($scope, $state, $stateParams, AppFactory, LoansFactory, InsuranceFactory) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    } // end function
})();
