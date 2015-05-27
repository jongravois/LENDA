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
            sortInfo: {
                fields: ['location','farmer'],
                directions: ['asc', 'asc']
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
                    field: 'corn',
                    displayName: 'Corn',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'soybeans',
                    displayName: 'Soybeans',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'soybeansFAC',
                    displayName: 'SB FAC',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'sorghum',
                    displayName: 'Sorghum',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'cotton',
                    displayName: 'Cotton',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'rice',
                    displayName: 'Rice',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    sortable: true
                },
                {
                    field: 'peanuts',
                    displayName: 'Peanuts',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'cane',
                    displayName: 'Cane',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'wheat',
                    displayName: 'Wheat',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'other',
                    displayName: 'Other',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
                    // width: 75,
                    sortable: true
                },
                {
                    field: 'total',
                    displayName: 'Total',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: 'number:0',
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
