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
                cellClass: 'text-center',
                headerClass: 'text-center'
            },
            {
                field: 'crop_year',
                displayName: 'Year',
                cellClass: 'text-center',
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
                cellClass: 'text-center',
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
                field: 'due_date',
                displayName: 'Due',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.voDueDate : false)
            },
            {
                field: 'region',
                displayName: 'Reg',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.voRegion : false)
            },
            {
                field: 'season',
                displayName: 'Season',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.voSeason : false)
            },
            {
                field: 'distributor',
                displayName: 'Dist',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.voDistributor : false)
            },
            {
                field: 'agency',
                displayName: 'Agency',
                headerClass: 'text-center',
                visible: ($scope.user ? $scope.user.viewopts.voAgency : false)
            },
            {
                field: 'fins.commit_total',
                displayName: 'Total Commit',
                headerClass: 'text-center',
                cellFilter: 'flexCurrency:0',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.voCommitTotal : false)
            },
            {
                field: 'fins.commit_arm',
                displayName: 'ARM Commit',
                headerClass: 'text-center',
                cellFilter: 'flexCurrency:0',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.voCommitArm : false)
            },
            {
                field: 'fins.commit_dist',
                displayName: 'Dist Commit',
                headerClass: 'text-center',
                cellFilter: 'flexCurrency:0',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.voCommitDistributor : false)
            },
            {
                field: 'fins.commit_other',
                displayName: 'Other Commit',
                headerClass: 'text-center',
                cellFilter: 'flexCurrency:0',
                cellClass: 'text-right',
                visible: ($scope.user ? $scope.user.viewopts.voCommitOther : false)
            },
            {
                field: 'fins.total_fee_percent',
                displayName: 'Fee %',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'flexPercent:1',
                visible: ($scope.user ? $scope.user.viewopts.voFeePercentage : false)
            },
            {
                field: 'fins.fee_total',
                displayName: 'Fee Total',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'currency',
                visible: ($scope.user ? $scope.user.viewopts.voFeeTotal : false)
            },
            {
                field: 'fins.int_percent_arm',
                displayName: 'ARM Rate %',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'displaypercent',
                visible: ($scope.user ? $scope.user.viewopts.voRateArm : false)
            },
            {
                field: 'fins.int_percent_dist',
                displayName: 'Dist Rate %',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'displaypercent',
                visible: ($scope.user ? $scope.user.viewopts.voRateDist : false)
            },
            {
                field: 'fins.balance_remaining',
                displayName: 'Balance',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'currency',
                visible: ($scope.user ? $scope.user.viewopts.voBalanceDue : false)
            },
            {
                field: 'fins.total_acres',
                displayName: 'Acres: Total',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresTotal : false)
            },
            {
                field: 'loancrops[0].acres',
                displayName: 'Acres: Corn',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresCorn : false)
            },
            {
                field: 'loancrops[1].acres',
                displayName: 'Acres: Soybeans',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresSoybeans : false)
            },
            {
                field: 'loancrops[2].acres',
                displayName: 'Acres: Soybeans FAC',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresBeansFAC : false)
            },
            {
                field: 'loancrops[3].acres',
                displayName: 'Acres: Sorghum',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresSorghum : false)
            },
            {
                field: 'loancrops[4].acres',
                displayName: 'Acres: Wheat',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresWheat : false)
            },
            {
                field: 'loancrops[5].acres',
                displayName: 'Acres: Cotton',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresCotton : false)
            },
            {
                field: 'loancrops[6].acres',
                displayName: 'Acres: Rice',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresRice : false)
            },
            {
                field: 'loancrops[7].acres',
                displayName: 'Acres: Peanuts',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresPeanuts : false)
            },
            {
                field: 'loancrops[8].acres',
                displayName: 'Acres: Cane',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresSugarcane : false)
            },
            {
                field: 'loancrops[9].acres',
                displayName: 'Acres: Other',
                cellClass: 'text-right',
                headerClass: 'text-center',
                cellFilter: 'number:1',
                visible: ($scope.user ? $scope.user.viewopts.voAcresOther : false)
            }
        ];

        function getIndicatorWidth(){
            var cnt = 0;

            if($scope.user.viewopts.voIconAddendum) {
                cnt += 1;
            }
            if($scope.user.viewopts.voIconCross) {
                cnt += 1;
            }
            if($scope.user.viewopts.voIconBankruptcy) {
                cnt += 1;
            }
            if($scope.user.viewopts.voIcon3pcredit) {
                cnt += 1;
            }
            if($scope.user.viewopts.voIconAddedland) {
                cnt += 1;
            }
            if($scope.user.viewopts.voIconDisbursement) {
                cnt += 1;
            }
            if($scope.user.viewopts.voIconAttachments) {
                cnt += 1;
            }

            return {
                visible: (cnt === 0 ? false : true),
                width: cnt * 17
            }; //140;
        }
    } // end controller
})();
