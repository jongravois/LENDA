(function(){
    'use strict';
    angular
      .module('ARM')
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'angular/views/home.html',
            controller: 'HomeController',
            resolve: {
              armed: function($q, $timeout){
                var defer = $q.defer();
                $timeout(function(){
                  defer.resolve();
                }, 1000);
                return defer.promise;
              }
            }
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

          // LIBRARY
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

          // REPORTS
          .state('reports', {
            url: '/rpts',
            templateUrl: 'angular/views/reports/home.html',
            controller: 'ReportsController'
          })
          .state('reports.accrecon', {
            url: '/accrecon',
            templateUrl: 'angular/views/reports/account_reconcilliation.html'
          })
          .state('reports.actdet', {
            url: '/actdet',
            templateUrl: 'angular/views/reports/activity_detail.html'
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
          .state('reports.comapp', {
            url: '/comapp',
            templateUrl: 'angular/views/reports/committee_approval.html'
          })
          .state('reports.comcom', {
            url: '/comcom',
            templateUrl: 'angular/views/reports/committee_comment.html'
          })
          .state('reports.crpmix', {
            url: '/crpmix',
            templateUrl: 'angular/views/reports/crop_mix.html'
          })
          .state('reports.cusbud', {
            url: '/cusbud',
            templateUrl: 'angular/views/reports/customer_budget.html'
          })
          .state('reports.fmrhis', {
            url: '/fmrhis',
            templateUrl: 'angular/views/reports/farmer_history.html'
          })
          .state('reports.lnman', {
            url: '/lnman',
            templateUrl: 'angular/views/reports/loan_management.html'
          })
          .state('reports.repcus', {
            url: '/repcus',
            templateUrl: 'angular/views/reports/repeat_customer.html'
          })
          .state('reports.usradt', {
            url: '/usradt',
            templateUrl: 'angular/views/reports/user_audit.html'
          })

          // ADMIN
          .state('admin', {
            abstract: true,
            url: '/admin',
            templateUrl: 'angular/views/admin/home.html',
            controller: 'AdminController'
          })
          .state('admin.crops', {
            abstract: true,
            url: '/crops',
            template: '<ui-view>',
            controller: 'AdminCropsController'
          })
          .state('admin.crops.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/crops.html',
            controller: 'AdminCropsController'
          })
          .state('admin.crops.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/crop_new.html',
            controller: 'AdminCropsController'
          })
          .state('admin.crops.edit', {
            url: '/edit/:cropId',
            templateUrl: 'angular/views/admin/crops.html',
            controller: 'AdminCropsController'
          })
          .state('admin.distributors', {
            abstract: true,
            url: '/distributors',
            template: '<ui-view>',
            controller: 'AdminDistributorsController'
          })
          .state('admin.distributors.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/distributors.html',
            controller: 'AdminDistributorsController'
          })
          .state('admin.distributors.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/distributor_new.html',
            controller: 'AdminDistributorsController'
          })
          .state('admin.distributors.edit', {
            url: '/edit/:distributorId',
            templateUrl: 'angular/views/admin/distributor.html',
            controller: 'AdminDistributorsController'
          })
          .state('admin.entitytypes', {
            abstract: true,
            url: '/entitytypes',
            template: '<ui-view>',
            controller: 'AdminEntitytypesController'
          })
          .state('admin.entitytypes.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/entitytypes.html',
            controller: 'AdminEntitytypesController'
          })
          .state('admin.entitytypes.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/entitytype_new.html',
            controller: 'AdminEntitytypesController'
          })
          .state('admin.entitytypes.edit', {
            url: '/edit/:entitytypeId',
            templateUrl: 'angular/views/admin/entitytype.html',
            controller: 'AdminEntitytypesController'
          })
          .state('admin.instypes', {
            abstract: true,
            url: '/v',
            template: '<ui-view>',
            controller: 'AdminInstypesController'
          })
          .state('admin.instypes.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/instypes.html',
            controller: 'AdminInstypesController'
          })
          .state('admin.instypes.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/instype_new.html',
            controller: 'AdminInstypesController'
          })
          .state('admin.instypes.edit', {
            url: '/edit/:instypeId',
            templateUrl: 'angular/views/admin/instype.html',
            controller: 'AdminInstypesController'
          })
          .state('admin.loantypes', {
            abstract: true,
            url: '/loantypes',
            template: '<ui-view>',
            controller: 'AdminLoantypesController'
          })
          .state('admin.loantypes.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/loantypes.html',
            controller: 'AdminLoantypesController'
          })
          .state('admin.v.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/loantype_new.html',
            controller: 'AdminLoantypesController'
          })
          .state('admin.loantypes.edit', {
            url: '/edit/:loantypeId',
            templateUrl: 'angular/views/admin/loantype.html',
            controller: 'AdminLoantypesController'
          })
          .state('admin.locations', {
            abstract: true,
            url: '/locations',
            template: '<ui-view>',
            controller: 'AdminLocationsController'
          })
          .state('admin.locations.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/locations.html',
            controller: 'AdminLocationsController'
          })
          .state('admin.v.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/locations_new.html',
            controller: 'AdminLocationsController'
          })
          .state('admin.locations.edit', {
            url: '/edit/:locationId',
            templateUrl: 'angular/views/admin/location.html',
            controller: 'AdminLocationsController'
          })
          .state('admin.regions', {
            abstract: true,
            url: '/regions',
            template: '<ui-view>',
            controller: 'AdminRegionsController'
          })
          .state('admin.regions.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/regions.html',
            controller: 'AdminRegionsController'
          })
          .state('admin.regions.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/region_new.html',
            controller: 'AdminRegionsController'
          })
          .state('admin.regions.edit', {
            url: '/edit/:regionId',
            templateUrl: 'angular/views/admin/region.html',
            controller: 'AdminRegionsController'
          })
          .state('admin.reports', {
            abstract: true,
            url: '/reports',
            template: '<ui-view>',
            controller: 'AdminReportsController'
          })
          .state('admin.reports.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/reports.html',
            controller: 'AdminReportsController'
          })
          .state('admin.reports.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/report_new.html',
            controller: 'AdminReportsController'
          })
          .state('admin.reports.edit', {
            url: '/edit/:reportId',
            templateUrl: 'angular/views/admin/report.html',
            controller: 'AdminReportsController'
          })
          .state('admin.roles', {
            abstract: true,
            url: '/roles',
            template: '<ui-view>',
            controller: 'AdminRolesController'
          })
          .state('admin.roles.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/roles.html',
            controller: 'AdminRolesController'
          })
          .state('admin.roles.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/role_new.html',
            controller: 'AdminRolesController'
          })
          .state('admin.roles.edit', {
            url: '/edit/:roleId',
            templateUrl: 'angular/views/admin/role.html',
            controller: 'AdminRolesController'
          })
          .state('admin.units', {
            abstract: true,
            url: '/units',
            template: '<ui-view>',
            controller: 'AdminUnitsController'
          })
          .state('admin.units.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/units.html',
            controller: 'AdminUnitsController'
          })
          .state('admin.units.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/unit_new.html',
            controller: 'AdminUnitsController'
          })
          .state('admin.units.edit', {
            url: '/edit/:unitId',
            templateUrl: 'angular/views/admin/unit.html',
            controller: 'AdminUnitsController'
          })
          .state('admin.users', {
            abstract: true,
            url: '/users',
            template: '<ui-view>',
            controller: 'AdminUsersController'
          })
          .state('admin.users.list', {
            url: '/list',
            templateUrl: 'angular/views/admin/users.html',
            controller: 'AdminUsersController'
          })
          .state('admin.users.new', {
            url: '/new',
            templateUrl: 'angular/views/admin/user_new.html',
            controller: 'AdminUsersController'
          })
          .state('admin.users.edit', {
            url: '/edit/:userId',
            templateUrl: 'angular/views/admin/user.html',
            controller: 'AdminUsersController'
          })

          // NEW APPLICATIONS
          .state('new', {
            abstract: true,
            url: '/new/{loantypeID:\\d+}/{loanID:\\d+}',
            templateUrl: 'angular/views/newApp.html',
            controller: 'NewLoanController',
            resolve: {
              Loan: function($stateParams, LoansFactory){
                return LoansFactory.getLoan($stateParams.loanID);
              }
            }
          })
          .state('new.affiliates', {
            url: '/affiliates',
            templateUrl: 'angular/views/loans/newaffiliates.html',
            controller: 'NewAffiliatesController'
          })
          .state('new.applicant', {
            url: '/applicant',
            templateUrl: 'angular/views/loans/newapplicant.html',
            controller: 'ApplicantController'
          })
          .state('new.budget', {
            url: '/budget',
            templateUrl: 'angular/views/loans/newbudget.html',
            controller: 'NewBudgetController'
          })
          .state('new.crops', {
            url: '/crops',
            templateUrl: 'angular/views/loans/newcrops.html',
            controller: 'CropsController'
          })
          .state('new.distributor', {
            url: '/distributor',
            templateUrl: 'angular/views/loans/newdistributor.html',
            controller: 'NewDistributorController'
          })
          .state('new.expenses', {
            url: '/expenses',
            templateUrl: 'angular/views/loans/expenses.html',
            controller: 'NewBudgetsController'
          })
          .state('new.farmer', {
            url: '/farmer',
            templateUrl: 'angular/views/loans/newfarmer.html',
            controller: 'FarmerController',
            resolve: {
              Loan: function($stateParams, LoansFactory){
                return LoansFactory.getLoan($stateParams.loanID);
              }
            }
          })
          .state('new.farms', {
            url: '/farms',
            templateUrl: 'angular/views/loans/newfarms.html',
            controller: 'FarmsController'
          })
          .state('new.financials', {
            url: '/financials',
            templateUrl: 'angular/views/loans/newfinancials.html',
            controller: 'NewFinancialsController'
          })
          .state('new.grainstorage', {
            url: '/grainstorage',
            templateUrl: 'angular/views/loans/newgrainstorage.html',
            controller: 'NewGrainController'
          })
          .state('new.insurance', {
            url: '/insurance',
            templateUrl: 'angular/views/loans/newinsurance.html',
            controller: 'NewInsuranceController'
          })
          .state('new.quests', {
            url: '/quests',
            templateUrl: 'angular/views/loans/quests.html',
            controller: 'QuestsController'
          })
          .state('new.prerequisites', {
            url: '/prerequisites',
            templateUrl: 'angular/views/loans/prerequisites.html',
            controller: 'NewPrerequisitesController'
          })
          .state('new.plannedcrops', {
            url: '/plannedcrops',
            templateUrl: 'angular/views/loans/newplannedcrops.html',
            controller: 'NewPlannedCropsController'
          })
          .state('new.purgatory', {
            url: '/purgatory',
            templateUrl: 'angular/views/loans/newpurgatory.html',
            controller: 'NewPurgatoryController'
          })
          .state('new.references', {
            url: '/references',
            templateUrl: 'angular/views/loans/newreferences.html',
            controller: 'NewReferencesController'
          })
          .state('new.terms', {
            url: '/terms',
            templateUrl: 'angular/views/loans/terms.html',
            controller: 'TermsController'
          })
          .state('new.yield', {
            url: '/yield',
            templateUrl: 'angular/views/loans/newyield.html',
            controller: 'YieldController'
          })

          //EDIT APPLICATIONS
          .state('edit',{
            abstract: true,
            url: '/edit/{loanID:\\d+}',
            templateUrl: 'angular/views/editapp.html',
            controller: 'EditAppController',
            resolve: {
              Loan: function(LoansFactory, $stateParams){
                return LoansFactory.getLoan($stateParams.loanID);
              }
            }
          })
          .state('edit.affiliates', {
            url: '/affiliates',
            templateUrl: 'angular/views/loans/editaffiliates.html',
            controller: 'AffiliatesController'
          })
          .state('edit.applicant', {
            url: '/applicant',
            templateUrl: 'angular/views/loans/editapplicant.html',
            controller: 'ApplicantsController'
          })
          .state('edit.audit', {
            url: '/audit',
            templateUrl: 'angular/views/loans/audit.html',
            controller: 'AuditsController'
          })
          .state('edit.budgets', {
            url: '/budgets',
            templateUrl: 'angular/views/loans/budgets.html',
            controller: 'BudgetsController'
          })
          .state('edit.closing', {
            url: '/closing',
            templateUrl: 'angular/views/loans/closing.html',
            controller: 'ClosingController'
          })
          .state('edit.comments', {
            url: '/comments',
            templateUrl: 'angular/views/loans/comments.html',
            controller: 'CommentsController'
          })
          .state('edit.committee', {
            url: '/committee',
            templateUrl: 'angular/views/loans/committee.html',
            controller: 'CommitteeController'
          })
          .state('edit.crops', {
            url: '/crops',
            templateUrl: 'angular/views/loans/editcrops.html',
            controller: 'CropsController'
          })
          .state('edit.disbursement', {
            url: '/disbursement',
            templateUrl: 'angular/views/loans/disbursement.html',
            controller: 'DisbursementController'
          })
          .state('edit.distributor', {
            url: '/distributor',
            templateUrl: 'angular/views/loans/editdistributor.html',
            controller: 'EditDistributorController'
          })
          .state('edit.farmdetails', {
            url: '/farmdetails',
            templateUrl: 'angular/views/loans/farmdetails.html',
            controller: 'EditFarmDetailsController'
          })
          .state('edit.farmer', {
            url: '/farmer',
            templateUrl: 'angular/views/loans/editfarmer.html',
            controller: 'FarmerController'
          })
          .state('edit.farms', {
            url: '/farms',
            templateUrl: 'angular/views/loans/editfarms.html',
            controller: 'FarmsController'
          })
          .state('edit.financials', {
            url: '/financials',
            templateUrl: 'angular/views/loans/editfinancials.html',
            controller: 'FinancialsController'
          })
          .state('edit.insurance', {
            url: '/insurance',
            templateUrl: 'angular/views/loans/editinsurance.html',
            controller: 'EditInsuranceController'
          })
          .state('edit.optimizer', {
            url: '/optimizer',
            templateUrl: 'angular/views/loans/optimizer.html',
            controller: 'EditOptimizerController'
          })
          .state('edit.plannedcrops', {
            url: '/plannedcrops',
            templateUrl: 'angular/views/loans/editplannedcrops.html',
            controller: 'EditPlannedCropsController'
          })
          .state('edit.prerequisites', {
            url: '/prerequisites',
            templateUrl: 'angular/views/loans/prerequisites.html',
            controller: 'EditPrerequisitesController'
          })
          .state('edit.quests', {
            url: '/quests',
            templateUrl: 'angular/views/loans/quests.html',
            controller: 'QuestsController'
          })
          .state('edit.references', {
            url: '/references',
            templateUrl: 'angular/views/loans/editreferences.html',
            controller: 'ReferencesController'
          })
          .state('edit.storage', {
            url: '/storage',
            templateUrl: 'angular/views/loans/editstorage.html',
            controller: 'EditStorageController'
          })
          .state('edit.summary', {
            url: '/summary',
            templateUrl: 'angular/views/loans/summary.html',
            controller: 'EditSummaryController'
          })
          .state('edit.terms', {
            url: '/terms',
            templateUrl: 'angular/views/loans/terms.html',
            controller: 'TermsController'
          })
          .state('edit.underwriting', {
            url: '/underwriting',
            templateUrl: 'angular/views/loans/underwriting.html',
            controller: 'UnderwritingController'
          })
          .state('edit.yield', {
            url: '/yield',
            templateUrl: 'angular/views/loans/edityield.html',
            controller: 'YieldController'
          })

        $urlRouterProvider.otherwise('/');
      });
})();