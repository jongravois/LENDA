(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommitteeApprovalController', CommitteeApprovalController);

    CommitteeApprovalController.$inject = ['$scope', '$http'];

    function CommitteeApprovalController ($scope, $http) {
        $scope.mySelections = [];
        $scope.refresh = function () {
            return $http.get("./committee.approval.json").success(function (data) {
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
                    field: 'committee_member',
                    displayName: 'Committee Member',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
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
                    field: 'addendum',
                    displayName: 'Addendum',
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
                    field: 'committee_vote',
                    displayName: 'Committee Vote',
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
                }
            ]
        };
    }

})();
