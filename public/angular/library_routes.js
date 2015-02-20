(function(){
    'use strict';
  angular
    .module('ARM')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('library', {
          url: '/library',
          templateUrl: 'angular/views/library/home.html',
          controller: 'LibraryController'
        })
        .state('library.calendar', {
          url: '/calendar',
          templateUrl: 'angular/views/library/calendar.html',
          controller: 'CalendarController'
        })
        .state('library.legend', {
          url: '/legend',
          templateUrl: 'angular/views/library/legend.html',
          controller: 'LegendController'
        })
        .state('library.legaldocs', {
          url: '/legaldocs',
          templateUrl: 'angular/views/library/legaldocs.html',
          controller: 'LegalDocsController'
        })
        .state('library.loanproducts', {
          url: '/loanproducts',
          templateUrl: 'angular/views/library/loanprods.html',
          controller: 'LoanProductsController'
        })
        .state('library.matrix', {
          url: '/matrix',
          templateUrl: 'angular/views/library/matrix.html',
          controller: 'MatrixController'
        })
        .state('library.pdfapps', {
          abstract: true,
          url: '/pdfapps',
          template: '<ui-view>',
          controller: 'PdfAppsController'
        })
        .state('library.pdfapps.list', {
          url: '/list',
          templateUrl: 'angular/views/library/pdfapps.html',
        })
        .state('library.pdfapps.new', {
          url: '/new',
          templateUrl: 'angular/views/library/pdfapp_new.html'
        })
        .state('library.pdfapps.edit', {
          url: '/edit/:pdfAppId',
          templateUrl: 'angular/views/library/pdfapp.html'
        })
        .state('library.polsprocs', {
          url: '/polsprocs',
          templateUrl: 'angular/views/library/polsprocs.html',
          controller: 'PolsProcsController'
        })
        .state('library.resources', {
          url: '/resources',
          templateUrl: 'angular/views/library/resources.html',
          controller: 'ResourcesController'
        })
    });
})();