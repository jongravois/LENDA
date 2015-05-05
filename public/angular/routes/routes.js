(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/loans/home');

            $stateProvider
                .state('loans', {
                    abstract: true,
                    url: '/loans',
                    template: '<ui-view/>',
                    controller: 'MainLoansController',
                    resolve: {}
                })
                .state('loans.home', {
                    url: '/home',
                    templateUrl: 'angular/home/home.html',
                    controller: 'HomeController'
                })
                .state('loans.management', {
                    url: '/management',
                    templateUrl: 'angular/management/management.html',
                    controller: 'ManagementController'
                })
                .state('prefs', {
                    url: '/prefs',
                    templateUrl: 'angular/users/settings.html',
                    controller: 'SettingsController'
                });
        });
})();
