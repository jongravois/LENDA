(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('reports', {
                    url: '/rpts',
                    templateUrl: 'angular/reports/home.html',
                    controller: 'ReportsController'
                })
                .state('reports.accrecon', {
                    url: '/accrecon',
                    templateUrl: 'angular/reports/account_reconciliation/account.reconciliation.html'
                })
                .state('reports.actdet', {
                    url: '/actdet',
                    templateUrl: 'angular/reports/activity_detail/activity.detail.html'
                })
                .state('reports.actsum', {
                    url: '/actsum',
                    templateUrl: 'angular/reports/activity_summary/activity.summary.html'
                })
                .state('reports.avcred', {
                    url: '/avcred',
                    templateUrl: 'angular/reports/available_credit/available.credit.html'
                })
                .state('reports.cfarm', {
                    url: '/cfarm',
                    templateUrl: 'angular/reports/flow_and_risk/cfarm.html'
                })
                .state('reports.comapp', {
                    url: '/comapp',
                    templateUrl: 'angular/reports/committee_approval/committee.approval.html'
                })
                .state('reports.comcom', {
                    url: '/comcom',
                    templateUrl: 'angular/reports/committee_comment/committee.comment.html'
                })
                .state('reports.crpmix', {
                    url: '/crpmix',
                    templateUrl: 'angular/reports/crop_mix/crop.mix.html'
                })
                .state('reports.cusbud', {
                    url: '/cusbud',
                    templateUrl: 'angular/reports/customer_budget/customer.budget.html'
                })
                .state('reports.fmrhis', {
                    url: '/fmrhis',
                    templateUrl: 'angular/reports/farmer_history/farmer.history.html'
                })
                .state('reports.lnman', {
                    url: '/lnman',
                    templateUrl: 'angular/reports/loan_management/loan.management.html'
                })
                .state('reports.usradt', {
                    url: '/usradt',
                    templateUrl: 'angular/reports/user_audit/user.audit.html'
                });
        });
})();
