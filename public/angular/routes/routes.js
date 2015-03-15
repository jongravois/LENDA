(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('loans', {
                    abstract: true,
                    url: '/loans',
                    template: '<ui-view/>',
                    controller: 'MainLoansController'
                })
                .state('loans.home', {
                    url: '/home',
                    templateUrl: 'angular/home/home.html',
                    controller: 'HomeController',
                    /*resolve: {
                        armed: function ($q, $timeout) {
                            var defer = $q.defer();
                            $timeout(function () {
                                defer.resolve();
                            }, 1000);
                            return defer.promise;
                        }
                    }*/
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

            $urlRouterProvider.otherwise('/loans/home');
        });
})();
