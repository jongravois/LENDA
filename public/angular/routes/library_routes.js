(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('library', {
                    url: '/library',
                    templateUrl: 'angular/library/views/home.html',
                    controller: 'LibraryController'
                })
                .state('library.calendar', {
                    url: '/calendar',
                    templateUrl: 'angular/library/views/calendar.html',
                    controller: 'CalendarController'
                })
                .state('library.legend', {
                    url: '/legend',
                    templateUrl: 'angular/library/views/legend.html',
                    controller: 'LegendController'
                })
                .state('library.legaldocs', {
                    url: '/legaldocs',
                    templateUrl: 'angular/library/views/legaldocs.html',
                    controller: 'LegalDocsController'
                })
                .state('library.loanproducts', {
                    url: '/loanproducts',
                    templateUrl: 'angular/library/views/loanprods.html',
                    controller: 'LoanProductsController'
                })
                .state('library.matrix', {
                    url: '/matrix',
                    templateUrl: 'angular/library/views/matrix.html',
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
                    templateUrl: 'angular/library/views/pdfapps.html',
                })
                .state('library.pdfapps.new', {
                    url: '/new',
                    templateUrl: 'angular/library/views/pdfapp_new.html'
                })
                .state('library.pdfapps.edit', {
                    url: '/edit/:pdfAppId',
                    templateUrl: 'angular/library/views/pdfapp.html'
                })
                .state('library.polsprocs', {
                    url: '/polsprocs',
                    templateUrl: 'angular/library/views/polsprocs.html',
                    controller: 'PolsProcsController'
                })
                .state('library.resources', {
                    url: '/resources',
                    templateUrl: 'angular/library/views/resources.html',
                    controller: 'ResourcesController'
                });
        });
})();
