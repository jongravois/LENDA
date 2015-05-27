(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('AvailableCreditController', AvailableCreditController);

    AvailableCreditController.$inject = ['$scope', '$http'];

    function AvailableCreditController($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get("./available.credit.json").success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
            enableColumnReordering: true,
            sortInfo: {
                fields: ['region', 'location', 'crop_year', 'season', 'analyst', 'farmer', 'applicant'],
                directions: ['asc', 'asc', 'asc', 'asc', 'asc', 'asc', 'asc']
            },
            plugins: [new ngGridFlexibleHeightPlugin()],
            columnDefs: [
                {
                    field: 'region',
                    displayName: 'R',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'location',
                    displayName: 'Loc',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'crop_year',
                    displayName: 'Year',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'season',
                    displayName: 'S',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'analyst',
                    displayName: 'EID',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'farmer',
                    displayName: 'Farmer',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
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
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'loan_type',
                    displayName: 'Type',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 65,
                    sortable: true
                },
                {
                    field: 'commit_arm',
                    displayName: 'Commit ARM',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'flexCurrency:0',
                    width: 100,
                    sortable: true
                },
                {
                    field: 'qb_balance',
                    displayName: 'QB Balance',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'flexCurrency:0',
                    width: 100,
                    sortable: true
                },
                {
                    field: 'available_credit',
                    displayName: 'Credit',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'flexCurrency:0',
                    width: 100,
                    sortable: true
                },
                {
                    field: 'available_credit_percent',
                    displayName: 'Credit %',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'flexPercent:2',
                    width: 100,
                    sortable: true
                },
                {
                    field: 'blank',
                    displayName: '',
                    headerClass: 'text-center',
                    width: 1
                }
            ]
        };
    }

})();
