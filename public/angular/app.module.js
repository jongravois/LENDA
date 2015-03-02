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
        'ui.utils',
        'angular-loading-bar',
        'toastr',
        'ngGrid',
        'angularModalService'
    ])
        .run(function ($rootScope) {
            $rootScope.$on('$routeChangeSuccess', function () {
                window.scrollTo(0, 0);
            });
        })
        .config(function (toastrConfig) {
            angular.extend(toastrConfig, {
                closeButton: true
            });
        });

})();
