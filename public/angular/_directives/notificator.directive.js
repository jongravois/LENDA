(function () {
    'use strict';

    angular.module('ARM')
        .directive('notificator', NotificatorDirective);

    function NotificatorDirective() {
        return {
            restrict: 'AE',
            scope: {
                counts: '='
            },
            templateUrl: 'angular/loans/partials/notificator.html',
            link: function(scope, element, attrs) {
            }
        };
    }

})();
