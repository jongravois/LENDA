(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CropMixController', CropMixController);

    CropMixController.$inject = ['$scope', '$http'];

    function CropMixController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get('./crop.mix.json').success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
                for (var i = 0; i < len; i++) {
                    /* Horizontal Sum */
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
            showColumnMenu: true,
            enableCellSelection: true,
            // enableCellEdit: true,
            // showSelectionCheckbox: true,
            // selectWithCheckboxOnly: true,
            // selectedItems: $scope.mySelections,
            // showFooter: true,
            sortInfo:
            {
                fields:['location'],
                directions:['asc']
            },
            columnDefs: [
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
