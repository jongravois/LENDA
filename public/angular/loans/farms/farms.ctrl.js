(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('FarmsController', FarmsController);

    FarmsController.$inject = ['$scope', '$state', '$stateParams', '$filter', 'AppFactory', 'LoansFactory'];

    function FarmsController($scope, $state, $stateParams, $filter,  AppFactory, LoansFactory) {
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

        $scope.newFarm = $scope.newFarm || {};
        $scope.stateCounties = [];
        $scope.newFarm.irr = $scope.newFarm.irr || 0;
        $scope.newFarm.ni = $scope.newFarm.ni || 0;
        $scope.newFarm.facirr = $scope.newFarm.facirr || 0;
        $scope.newFarm.facni = $scope.newFarm.facni || 0;
        $scope.newFarm.acres = $scope.newFarm.acres || 0;

        if (!$scope.farms) {
            LoansFactory.getFarms($stateParams.loanID)
                .then(function success(rsp) {
                    $scope.farms = rsp.data.data;
                });
        }

        $scope.gridOptions = {
            data: 'loan.farms',
            rowHeight: 40,
            showFilter: true,
            enableCellSelection: true,
            enableCellEditOnFocus: true,
            enableRowSelection: false,
            columnDefs: 'columnDefs',
            plugins: [new ngGridFlexibleHeightPlugin()]
        };

        $scope.columnDefs = [
            {
                field: 'county.locale',
                displayName: 'St | County',
                headerClass: 'text-center',
                cellClass: 'text-left'
            },
            {
                field: 'fsn',
                displayName: 'FSN',
                enableCellEdit: true,
                cellClass: 'text-left cBlue'
            },
            {
                field: 'owner',
                displayName: 'Landlord',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-left cBlue'
            },
            {
                field: 'share_rent',
                displayName: 'Share',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-right cBlue',
                cellFilter: 'flexPercent:0'
            },
            {
                field: 'irr',
                displayName: 'AC-IR',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-right cBlue',
                cellFilter: 'number:1'
            },
            {
                field: 'ni',
                displayName: 'AC-NI',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-right cBlue',
                cellFilter: 'number:1'
            },
            {
                field: 'acres',
                displayName: 'Acres',
                headerClass: 'text-center',
                cellClass: 'text-right',
                cellFilter: 'number:1',
                cellTemplate: '<div class="padd black">{{getTotal(row.entity.irr,row.entity.ni)}}<div>'
            },
            {
                field: 'cash_rent',
                displayName: 'Cash Rent',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-right cBlue',
                cellFilter: 'flexZeroCurrency:2'
            },
            {
                field: 'when_due',
                displayName: 'When Due',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-left cBlue'
            },
            {
                field: 'waived',
                displayName: 'Waived',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-right cBlue',
                cellFilter: 'flexZeroCurrency:2'
            },
            {
                field: 'fsa_paid',
                displayName: 'FSA',
                enableCellEdit: true,
                headerClass: 'text-center',
                cellClass: 'text-right cBlue',
                cellFilter: 'flexZeroCurrency:2'
            }
        ];

        $scope.getTotal = function(a, b) {
            return $filter('number')(Number(a) + Number(b), 1);
        };

        $scope.moveFromFarms = function () {
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };

        $scope.onStateChange = function (id) {
            //alert(id);
            AppFactory.countiesInState(id)
                .then(function success(rsp) {
                    $scope.statesCounties = rsp.data.data;
                });
        };

        $scope.onCountySelect = function ($item, $model, $label) {
            if ($item) {
                $scope.newFarm.county_id = $item.id;
                $scope.newFarm.locale = $item.locale;
            }
        };

        //TODO: On Screen Move - $scope.loan.farms = $scope.farms???
        $scope.addNewFarm = function (obj) {
            if (obj.county !== '' || obj.fsn !== '') {
                obj.loan_id = $stateParams.loanID;
                obj.acres = ((1 * obj.irr) + (1 * obj.ni) + (1 * obj.facirr) + (1 * obj.facni));
                obj.percent_irrigated = (((1 * obj.irr) + (1 * obj.facirr)) / ((1 * obj.irr) + (1 * obj.ni) + (1 * obj.facirr) + (1 * obj.facni)) * 100);

                if (parseFloat(obj.waived) > 0) {
                    ExceptionsFactory.handler($stateParams.loanID, 'cashRentWaivers', false, {});
                }

                if (obj.cash_rent === 0 && obj.share === 0) {
                    ExceptionsFactory.handler($stateParams.loanID, 'rentExpenses', false, {});
                }

                LoansFactory.insertFarm(obj)
                    .then(function success(rsp) {
                        $scope.farms.push(obj);
                        $scope.newFarm = {
                            irr: 0,
                            ni: 0,
                            facirr: 0,
                            facni: 0,
                            acres: 0
                        };
                    });
            } // end if
        };

    } // end controller function
})();
