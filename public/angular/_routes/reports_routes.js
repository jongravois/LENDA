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
                    templateUrl: 'angular/reports/views/account_reconciliation.html'
                })
                .state('reports.actdet', {
                    url: '/actdet',
                    templateUrl: 'angular/reports/activity_detail/activity_detail.html'
                })
                .state('reports.actsum', {
                    url: '/actsum',
                    templateUrl: 'angular/reports/views/activity_summary.html'
                })
                .state('reports.avcred', {
                    url: '/avcred',
                    templateUrl: 'angular/reports/views/available_credit.html'
                })
                .state('reports.cfarm', {
                    url: '/cfarm',
                    templateUrl: 'angular/reports/views/cfarm.html'
                })
                .state('reports.comapp', {
                    url: '/comapp',
                    templateUrl: 'angular/reports/views/committee_approval.html'
                })
                .state('reports.comcom', {
                    url: '/comcom',
                    templateUrl: 'angular/reports/views/committee_comment.html'
                })
                .state('reports.crpmix', {
                    url: '/crpmix',
                    templateUrl: 'angular/reports/views/crop_mix.html'
                })
                .state('reports.cusbud', {
                    url: '/cusbud',
                    templateUrl: 'angular/reports/views/customer_budget.html'
                })
                .state('reports.fmrhis', {
                    url: '/fmrhis',
                    templateUrl: 'angular/reports/views/farmer_history.html'
                })
                .state('reports.lnman', {
                    url: '/lnman',
                    templateUrl: 'angular/reports/views/loan_management.html'
                })
                .state('reports.repcus', {
                    url: '/repcus',
                    templateUrl: 'angular/reports/views/repeat_customer.html'
                })
                .state('reports.usradt', {
                    url: '/usradt',
                    templateUrl: 'angular/reports/views/user_audit.html'
                });
        });
})();
