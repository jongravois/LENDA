(function(){
    'use strict';
    angular.module('ARM', ['ui.router', 'ui.bootstrap', 'ui.utils', 'ngSanitize', 'ngAnimate', 'ngResource', 'angularMoment', 'angular-loading-bar', 'toastr', 'ngGrid', 'xeditable'])
      .run(function($rootScope) {
        $rootScope.$on("$routeChangeSuccess", function(){
          window.scrollTo(0,0);
        });
      })
      .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
          closeButton: true
        });
      });

})();