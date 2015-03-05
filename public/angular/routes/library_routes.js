(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('library', {
                    url: '/library',
                    templateUrl: 'angular/library/home.html',
                    controller: 'LibraryController'
                })
                .state('library.calendar', {
                    url: '/calendar',
                    templateUrl: 'angular/library/calendar/calendar.html',
                    controller: 'CalendarController'
                })
                .state('library.legend', {
                    url: '/legend',
                    templateUrl: 'angular/library/legend/legend.html',
                    controller: 'LegendController'
                })
                .state('library.legaldocs', {
                    url: '/legaldocs',
                    templateUrl: 'angular/library/legal-docs/legaldocs.html',
                    controller: 'LegalDocsController'
                })
                .state('library.loanproducts', {
                    url: '/loanproducts',
                    templateUrl: 'angular/library/loan-products/loanprods.html',
                    controller: 'LoanProductsController'
                })
                .state('library.matrix', {
                    url: '/matrix',
                    templateUrl: 'angular/library/matrix/matrix.html',
                    controller: 'MatrixController'
                })
                .state('library.pdfapps', {
                    url: '/pdfapps',
                    templateUrl: 'angular/library/pdf-apps/pdfapps.html',
                    controller: 'PdfAppsController'
                })
                .state('library.polsprocs', {
                    url: '/polsprocs',
                    templateUrl: 'angular/library/policies-and-procedures/polsprocs.html',
                    controller: 'PolsProcsController'
                })
                .state('library.resources', {
                    url: '/resources',
                    templateUrl: 'angular/library/resources/resources.html',
                    controller: 'ResourcesController'
                });
        });
})();
