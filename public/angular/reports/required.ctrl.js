(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('RequiredController', RequiredController);

    RequiredController.$inject = ['$scope', '$http'];

    function RequiredController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get("./required.json").success(function (data) {
                $scope.myData = data;
                var len = $scope.myData.length;
                for (var i = 0; i < len; i++) {
                    /* Days between dates */
                    var a = $scope.myData[i].updated;
                    var b = $scope.myData[i].viewed;
                    a = moment($scope.myData[i].updated, "YYYY-MM-DD");
                    b = moment($scope.myData[i].viewed, "YYYY-MM-DD");
                    var d = b.diff(a, 'days');
                    if (d >= 0){
                        $scope.myData[i].days = b.diff(a, 'days');
                    } else {
                        $scope.myData[i].days = '';
                    }
                }
            });
        };
        $scope.refresh();
        $scope.gridOptions = {
            data: 'myData',
            // enableCellEdit: true,
            // enableCellSelection: true,
            enableColumnReordering: true,
            enableHighlighting: true,
            enablePaging: true,
            enableRowReordering: true,
            enableRowSelection: true,
            enableSorting: true,
            pagingOptions: { pageSizes: [250, 500, 1000], pageSize: 250, totalServerItems: 0, currentPage: 1 },
            selectedItems: $scope.mySelections,
            // selectWithCheckboxOnly: true,
            showColumnMenu: true,
            showFilter: true,
            // showFooter: true,
            showGroupPanel: true,
            // showSelectionCheckbox: true,
            sortInfo: { fields: ['days', 'updated', 'viewed'], directions: ['desc', 'desc', 'desc']},
            columnDefs: [
                /* Visible Report Data */
                {
                    field: 'region',
                    displayName: 'R',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
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
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'admin',
                    displayName: 'ADM',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    cellTemplate: '<div class="getData" my-data="{{row.getProperty(col.field)}}"></div>',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'analyst',
                    displayName: 'EID',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    cellTemplate: '<div class="getData" my-data="{{row.getProperty(col.field)}}"></div>',
                    width: 50,
                    // maxWidth: 50,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'name',
                    displayName: 'Name',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    // maxWidth: 75,
                    groupable: true,
                    pinnable: false,
                    resizable: false,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'updated',
                    displayName: 'Updated',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "date:'shortDate'",
                    width: 80,
                    // maxWidth: 80,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'viewed',
                    displayName: 'Viewed',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "date:'shortDate'",
                    width: 80,
                    // maxWidth: 80,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'days',
                    displayName: 'Days',
                    headerClass: 'text-center',
                    cellClass: 'text-right',
                    cellFilter: "",
                    width: 80,
                    // maxWidth: 80,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                },
                {
                    field: 'blank',
                    displayName: '',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "",
                    width: 4,
                    maxWidth: 4,
                    groupable: true,
                    pinnable: false,
                    resizable: true,
                    sortable: true,
                    visible: true
                }
            ]
        };
    }

    angular
        .module('ARM').directive('getData', function() {
        return {
            restrict: 'C',
            replace: true,
            transclude: true,
            scope: { myData: '@myData' },
            template: '<div ng-switch on="myData">' +
            '<div ng-switch-when=true><span class="glyphicon glyphicon-ok"></span></div>' +
            '<div ng-switch-default></div>' +
            '</div>'
        }
    });

})();
