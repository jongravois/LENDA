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
        'ngGrid',
        'angularFileUpload'
    ])
        .config(function(toastrConfig) {
            angular.extend(toastrConfig, {
                closeButton: true,
                timeOut: 3000
            });
        })
        .run(function ($rootScope, $anchorScroll) {
            $rootScope.$on('$routeChangeSuccess', function () {
                $anchorScroll();
            });
        });

})();
