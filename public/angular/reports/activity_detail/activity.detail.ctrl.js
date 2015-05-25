(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ActivityDetailController', ActivityDetailController);

    ActivityDetailController.$inject = ['$scope', '$http'];

    function ActivityDetailController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get('./activity.detail.json').success(function (data) {
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
                    field: 'qb_date',
                    displayName: 'QB Date',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "date:'shortDate'",
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: true,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'qb_type',
                    displayName: 'QB Type',
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
                    field: 'qb_amount',
                    displayName: 'QB Amount',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
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
