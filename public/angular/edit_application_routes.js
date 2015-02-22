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
          controller: 'SummaryController'
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
    });
})();