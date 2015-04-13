(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('HomeController', function ($scope) {
            $scope.pending_view = 0;
            $scope.orderOptions = ['applicant', '-categoryOrder'];
            $scope.orderOption = "['applicant']";

            $scope.gridOptions = {
                data: 'loanList',
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
                    width: 90
                },
                {
                    field: 'notification',
                    displayName: ' ',
                    cellTemplate: 'angular/layout/grid_tmpl/indicators.html',
                    cellClass: 'text-center',
                    width: 140
                },
                {
                    field: 'farmer',
                    displayName: 'Farmer',
                    headerClass: 'text-center',
                    width: 140
                },
                {
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    width: 140,
                    cellTemplate: 'angular/layout/grid_tmpl/applicant.html'
                },
                {
                    field: 'loan_type',
                    displayName: 'Type',
                    headerClass: 'text-center'
                },
                {
                    field: 'loc_abr',
                    displayName: 'Loc',
                    headerClass: 'text-center'
                },
                {
                    field: 'region',
                    displayName: 'Reg',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_region || false
                },
                {
                    field: 'crop_year',
                    displayName: 'Crop Yr',
                    headerClass: 'text-center'
                },
                {
                    field: 'season',
                    displayName: 'Season',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_season || false
                },
                {
                    field: 'app_date',
                    displayName: 'App Date',
                    headerClass: 'text-center'
                },
                {
                    field: 'distributor',
                    displayName: 'Dist',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_distributor || false
                },
                {
                    field: 'insurance.agency',
                    displayName: 'Agency',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_agency || false
                },
                {
                    field: 'status_id',
                    displayName: 'Status',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    cellTemplate: 'angular/layout/grid_tmpl/status.html'
                },
                {
                    field: 'fins.commit_total',
                    displayName: 'Total Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_total || false
                },
                {
                    field: 'fins.commit_arm',
                    displayName: 'ARM Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_arm || false
                },
                {
                    field: 'fins.commit_dist',
                    displayName: 'Dist Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_distributor || false
                },
                {
                    field: 'fins.commit_other',
                    displayName: 'Other Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_other || false
                },
                {
                    field: 'fins.total_fee_percent',
                    displayName: 'Fee %',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'displaypercent',
                    visible: $scope.user.viewoptions.view_fee_percentage || false
                },
                {
                    field: 'fins.fee_total',
                    displayName: 'Fee Total',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'currency',
                    visible: $scope.user.viewoptions.view_fee_total || false
                },
                {
                    field: 'fins.int_percent_arm',
                    displayName: 'ARM Rate %',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'displaypercent',
                    visible: $scope.user.viewoptions.view_rate_arm || false
                },
                {
                    field: 'fins.int_percent_dist',
                    displayName: 'Dist Rate %',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'displaypercent',
                    visible: $scope.user.viewoptions.view_rate_dist || false
                },
                {
                    field: 'fins.remaining_balance',
                    displayName: 'Balance',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'currency',
                    visible: $scope.user.viewoptions.view_balance_due || false
                },
                {
                    field: 'fins.total_acres',
                    displayName: 'Acres: Total',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_total || false
                },
                {
                    field: 'crops[0].acres',
                    displayName: 'Acres: Corn',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_corn || false
                },
                {
                    field: 'crops[1].acres',
                    displayName: 'Acres: Beans',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_soybeans || false
                },
                {
                    field: 'crops[2].acres',
                    displayName: 'Acres: Sorghum',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_sorghum || false
                },
                {
                    field: 'crops[3].acres',
                    displayName: 'Acres: Wheat',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_wheat || false
                },
                {
                    field: 'crops[4].acres',
                    displayName: 'Acres: Cotton',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_cotton || false
                },
                {
                    field: 'crops[5].acres',
                    displayName: 'Acres: Rice',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_rice || false
                },
                {
                    field: 'crops[6].acres',
                    displayName: 'Acres: Peanuts',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_peanuts || false
                },
                {
                    field: 'crops[7].acres',
                    displayName: 'Acres: Cane',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_sugar_cane || false
                }
            ];

            $scope.nextOrder = function(stat){
                if(stat === 0){
                    $scope.orderOption = ['applicant'];
                } else {
                    $scope.orderOption = ['-need_vote', '-has_comment', '-is_stale', '-on_watch', '-disbursement_issue'];
                } // end if
            };
        });
})();
