(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CustomerBudgetController', CustomerBudgetController);

    CustomerBudgetController.$inject = ['$scope', '$http'];

    function CustomerBudgetController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get("./customer.budget.json").success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
            showFilter: true,
            // showColumnMenu: true,
            // enableCellSelection: true,
            // enableCellEdit: true,
            // showSelectionCheckbox: true,
            // selectWithCheckboxOnly: true,
            // selectedItems: $scope.mySelections,
            // showFooter: true,
            columnDefs: [
                {
                    field: 'region',
                    displayName: 'Region',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'location',
                    displayName: 'Location',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'crop_year',
                    displayName: 'Crop Year',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'season',
                    displayName: 'Season',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'analyst',
                    displayName: 'Analyst',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'farmer',
                    displayName: 'Farmer',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'loan_type',
                    displayName: 'Loan Type',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'qb_code',
                    displayName: 'QB Code',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'budget_amount',
                    displayName: 'Budget',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'currency',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'budget_spent',
                    displayName: 'Spent',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'currency',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'amount_remaining',
                    displayName: 'remaining',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'currency',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                }
            ]
        };
    }

})();
