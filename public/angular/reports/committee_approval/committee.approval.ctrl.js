(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommitteeApprovalController', CommitteeApprovalController);

    CommitteeApprovalController.$inject = ['$scope', '$http'];

    function CommitteeApprovalController($scope, $http) {
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
            enableColumnReordering: true,
            sortInfo: {
                fields: ['committee_member', 'analyst', 'applicant', 'crop_year'],
                directions: ['asc', 'asc', 'asc', 'asc']
            },
            plugins: [new ngGridFlexibleHeightPlugin()],
            columnDefs: [
                {
                    field: 'committee_member',
                    displayName: 'Member',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    // width: 75,
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
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    cellClass: 'text-left',
                    cellFilter: '',
                    // width: 75,
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
                    field: 'loan_type',
                    displayName: 'Type',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
                    sortable: true
                },
                {
                    field: 'loan_addendum',
                    displayName: 'Addendum',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 85,
                    sortable: true
                },
                {
                    field: 'committee_vote',
                    displayName: 'Vote',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    cellFilter: '',
                    width: 50,
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
