(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'angular/grid-loans/home.html',
                    controller: 'HomeController',
                    resolve: {
                        armed: function ($q, $timeout) {
                            var defer = $q.defer();
                            $timeout(function () {
                                defer.resolve();
                            }, 1000);
                            return defer.promise;
                        }
                    }
                })
                .state('management', {
                    url: '/management',
                    templateUrl: 'angular/grid-management/management.html',
                    controller: 'ManagementController'
                })
                .state('prefs', {
                    url: '/prefs',
                    templateUrl: 'angular/users/settings.html',
                    controller: 'SettingsController'
                });

            $urlRouterProvider.otherwise('/');
        });
})();
