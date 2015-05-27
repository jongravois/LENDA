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
            enableColumnReordering: true,
            enableSorting: true,
            sortInfo: { fields: ['days', 'updated', 'viewed'], directions: ['desc', 'desc', 'desc']},
            plugins: [new ngGridFlexibleHeightPlugin()],
            columnDefs: [
                /* Visible Report Data */
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
                    field: 'admin',
                    displayName: 'ADM',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    cellTemplate: '<div class="getData" my-data="{{row.getProperty(col.field)}}"></div>',
                    width: 50,
                    sortable: false
                },
                {
                    field: 'analyst',
                    displayName: 'EID',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    cellTemplate: '<div class="getData" my-data="{{row.getProperty(col.field)}}"></div>',
                    width: 50,
                    sortable: false
                },
                {
                    field: 'name',
                    displayName: 'Name',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
                    sortable: true
                },
                /*
                {
                    field: 'updated',
                    displayName: 'Updated',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "date:'shortDate'",
                    width: 75,
                    sortable: true
                },
                */
                {
                    field: 'viewed',
                    displayName: 'Viewed',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "date:'shortDate'",
                    width: 75,
                    sortable: true
                },
                {
                    field: 'days',
                    displayName: 'Days',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: "",
                    width: 75,
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
