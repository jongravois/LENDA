(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ManagementController', ManagementController);

        ManagementController.$inject = ['$scope', '$filter', 'orderByFilter'];

        function ManagementController($scope, $filter, orderByFilter){
            $scope.pending_view = 1;
            $scope.landing_view = 'settings';
            $scope.orderOptions = ['applicant', '-categoryOrder'];
            $scope.orderOption = 'applicant';

            $scope.changeLandingView('settings');
            $scope.nextOrder(1);

            $scope.indWid = getIndicatorWidth();

            $scope.gridOptions = {
                data: 'sortedLoanList',
                rowHeight: 40,
                showFilter: true,
                //showGroupPanel: true,
                enableRowSelection: false,
                //enableCellEdit: true,
                columnDefs: 'columnDefs',
                nextOrder: $scope.nextOrder,
                user: $scope.user,
                loan: $scope.loan,
                getColor: $scope.AppFactory.returnColor
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
                    headerClass: 'text-center',
                    width: '140'
                },
                {
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    cellTemplate: 'angular/layout/grid_tmpl/applicant.html',
                    width: '140'
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
                },
                {
                    field: 'its_list',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/its.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/its.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'fsa_eligibility',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/fsa.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/fsa.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'prior_lien',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/lien.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/lien.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'leases_valid',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/lease.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/lease.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'bankruptcy_order',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/borcvd.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/borcvd.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'third_party_credit',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/cred3p.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/cred3p.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'recommended',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/recommend.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/recommend.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'arm_approved',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/arm.approved.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/arm.approved.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'dist_approved',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/dist.approved.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/dist.approved.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'close',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/close.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/close.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'added_land',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/addedland.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/addedland.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'perins',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/perins.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/perins.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'arm_ucc',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/armucc.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/armucc.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'dist_ucc',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/distucc.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/distucc.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'aoi',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/aoi.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/aoi.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'ccc',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/ccc.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/ccc.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'reba',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/reba.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/reba.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '28'
                },
                {
                    field: 'cropins',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/cropins.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/cropins.hdr.html',
                    headerClass: 'text-center bright',
                    cellClass: 'text-center bright',
                    width: '28'
                },

                {
                    field: 'limit_warning',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/limit.warning.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/limit.warning.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '30'
                },
                {
                    field: 'reconciliation',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/reconciliation.html',
                    headerCellTemplate: 'angular/layout/grid_tmpl/reconciliation.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '30'
                },
                {
                    field: 'grade',
                    displayName: ' ',
                    headerCellTemplate: 'angular/layout/grid_tmpl/classification.hdr.html',
                    headerClass: 'text-center',
                    cellClass: 'text-center',
                    width: '30'
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
