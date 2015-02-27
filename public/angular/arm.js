(function(){
    'use strict';
    angular.module('ARM', [
      // Angular modules
      'ngSanitize',
      'ngAnimate',
      'ngResource',
      'ngMessages',

      // 3rd Party Modules
      'ui.router',
      'ui.bootstrap',
      'ui.utils',
      'angularMoment',
      'angular-loading-bar',
      'toastr',
      'ngGrid'
    ])
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