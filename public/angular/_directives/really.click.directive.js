(function () {
    'use strict';

    angular.module('ARM')
        .directive('ngReallyClick', NgReallyClickDirective);

    function NgReallyClickDirective() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', function () {
                    var message = attrs.ngReallyMessage;
                    if (message && confirm(message)) {
                        scope.$apply(attrs.ngReallyClick);
                    }
                });
            }
        };
    }
})();
