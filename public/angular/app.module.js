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
        .config(function(){
            function groupByMulti(obj, values, context) {
                if (!values.length)
                    return obj;
                var byFirst = _.groupBy(obj, values[0], context),
                    rest = values.slice(1);
                for (var prop in byFirst) {
                    byFirst[prop] = _.groupByMulti(byFirst[prop], rest, context);
                }
                return byFirst;
            }

            function mysum(arr, val) {
                return _.reduce(arr, function(sum, item){
                    return sum += item[val];
                }, 0);
            }

            function pluckuniq(col, val) {
                return _.first(_.uniq(_.pluck(col, val)));
            }

            /*
            * col (collection) | val (to be adjusted) | factor (percent field)
            */
            function weighted(col, val, factor){
                var total_factor = _.mysum(col, factor);

                return _.reduce(col, function(sum, current) {
                    return sum += (current[val]) * (current[factor] / total_factor);
                }, 0);
            }
            _.mixin({
                groupByMulti: groupByMulti,
                mysum: mysum,
                pluckuniq: pluckuniq,
                weighted: weighted
            });
        })
        .run(function ($rootScope, $location, $anchorScroll) {
            $rootScope.$on('$routeChangeSuccess', function (event, currentRoute, previousRoute) {
                $location.hash('top');
                window.scrollTo(0, (top - 100));
                $anchorScroll();
            });
        });
})();
