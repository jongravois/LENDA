(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('DisbursementController', function ($scope) {

            $scope.requestDisbursement = function (data) {
                console.log(data);
            };

            $scope.$watch(
                function ($scope) {
                    var total = 0;
                    angular.forEach($scope.data, function (item, index) {
                        if (angular.isDefined(item.req)) {
                            total = total + parseInt(item.req);
                        }
                    });
                    $scope.total = total;
                }
            );

            $scope.total = 0;
            $scope.data = {
                'fertilizer': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'seed': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'fungicide': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'herbicide': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'insecticide': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'custom': {
                    'budget': 19019.80,
                    'spent': 0,
                    'balance': 19019.80,
                    'req': 0
                },
                'fuel': {
                    'budget': 31305.00,
                    'spent': 0,
                    'balance': 31305.00,
                    'req': 0
                },
                'labor': {
                    'budget': 18554,
                    'spent': 0,
                    'balance': 18554,
                    'req': 0
                },
                'repairs': {
                    'budget': 12751.00,
                    'spent': 0,
                    'balance': 12751.00,
                    'req': 0
                },
                'insurance': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'harvesting': {
                    'budget': 0,
                    'spent': 0,
                    'balance': 0,
                    'req': 0
                },
                'misc_acres': {
                    'budget': 18554.00,
                    'spent': 0,
                    'balance': 18554.00,
                    'req': 0
                },
                'equipment': {
                    'budget': 23196.00,
                    'spent': 0,
                    'balance': 23196.00,
                    'req': 0
                }
            };
        });
})();
