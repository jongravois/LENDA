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
        'plupload.directive'
    ])
        .run(function ($rootScope, $anchorScroll) {
            $rootScope.$on('$routeChangeSuccess', function () {
                $anchorScroll();
            });
        })
        .config(['plUploadServiceProvider', function(plUploadServiceProvider) {

            plUploadServiceProvider.setConfig('flashPath', 'lib/plupload-angular-directive/plupload.flash.swf');
            plUploadServiceProvider.setConfig('silverLightPath', 'lib/plupload-angular-directive/plupload.silverlight.xap');
            plUploadServiceProvider.setConfig('uploadPath', 'upload.php');

        }]);

})();
