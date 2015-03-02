(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'angular/views/home.html',
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
                    templateUrl: 'angular/views/management.html',
                    controller: 'ManagementController'
                })
                .state('prefs', {
                    url: '/prefs',
                    templateUrl: 'angular/views/prefs.html',
                    controller: 'PrefsController'
                });

            $urlRouterProvider.otherwise('/');
        });
})();
