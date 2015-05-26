(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CropMixController', CropMixController);

    CropMixController.$inject = ['$scope', '$http', 'CropMixFactory'];

    function CropMixController($scope, $http, CropMixFactory) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            // CropMixFactory.getCropMix().then(function(rsp){
            // $scope.myData = rsp.data.data;
            return $http.get('./crop.mix.json').success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
                for (var i = 0; i < len; i++) {
                    $scope.myData[i].total = $scope.myData[i].corn
                    + $scope.myData[i].soybeans
                    + $scope.myData[i].soybeansFAC
                    + $scope.myData[i].sorghum
                    + $scope.myData[i].cotton
                    + $scope.myData[i].rice
                    + $scope.myData[i].peanuts
                    + $scope.myData[i].cane
                    + $scope.myData[i].wheat
                    + $scope.myData[i].other;
                }
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
            showFilter: true,
            showGroupPanel: true,
            showColumnMenu: true,
            // enableCellSelection: true,
            // enableCellEdit: true,
            // showSelectionCheckbox: true,
            // selectWithCheckboxOnly: true,
            selectedItems: $scope.mySelections,
            // showFooter: true,
            sortInfo: {
                fields: ['location'],
                directions: ['asc']
            },
            columnDefs: [
                /* Elevated Status Icons */
                {
                    field: 'watchlist',
                    displayName: 'Watchlist',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'limit_warning',
                    displayName: 'Limit Warning',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                /* Status Icons */
                {
                    field: 'addendum',
                    displayName: 'Addendum',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'cross_collateral',
                    displayName: 'Cross Collateral',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'bankruptcy_history',
                    displayName: 'Bankruptcy',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'third_party',
                    displayName: 'Third Party',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'add_land',
                    displayName: 'Added Land',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'controlled_disbursement',
                    displayName: 'Controlled Disbursement',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                /* Management Steps */
                {
                    field: 'its_list',
                    displayName: 'ITS List',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'fsa_compliant',
                    displayName: 'FSA Compliant',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'no_prior_liens',
                    displayName: 'No Prior Liens',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'leases_valid',
                    displayName: 'Leases Valid',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'bankruptcy_order_received',
                    displayName: 'Bankruptch Order Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'third_party_credit_verified',
                    displayName: 'Third Party Credit Verified',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'recommended',
                    displayName: 'Recommended',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'arm_approved',
                    displayName: 'ARM Approved',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'dist_approved',
                    displayName: 'Dist Approved',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'close_date',
                    displayName: 'Close Date',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'added_land',
                    displayName: 'Added Land',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'database_reviewed',
                    displayName: 'Database Reviewed',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'arm_ucc_received',
                    displayName: 'ARM UCC Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'dist_ucc_received',
                    displayName: 'Dist UCC Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'aoi_received',
                    displayName: 'AOI Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'ccc_received',
                    displayName: 'CCC Received',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'rebate_assignment',
                    displayName: 'Rebate Assignment',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                {
                    field: 'account_reconciliation',
                    displayName: 'Account Reciliation',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 5,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: false
                },
                /* Visible Report Data */
                {
                    field: 'region',
                    displayName: 'R',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'location',
                    displayName: 'Loc',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: true,
                    resizable: false,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'corn',
                    displayName: 'Corn',
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
                },
                {
                    field: 'soybeans',
                    displayName: 'Soybeans',
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
                },
                {
                    field: 'soybeansFAC',
                    displayName: 'SB FAC',
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
                },
                {
                    field: 'sorghum',
                    displayName: 'Sorghum',
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
                },
                {
                    field: 'cotton',
                    displayName: 'Cotton',
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
                },
                {
                    field: 'rice',
                    displayName: 'Rice',
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
                },
                {
                    field: 'peanuts',
                    displayName: 'Peanuts',
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
                },
                {
                    field: 'cane',
                    displayName: 'Cane',
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
                },
                {
                    field: 'wheat',
                    displayName: 'Wheat',
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
                },
                {
                    field: 'other',
                    displayName: 'Other',
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
                },
                {
                    field: 'total',
                    displayName: 'Total',
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
