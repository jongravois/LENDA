(function () {
    'use strict';
    angular.module('ARM', [
        // Angular modules
        'ngSanitize',
        'ngResource',
        'ngMessages',

        // 3rd Party Modules
        'ui.router',
        'ui.bootstrap',
        'ui.calendar',
        'ui.utils',
        'angular-loading-bar',
        'toastr',
        'ngGrid'
    ])
        .run(function ($rootScope, $anchorScroll) {
            $rootScope.$on('$routeChangeSuccess', function () {
                $anchorScroll();
            });
        })
        .config(function (toastrConfig) {
            angular.extend(toastrConfig, {
                closeButton: true
            });
        });

})();
