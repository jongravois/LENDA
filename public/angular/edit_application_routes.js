(function(){
  'use strict';
  angular
    .module('ARM')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('edit',{
          abstract: true,
          url: '/edit/{loanID:\\d+}',
          templateUrl: 'angular/views/editapp.html',
          controller: 'EditAppController',
          resolve: {
            InitialData: function(LoansFactory, $stateParams){
              return LoansFactory.getLoan($stateParams.loanID);
            }
          }
        })
        .state('edit.applicant', {
          url: '/applicant',
          templateUrl: 'angular/views/loans/editapplicant.html',
          controller: 'ApplicantsController',
          data: { newapplication: false }
        })
        .state('edit.audit', {
          url: '/audit',
          templateUrl: 'angular/views/loans/audit.html',
          controller: 'AuditsController',
          data: { newapplication: false }
        })
        .state('edit.budgets', {
          url: '/budgets',
          templateUrl: 'angular/views/loans/budgets.html',
          controller: 'BudgetsController',
          data: { newapplication: false }
        })
        .state('edit.closing', {
          url: '/closing',
          templateUrl: 'angular/views/loans/closing.html',
          controller: 'ClosingController',
          data: { newapplication: false }
        })
        .state('edit.comments', {
          url: '/comments',
          templateUrl: 'angular/views/loans/comments.html',
          controller: 'CommentsController',
          data: { newapplication: false }
        })
        .state('edit.committee', {
          url: '/committee',
          templateUrl: 'angular/views/loans/committee.html',
          controller: 'CommitteeController',
          data: { newapplication: false }
        })
        .state('edit.crops', {
          url: '/crops',
          templateUrl: 'angular/views/loans/editcrops.html',
          controller: 'CropsController',
          data: { newapplication: false }
        })
        .state('edit.disbursement', {
          url: '/disbursement',
          templateUrl: 'angular/views/loans/disbursement.html',
          controller: 'DisbursementController',
          data: { newapplication: false }
        })
        .state('edit.distributor', {
          url: '/distributor',
          templateUrl: 'angular/views/loans/editdistributor.html',
          controller: 'DistributorController',
          data: { newapplication: false }
        })
        .state('edit.farmdetails', {
          url: '/farmdetails',
          templateUrl: 'angular/views/loans/farmdetails.html',
          controller: 'EditFarmDetailsController',
          data: { newapplication: false }
        })
        .state('edit.farmer', {
          url: '/farmer',
          templateUrl: 'angular/views/loans/editfarmer.html',
          controller: 'FarmerController',
          data: { newapplication: false }
        })
        .state('edit.farms', {
          url: '/farms',
          templateUrl: 'angular/views/loans/editfarms.html',
          controller: 'FarmsController',
          data: { newapplication: false }
        })
        .state('edit.financials', {
          url: '/financials',
          templateUrl: 'angular/views/loans/editfinancials.html',
          controller: 'FinancialsController',
          data: { newapplication: false }
        })
        .state('edit.insurance', {
          url: '/insurance',
          templateUrl: 'angular/views/loans/editinsurance.html',
          controller: 'InsuranceController',
          data: { newapplication: false }
        })
        .state('edit.optimizer', {
          url: '/optimizer',
          templateUrl: 'angular/views/loans/optimizer.html',
          controller: 'OptimizerController',
          data: { newapplication: false }
        })
        .state('edit.plannedcrops', {
          url: '/plannedcrops',
          templateUrl: 'angular/views/loans/editplannedcrops.html',
          controller: 'PlannedCropsController',
          data: { newapplication: false }
        })
        .state('edit.prerequisites', {
          url: '/prerequisites',
          templateUrl: 'angular/views/loans/prerequisites.html',
          controller: 'PrerequisitesController',
          data: { newapplication: false }
        })
        .state('edit.quests', {
          url: '/quests',
          templateUrl: 'angular/views/loans/quests.html',
          controller: 'QuestsController',
          data: { newapplication: false }
        })
        .state('edit.references', {
          url: '/references',
          templateUrl: 'angular/views/loans/editreferences.html',
          controller: 'ReferencesController',
          data: { newapplication: false }
        })
        .state('edit.storage', {
          url: '/storage',
          templateUrl: 'angular/views/loans/editstorage.html',
          controller: 'GrainController',
          data: { newapplication: false }
        })
        .state('edit.summary', {
          url: '/summary',
          templateUrl: 'angular/views/loans/summary.html',
          controller: 'SummaryController',
          data: { newapplication: false }
        })
        .state('edit.terms', {
          url: '/terms',
          templateUrl: 'angular/views/loans/terms.html',
          controller: 'TermsController',
          data: { newapplication: false }
        })
        .state('edit.underwriting', {
          url: '/underwriting',
          templateUrl: 'angular/views/loans/underwriting.html',
          controller: 'UnderwritingController',
          data: { newapplication: false }
        })
        .state('edit.yield', {
          url: '/yield',
          templateUrl: 'angular/views/loans/edityield.html',
          controller: 'YieldController',
          data: { newapplication: false }
        })
    });
})();