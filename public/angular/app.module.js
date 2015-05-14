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
                if (!values.length) {
                    return obj;
                }
                var byFirst = _.groupBy(obj, values[0], context),
                    rest = values.slice(1);
                for(var prop in byFirst) {
                    byFirst[prop] = _.groupByMulti(byFirst[prop], rest, context);
                }
                return byFirst;
            }

            function sumCollection(arr, val) {
                return _.reduce(arr, function(sum, item){
                    return sum += Number(item[val]);
                }, 0);
            }

            function pluckuniq(col, val) {
                return _.first(_.uniq(_.pluck(col, val)));
            }

            /*
            * col (collection) | val (to be adjusted) | factor (percent field)
            */
            function weighted(col, val, factor){
                var total_factor = _.sumCollection(col, factor);

                return _.reduce(col, function(sum, current) {
                    return sum += (current[val]) * (current[factor] / total_factor);
                }, 0);
            }
            _.mixin({
                groupByMulti: groupByMulti,
                sumCollection: sumCollection,
                pluckuniq: pluckuniq,
                weighted: weighted
            });
        })
        .run(function($window){
            $window.onbeforeunload = function($window){
                return 'You have requested a browser refresh. Any unsaved or unconfirmed changes will be lost.';
            };
        })
        .run(function ($rootScope, $location, $anchorScroll) {
            $rootScope.$on('$stateChangeSuccess', function() {
                //console.log('state change indicated');
                //window.scrollTo(0, 0);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            });
        });
})();
