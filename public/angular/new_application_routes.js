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
        .state('new.applicant', {
          url: '/applicant',
          templateUrl: 'angular/views/loans/newapplicant.html',
          controller: 'ApplicantController'
        })
        .state('new.budget', {
          url: '/budget',
          templateUrl: 'angular/views/loans/newbudget.html',
          controller: 'BudgetsController'
        })
        .state('new.crops', {
          url: '/crops',
          templateUrl: 'angular/views/loans/newcrops.html',
          controller: 'CropsController'
        })
        .state('new.distributor', {
          url: '/distributor',
          templateUrl: 'angular/views/loans/newdistributor.html',
          controller: 'DistributorController'
        })
        .state('new.expenses', {
          url: '/expenses',
          templateUrl: 'angular/views/loans/expenses.html',
          controller: 'BudgetsController'
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
          controller: 'GrainController'
        })
        .state('new.insurance', {
          url: '/insurance',
          templateUrl: 'angular/views/loans/newinsurance.html',
          controller: 'InsuranceController'
        })
        .state('new.optimizer',{
          url: '/optimizer',
          templateUrl: 'angular/views/loans/optimizer.html',
          controller: 'OptimizerController'
        })
        .state('new.prerequisites', {
          url: '/prerequisites',
          templateUrl: 'angular/views/loans/prerequisites.html',
          controller: 'PrerequisitesController'
        })
        .state('new.plannedcrops', {
          url: '/plannedcrops',
          templateUrl: 'angular/views/loans/newplannedcrops.html',
          controller: 'PlannedCropsController'
        })
        .state('new.purgatory', {
          url: '/purgatory',
          templateUrl: 'angular/views/loans/newpurgatory.html',
          controller: 'PurgatoryController'
        })
        .state('new.quests', {
          url: '/quests',
          templateUrl: 'angular/views/loans/quests.html',
          controller: 'QuestsController'
        })
        .state('new.references', {
          url: '/references',
          templateUrl: 'angular/views/loans/newreferences.html',
          controller: 'ReferencesController'
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