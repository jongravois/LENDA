(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('LoanManagementController', LoanManagementController);

    LoanManagementController.$inject = ['$scope', '$http'];

    function LoanManagementController($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get("./loan.management.json").success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
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
                    cellFilter: '',
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
                    sortable: true
                },
                {
                    field: 'loan_type',
                    displayName: 'Type',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'its_list',
                    displayName: 'ITS',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'fsa_compliant',
                    displayName: 'FSA',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'prior_lien',
                    displayName: 'Prior',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'leases_valid',
                    displayName: 'Lease',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'bankruptcy',
                    displayName: 'Bank',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'order_received',
                    displayName: 'Rcvd',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'third_party',
                    displayName: '3rd',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'credit_verified',
                    displayName: 'Credit',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'recommended',
                    displayName: 'REC',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'arm_approved',
                    displayName: 'ARM APP',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'dist_approved',
                    displayName: 'DIST APP',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'loan_closed',
                    displayName: 'Closed',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'added_land',
                    displayName: 'Land',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'database_reviewed',
                    displayName: 'DB Rev',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'permission_to_insure_received',
                    displayName: 'Ins',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'arm_ucc_received',
                    displayName: 'ARM UCC',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'dist_ucc_received',
                    displayName: 'DIST UCC',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'aoi_received',
                    displayName: 'AOI',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'ccc_received',
                    displayName: 'CCC',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'rebate_assignment',
                    displayName: 'Rebate',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'crop_inspection',
                    displayName: 'Inspect',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    // width: 75,
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
