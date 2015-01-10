(function(){
    'use strict';
    angular.module('ARM', ['ui.router', 'ui.bootstrap', 'ui.utils', 'ngSanitize', 'ngAnimate', 'ngResource', 'angularMoment', 'angular-loading-bar', 'toastr', 'ngGrid'])
      /*.run(function($rootScope) {
        function message(to, toP, from, fromP) { return from.name  + angular.toJson(fromP) + " -> " + to.name + angular.toJson(toP); }
        $rootScope.$on("$stateChangeStart", function(evt, to, toP, from, fromP) { console.log("Start:   " + message(to, toP, from, fromP)); });
        $rootScope.$on("$stateChangeSuccess", function(evt, to, toP, from, fromP) { console.log("Success: " + message(to, toP, from, fromP)); });
        $rootScope.$on("$stateChangeError", function(evt, to, toP, from, fromP, err) { console.log("Error:   " + message(to, toP, from, fromP), err); });
      })*/
      .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
          closeButton: true
        });
      });

})();