(function () {
    'use strict';

    angular
        .module('ARM')
        .directive('clipUpload', ClipUploadDirective);

    ClipUploadDirective.$inject = ['$compile', '$timeout'];

    function ClipUploadDirective($compile, $timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: linker,
            template: '<span class="glyphicon glyphicon-paperclip"></span>',
            scope: {
                ngModel: '='
            }
        };

        function linker(scope, element, attrs, ctrl) {
            scope.loan = {
                id: progressMarkers[scope.cat]['id'],
                glyphicon: progressMarkers[scope.cat]['glyph'],
                tooltip: progressMarkers[scope.cat]['tip']
            };

            var styleChange = function () {
                scope.loan.style = statusColors[scope.ngModel]['color'];
            };

            styleChange();

            var setter = ctrl.$setViewValue;

            ctrl.$setViewValue = function () {
                setter.apply(this, arguments);
                $timeout(styleChange);
            };

            scope.progClicked = function () {

                if (parseInt(scope.ngModel) === 0) {
                    ctrl.$setViewValue(1);
                } else if (parseInt(scope.ngModel) === 1) {
                    ctrl.$setViewValue(2);
                } else if (parseInt(scope.ngModel) === 2) {
                    ctrl.$setViewValue(1);
                }
            };

            scope.progDblClicked = function () {
                alert('Icon ' + scope.ngModel + ' was double clicked.');
            };
        }
    }

})();
