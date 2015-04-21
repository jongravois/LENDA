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
        .run(function ($rootScope, $anchorScroll) {
            $rootScope.$on('$routeChangeSuccess', function () {
                $anchorScroll();
            });
        });

})();
