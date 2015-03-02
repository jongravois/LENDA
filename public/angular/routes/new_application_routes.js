(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('new', {
                    abstract: true,
                    url: '/new/{loantypeID:\\d+}/{loanID:\\d+}',
                    templateUrl: 'angular/views/newApp.html',
                    controller: 'NewLoanController',
                    resolve: {
                        InitialData: function ($stateParams, LoansFactory) {
                            return LoansFactory.getLoan($stateParams.loanID);
                        }
                    }
                })
                .state('new.applicant', {
                    url: '/applicant',
                    templateUrl: 'angular/applicants/newapplicant.html',
                    controller: 'ApplicantController',
                    data: {newapplication: true}
                })
                .state('new.budget', {
                    url: '/budget',
                    templateUrl: 'angular/views/loans/newbudget.html',
                    controller: 'BudgetsController',
                    data: {newapplication: true}
                })
                .state('new.crops', {
                    url: '/crops',
                    templateUrl: 'angular/views/loans/newcrops.html',
                    controller: 'CropsController',
                    data: {newapplication: true}
                })
                .state('new.distributor', {
                    url: '/distributor',
                    templateUrl: 'angular/views/loans/newdistributor.html',
                    controller: 'DistributorController',
                    data: {newapplication: true}
                })
                .state('new.expenses', {
                    url: '/expenses',
                    templateUrl: 'angular/views/loans/expenses.html',
                    controller: 'BudgetsController',
                    data: {newapplication: true}
                })
                .state('new.farmer', {
                    url: '/farmer',
                    templateUrl: 'angular/views/loans/newfarmer.html',
                    controller: 'FarmerController',
                    data: {newapplication: true},
                    resolve: {
                        Loan: function ($stateParams, LoansFactory) {
                            return LoansFactory.getLoan($stateParams.loanID);
                        }
                    }
                })
                .state('new.farms', {
                    url: '/farms',
                    templateUrl: 'angular/views/loans/newfarms.html',
                    controller: 'FarmsController',
                    data: {newapplication: true}
                })
                .state('new.financials', {
                    url: '/financials',
                    templateUrl: 'angular/views/loans/newfinancials.html',
                    controller: 'FinancialsController',
                    data: {newapplication: true}
                })
                .state('new.insurance', {
                    url: '/insurance',
                    templateUrl: 'angular/views/loans/newinsurance.html',
                    controller: 'InsuranceController',
                    data: {newapplication: true}
                })
                .state('new.optimizer', {
                    url: '/optimizer',
                    templateUrl: 'angular/views/loans/optimizer.html',
                    controller: 'OptimizerController',
                    data: {newapplication: true}
                })
                .state('new.prerequisites', {
                    url: '/prerequisites',
                    templateUrl: 'angular/views/loans/prerequisites.html',
                    controller: 'PrerequisitesController',
                    data: {newapplication: true}
                })
                .state('new.plannedcrops', {
                    url: '/plannedcrops',
                    templateUrl: 'angular/views/loans/newplannedcrops.html',
                    controller: 'PlannedCropsController',
                    data: {newapplication: true}
                })
                .state('new.purgatory', {
                    url: '/purgatory',
                    templateUrl: 'angular/views/loans/newpurgatory.html',
                    controller: 'PurgatoryController',
                    data: {newapplication: true}
                })
                .state('new.quests', {
                    url: '/quests',
                    templateUrl: 'angular/views/loans/quests.html',
                    controller: 'QuestsController',
                    data: {newapplication: true}
                })
                .state('new.references', {
                    url: '/references',
                    templateUrl: 'angular/views/loans/newreferences.html',
                    controller: 'ReferencesController',
                    data: {newapplication: true}
                })
                .state('new.storage', {
                    url: '/storage',
                    templateUrl: 'angular/views/loans/storage.html',
                    controller: 'StorageController',
                    data: {newapplication: true}
                })
                .state('new.terms', {
                    url: '/terms',
                    templateUrl: 'angular/views/loans/terms.html',
                    controller: 'TermsController',
                    data: {newapplication: true}
                })
                .state('new.yield', {
                    url: '/yield',
                    templateUrl: 'angular/views/loans/newyield.html',
                    controller: 'YieldController',
                    data: {newapplication: true}
                });
        });
})();
