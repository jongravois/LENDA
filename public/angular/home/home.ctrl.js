(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$filter', 'orderByFilter'];

    function HomeController($scope, $filter, orderByFilter) {
        $scope.pending_view = 1;
        $scope.landing_view = 'settings';
        $scope.orderOptions = "['applicant', '-categoryOrder']";
        $scope.orderOption = "['applicant']";

        $scope.changeLandingView('settings');
        $scope.nextOrder(1);

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
                field: 'app_date',
                displayName: 'App Date',
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
                field: 'region',
                displayName: 'Reg',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.view_region : false)
            },
            {
                field: 'season',
                displayName: 'Season',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.view_season : false)
            },
            {
                field: 'distributor',
                displayName: 'Dist',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.view_distributor : false)
            },
            {
                field: 'insurance.agency',
                displayName: 'Agency',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.view_agency : false)
            },
            {
                field: 'fins.commit_total',
                displayName: 'Total Commit',
                headerClass: 'text-center',
                cellFilter: 'noCentsCurrency',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.view_commit_total : false)
            },
            {
                field: 'fins.commit_arm',
                displayName: 'ARM Commit',
                headerClass: 'text-center',
                cellFilter: 'noCentsCurrency',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.view_commit_arm : false)
            },
            {
                field: 'fins.commit_dist',
                displayName: 'Dist Commit',
                headerClass: 'text-center',
                cellFilter: 'noCentsCurrency',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.view_commit_distributor : false)
            },
            {
                field: 'fins.commit_other',
                displayName: 'Other Commit',
                headerClass: 'text-center',
                cellFilter: 'noCentsCurrency',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.view_commit_other : false)
            },
            {
                field: 'fins.total_fee_percent',
                displayName: 'Fee %',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'displaypercent',
                visible: ($scope.user ? $scope.user.viewopts.view_fee_percentage : false)
            },
            {
                field: 'fins.fee_total',
                displayName: 'Fee Total',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'currency',
                visible: ($scope.user ? $scope.user.viewopts.view_fee_total : false)
            },
            {
                field: 'fins.int_percent_arm',
                displayName: 'ARM Rate %',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'displaypercent',
                visible: ($scope.user ? $scope.user.viewopts.view_rate_arm : false)
            },
            {
                field: 'fins.int_percent_dist',
                displayName: 'Dist Rate %',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'displaypercent',
                visible: ($scope.user ? $scope.user.viewopts.view_rate_dist : false)
            },
            {
                field: 'fins.remaining_balance',
                displayName: 'Balance',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'currency',
                visible: ($scope.user ? $scope.user.viewopts.view_balance_due : false)
            },
            {
                field: 'fins.total_acres',
                displayName: 'Acres: Total',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_total : false)
            },
            {
                field: 'crops[0].acres',
                displayName: 'Acres: Corn',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_corn : false)
            },
            {
                field: 'crops[1].acres',
                displayName: 'Acres: Soybeans',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_soybeans : false)
            },
            {
                field: 'crops[2].acres',
                displayName: 'Acres: Soybeans FAC',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_beansFAC : false)
            },
            {
                field: 'crops[3].acres',
                displayName: 'Acres: Sorghum',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_sorghum : false)
            },
            {
                field: 'crops[4].acres',
                displayName: 'Acres: Wheat',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_wheat : false)
            },
            {
                field: 'crops[5].acres',
                displayName: 'Acres: Cotton',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_cotton : false)
            },
            {
                field: 'crops[6].acres',
                displayName: 'Acres: Rice',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_rice : false)
            },
            {
                field: 'crops[7].acres',
                displayName: 'Acres: Peanuts',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_peanuts : false)
            },
            {
                field: 'crops[8].acres',
                displayName: 'Acres: Cane',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_sugar_cane : false)
            },
            {
                field: 'crops[9].acres',
                displayName: 'Acres: Other',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.view_acres_other : false)
            }
        ];

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
