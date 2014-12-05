(function(){
    'use strict';
    angular.module('ARM', ['ui.router', 'ui.bootstrap', 'ui.utils', 'ngSanitize', 'ngAnimate', 'ngResource', 'angularMoment', 'angular-loading-bar', 'angular.filter', 'toastr', 'ngGrid'])
      .constant('_', window._)
      .constant('API_URL', 'http://www.lenda.local:6500/api')
      .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
          closeButton: true
        });
      })
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'angular/views/home.html',
            controller: 'HomeController'
          })

          .state('login',{
            url: '/login',
            templateUrl: 'angular/views/login.html',
            controller: 'SessionsController'
          })

          .state('logout',{
            url: '/logout',
            templateUrl: 'angular/views/logout.html',
            controller: 'SessionsController'
          })

          .state('management', {
            url: '/management',
            templateUrl: 'angular/views/management.html',
            controller: 'ManagementController'
          })

          .state('prefs', {
            url: '/prefs',
            templateUrl: 'angular/views/prefs.html',
            controller: 'PrefsController'
          })

          .state('resources', {
            url: '/resources',
            templateUrl: 'angular/views/resources.html',
            controller: 'ResourcesController'
          })

          .state('loan_products', {
            url: '/loan_products',
            templateUrl: 'angular/views/loanprods.html',
            controller: 'LoanProductsController'
          })

          .state('legal_docs', {
            url: '/legal_docs',
            templateUrl: 'angular/views/legal_docs.html',
            controller: 'LegalDocsController'
          })

          .state('pols_procs', {
            url: '/pols_procs',
            templateUrl: 'angular/views/pols_procs.html',
            controller: 'PolsProcsController'
          })

          .state('pdf_apps', {
            url: '/pdf_apps',
            templateUrl: 'angular/views/pdf_apps.html',
            controller: 'PdfAppsController'
          })

          .state('legend', {
            url: '/legend',
            templateUrl: 'angular/views/legend.html',
            controller: 'LegendController'
          })

          .state('reports', {
            url: '/rpts',
            templateUrl: 'angular/views/reports/home.html',
            controller: 'ReportsController'
          })

          .state('reports.actdet', {
            url: '/actdet',
            templateUrl: 'angular/views/reports/activity_detail.html'
          })

          .state('reports.cusbud', {
            url: '/cusbud',
            templateUrl: 'angular/views/reports/customer_budget.html'
          })

          .state('reports.accrecon', {
            url: '/accrecon',
            templateUrl: 'angular/views/reports/account_reconcilliation.html'
          })

          .state('reports.lnman', {
            url: '/lnman',
            templateUrl: 'angular/views/reports/loan_management.html'
          })

          .state('reports.actsum', {
            url: '/actsum',
            templateUrl: 'angular/views/reports/activity_summary.html'
          })

          .state('reports.avcred', {
            url: '/avcred',
            templateUrl: 'angular/views/reports/available_credit.html'
          })

          .state('reports.cfarm', {
            url: '/cfarm',
            templateUrl: 'angular/views/reports/cfarm.html'
          })

          .state('reports.fmrhis', {
            url: '/fmrhis',
            templateUrl: 'angular/views/reports/farmer_history.html'
          })

          .state('reports.crpmix', {
            url: '/crpmix',
            templateUrl: 'angular/views/reports/crop_mix.html'
          })

          .state('reports.comapp', {
            url: '/comapp',
            templateUrl: 'angular/views/reports/committee_approval.html'
          })

          .state('reports.comcom', {
            url: '/comcom',
            templateUrl: 'angular/views/reports/committee_comment.html'
          })

          .state('reports.repcus', {
            url: '/repcus',
            templateUrl: 'angular/views/reports/repeat_customer.html'
          })

          .state('reports.usradt', {
            url: '/usradt',
            templateUrl: 'angular/views/reports/user_audit.html'
          })

          .state('admin', {
            abstract: true,
            url: '/admin',
            templateUrl: 'angular/views/admin/home.html',
            controller: 'AdminController'
          })

          .state('admin.users', {
            url: '/users',
            templateUrl: 'angular/views/admin/users.html'
          })

          .state('admin.users.edit', {
            url: '/edit/:userId',
            templateUrl: 'angular/views/admin/user.html',
            controller: 'AdminUsersController'
          })

          .state('admin.distributors', {
            url: '/distributors',
            templateUrl: 'angular/views/admin/distributors.html'
          })

          .state('admin.distributors.edit', {
            url: '/edit/:distributorId',
            templateUrl: 'angular/views/admin/distributor.html',
            controller: 'AdminDistributorsController'
          })

          .state('admin.entitytypes', {
            url: '/entitytypes',
            templateUrl: 'angular/views/admin/entitytypes.html'
          })

          .state('admin.entitytypes.edit', {
            url: '/edit/:entitytypeId',
            templateUrl: 'angular/views/admin/entitytype.html',
            controller: 'AdminEntitytypesController'
          })

          .state('admin.instypes', {
            url: '/instypes',
            templateUrl: 'angular/views/admin/instypes.html'
          })

          .state('admin.instypes.edit', {
            url: '/edit/:instypeId',
            templateUrl: 'angular/views/admin/instype.html',
            controller: 'AdminInstypesController'
          })

          .state('admin.loantypes', {
            url: '/loantypes',
            templateUrl: 'angular/views/admin/loantypes.html'
          })

          .state('admin.loantypes.edit', {
            url: '/edit/:loantypeId',
            templateUrl: 'angular/views/admin/loantype.html',
            controller: 'AdminLoantypesController'
          })

          .state('admin.locations', {
            url: '/locations',
            templateUrl: 'angular/views/admin/locations.html'
          })

          .state('admin.locations.edit', {
            url: '/edit/:locationId',
            templateUrl: 'angular/views/admin/location.html',
            controller: 'AdminLocationsController'
          })

          .state('admin.regions', {
            url: '/regions',
            templateUrl: 'angular/views/admin/regions.html'
          })

          .state('admin.regions.edit', {
            url: '/edit/:regionId',
            templateUrl: 'angular/views/admin/region.html',
            controller: 'AdminRegionsController'
          })

          .state('admin.reports', {
            url: '/reports',
            templateUrl: 'angular/views/admin/reports.html'
          })

          .state('admin.reports.edit', {
            url: '/edit/:reportId',
            templateUrl: 'angular/views/admin/report.html',
            controller: 'AdminReportsController'
          })

          .state('admin.roles', {
            url: '/roles',
            templateUrl: 'angular/views/admin/roles.html'
          })

          .state('admin.roles.edit', {
            url: '/edit/:roleId',
            templateUrl: 'angular/views/admin/role.html',
            controller: 'AdminRolesController'
          })

          .state('admin.units', {
            url: '/units',
            templateUrl: 'angular/views/admin/units.html'
          })

          .state('admin.units.edit', {
            url: '/edit/:unitId',
            templateUrl: 'angular/views/admin/unit.html',
            controller: 'AdminUnitsController'
          })

          .state('new', {
            abstract: true,
            url: '/new',
            templateUrl: 'angular/views/newApp.html',
            controller: 'NewAppController'
          })

          .state('new.farmer', {
            url: '/farmer',
            templateUrl: 'angular/views/farmer.html'
          })

          //EDITS HERE
          .state('edit',{
            url: '/edit/:id',
            templateUrl: 'angular/views/editapp.html',
            controller: 'EditAppController'
          })

          .state('edit.summary', {
            url: '/summary',
            templateUrl: 'angular/views/summary.html'
          })



        $urlRouterProvider.otherwise('/');
      });
})();