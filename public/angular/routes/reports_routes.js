(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('reports', {
                    url: '/rpts',
                    templateUrl: 'angular/views/reports/home.html',
                    controller: 'ReportsController'
                })
                .state('reports.accrecon', {
                    url: '/accrecon',
                    templateUrl: 'angular/views/reports/account_reconcilliation.html'
                })
                .state('reports.actdet', {
                    url: '/actdet',
                    templateUrl: 'angular/views/reports/activity_detail.html'
                })
                .state('reports.actsum', {
                    url: '/actsum',
                    templateUrl: 'angular/views/reports/activity_summary.html'
                })
                .state('reports.avcred', {
                    url: '/avcred',
                    templateUrl: 'angular/views/reports/available_credit.html'
                })
                .state('reports.cfarm', {
                    url: '/cfarm',
                    templateUrl: 'angular/views/reports/cfarm.html'
                })
                .state('reports.comapp', {
                    url: '/comapp',
                    templateUrl: 'angular/views/reports/committee_approval.html'
                })
                .state('reports.comcom', {
                    url: '/comcom',
                    templateUrl: 'angular/views/reports/committee_comment.html'
                })
                .state('reports.crpmix', {
                    url: '/crpmix',
                    templateUrl: 'angular/views/reports/crop_mix.html'
                })
                .state('reports.cusbud', {
                    url: '/cusbud',
                    templateUrl: 'angular/views/reports/customer_budget.html'
                })
                .state('reports.fmrhis', {
                    url: '/fmrhis',
                    templateUrl: 'angular/views/reports/farmer_history.html'
                })
                .state('reports.lnman', {
                    url: '/lnman',
                    templateUrl: 'angular/views/reports/loan_management.html'
                })
                .state('reports.repcus', {
                    url: '/repcus',
                    templateUrl: 'angular/views/reports/repeat_customer.html'
                })
                .state('reports.usradt', {
                    url: '/usradt',
                    templateUrl: 'angular/views/reports/user_audit.html'
                });
        });
})();
