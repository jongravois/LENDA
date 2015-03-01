(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('HomeController', function ($scope) {

            $scope.columnDefs = [
                {
                    field: 'pending',
                    displayName: ' ',
                    cellTemplate: 'angular/views/grid_tmpl/pending_icons.html',
                    width: 58
                }, {
                    field: 'notification',
                    displayName: ' ',
                    cellTemplate: 'angular/views/grid_tmpl/indicators.html',
                    cellClass: 'text-center',
                    width: 120
                }, {
                    field: 'farmer',
                    displayName: 'Farmer',
                    headerClass: 'text-center',
                    width: 140
                }, {
                    field: 'applicant',
                    displayName: 'Applicant',
                    headerClass: 'text-center',
                    width: 140,
                    cellTemplate: 'angular/views/grid_tmpl/applicant.html'
                }, {
                    field: 'loan_type',
                    displayName: 'Type',
                    cellClass: 'text-center',
                    headerClass: 'text-center'
                }, {
                    field: 'loc_abr',
                    displayName: 'Loc',
                    cellClass: 'text-center',
                    headerClass: 'text-center'
                }, {
                    field: 'region',
                    displayName: 'Reg',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_region
                }, {
                    field: 'crop_year',
                    displayName: 'Crop Yr',
                    cellClass: 'text-center',
                    headerClass: 'text-center'
                }, {
                    field: 'season',
                    displayName: 'Season',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_season
                }, {
                    field: 'app_date',
                    displayName: 'App Date',
                    cellClass: 'text-center',
                    headerClass: 'text-center'
                }, {
                    field: 'distributor',
                    displayName: 'Dist',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_distributor
                }, {
                    field: 'insurance.agency',
                    displayName: 'Agency',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    visible: $scope.user.viewoptions.view_agency
                }, {
                    field: 'status_id',
                    displayName: 'Status',
                    cellClass: 'text-center',
                    headerClass: 'text-center',
                    cellTemplate: 'angular/views/grid_tmpl/status.html'
                }, {
                    field: 'fins.commit_total',
                    displayName: 'Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_total
                }, {
                    field: 'fins.commit_arm',
                    displayName: 'ARM Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_arm
                }, {
                    field: 'fins.commit_dist',
                    displayName: 'Dist Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_distributor
                }, {
                    field: 'fins.commit_other',
                    displayName: 'Other Commit',
                    headerClass: 'text-center',
                    cellFilter: 'noCentsCurrency',
                    cellClass: 'text-right',
                    visible: $scope.user.viewoptions.view_commit_other
                }, {
                    field: 'fins.total_fee_percent',
                    displayName: 'Fee %',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'displaypercent',
                    visible: $scope.user.viewoptions.view_fee_percentage
                }, {
                    field: 'fins.fee_total',
                    displayName: 'Fee Total',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'currency',
                    visible: $scope.user.viewoptions.view_fee_total
                }, {
                    field: 'fins.int_percent_arm',
                    displayName: 'ARM Rate %',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'displaypercent',
                    visible: $scope.user.viewoptions.view_rate_arm
                }, {
                    field: 'fins.int_percent_dist',
                    displayName: 'Dist Rate %',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'displaypercent',
                    visible: $scope.user.viewoptions.view_rate_dist
                }, {
                    field: 'fins.remaining_balance',
                    displayName: 'Balance',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'currency',
                    visible: $scope.user.viewoptions.view_balance_due
                }, {
                    field: 'fins.total_acres',
                    displayName: 'Acres: Total',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_total
                }, {
                    field: 'crops[0].acres',
                    displayName: 'Acres: Corn',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_corn
                }, {
                    field: 'crops[1].acres',
                    displayName: 'Acres: Beans',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_soybeans
                }, {
                    field: 'crops[2].acres',
                    displayName: 'Acres: Sorghum',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_sorghum
                }, {
                    field: 'crops[3].acres',
                    displayName: 'Acres: Wheat',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_wheat
                }, {
                    field: 'crops[4].acres',
                    displayName: 'Acres: Cotton',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_cotton
                }, {
                    field: 'crops[5].acres',
                    displayName: 'Acres: Rice',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_rice
                }, {
                    field: 'crops[6].acres',
                    displayName: 'Acres: Peanuts',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_peanuts
                }, {
                    field: 'crops[7].acres',
                    displayName: 'Acres: Cane',
                    cellClass: 'text-right',
                    headerClass: 'text-center',
                    cellFilter: 'number:1',
                    visible: $scope.user.viewoptions.view_acres_sugar_cane
                }
            ];

            $scope.gridOptions = {
                data: 'loanList',
                rowHeight: 40,
                showFilter: true,
                //showGroupPanel: true,
                enableRowSelection: false,
                enableCellEdit: true,
                columnDefs: 'columnDefs'
            };
        });
})();
