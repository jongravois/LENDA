(function () {
    'use strict';

    angular.module('ARM')
        .directive('sglclick', SglClickDirective);

    SglClickDirective.$inject = ['$parse', '$timeout'];

    function SglClickDirective($parse, $timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var fn = $parse(attr['sglclick']);
                var delay = 300,
                    clicks = 0,
                    timer = null;
                element.on('click', function (event) {
                    clicks++; //count clicks
                    if (clicks === 1) {
                        timer = $timeout(function () {
                            fn(scope, {
                                $event: event
                            });
                            clicks = 0;
                        }, delay);
                    } else {
                        $timeout.cancel(timer); //prevent single-click action
                        clicks = 0; //after action performed, reset counter
                    }
                });
            }
        };
    }

})();
