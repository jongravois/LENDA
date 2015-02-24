(function(){
  'use strict';
  angular
    .module('ARM')
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('new', {
          abstract: true,
          url: '/new/{loantypeID:\\d+}/{loanID:\\d+}',
          templateUrl: 'angular/views/newApp.html',
          controller: 'NewLoanController',
          resolve: {
            InitialData: function($stateParams, LoansFactory){
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
          controller: 'FinancialsController'
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
        .state('new.optimizer',{
          url: '/optimizer',
          templateUrl: 'angular/views/loans/optimizer.html',
          controller: 'OptimizerController'
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
    });
})();