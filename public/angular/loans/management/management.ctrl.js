(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ManagementController', ManagementController);

        ManagementController.$inject = ['$scope', '$filter', 'orderByFilter'];

        function ManagementController($scope, $filter, orderByFilter){
            $scope.pending_view = 1;
            $scope.orderOptions = ['applicant', '-categoryOrder'];
            $scope.orderOption = 'applicant';

            $scope.indWid = getIndicatorWidth();

            $scope.gridOptions = {
                data: 'sortedLoanList',
                rowHeight: 40,
                showFilter: true,
                nextOrder: $scope.nextOrder,
                //showGroupPanel: true,
                enableRowSelection: false,
                //enableCellEdit: true,
                columnDefs: 'columnDefs'
            };

            $scope.columnDefs = [
                {
                    field: 'pending',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/pending.icons.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/pending.header.cell.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '95'
                },
                {
                    field: 'notification',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/indicators.html',
                    cellClass: 'text-center',
                    width: $scope.indWid.width,
                    visible: $scope.indWid.visible
                },
                {
                    field: 'farmer.farmer',
                    displayName: 'Farmer',
                    headerClass: 'text-center'
                },
                {
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    cellTemplate: 'angular/layout/grid_tmpl/applicant.html'
                },
                {
                    field: 'loan_type_abr',
                    displayName: 'Type',
                    headerClass: 'text-center'
                },
                {
                    field: 'crop_year',
                    displayName: 'Crop Yr',
                    headerClass: 'text-center'
                },
                {
                    field: 'loc_abr',
                    displayName: 'Loc',
                    headerClass: 'text-center'
                },
                {
                    field: 'status_id',
                    displayName: 'Status',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    cellTemplate: 'angular/layout/grid_tmpl/status.html'
                }
            ];

            $scope.nextOrder = function(stat) {
                //debugger;
                if (stat === 0) {
                    $scope.orderOption = ['applicant'];
                } else {
                    $scope.orderOption = ['-need_vote', '-has_comment', '-is_stale', '-is_watched', '-disbursement_issue'];
                } // end if
            }; // end next order

            function getIndicatorWidth(){
                var cnt = 0;

                if($scope.user.viewopts.view_icon_addendum) {
                    cnt += 1;
                }
                if($scope.user.viewopts.view_icon_cross) {
                    cnt += 1;
                }
                if($scope.user.viewopts.view_icon_bankruptcy) {
                    cnt += 1;
                }
                if($scope.user.viewopts.view_icon_3pcredit) {
                    cnt += 1;
                }
                if($scope.user.viewopts.view_icon_addedland) {
                    cnt += 1;
                }
                if($scope.user.viewopts.view_icon_disbursement) {
                    cnt += 1;
                }
                if($scope.user.viewopts.view_icon_attachments) {
                    cnt += 1;
                }

                return {
                    visible: (cnt === 0 ? false : true),
                    width: cnt * 20
                }; //140;
            }
        } // end controller
})();
