(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider) {
            $stateProvider
                .state('new', {
                    abstract: true,
                    url: '/new/{loantypeID:\\d+}/{loanID:\\d+}',
                    templateUrl: 'angular/loans/new.loan.shell.html',
                    controller: 'NewLoansController',
                    resolve: {
                        InitialData: function ($stateParams, LoansFactory) {
                            return LoansFactory.getLoan($stateParams.loanID);
                        }
                    }
                })
                .state('new.applicant', {
                    url: '/applicant',
                    templateUrl: 'angular/loans/applicants/applicant.html',
                    controller: 'ApplicantsController',
                    data: {newapplication: true}
                })
                .state('new.budget', {
                    url: '/budget',
                    templateUrl: 'angular/loans/budgets/budget.html',
                    controller: 'BudgetsController',
                    data: {newapplication: true}
                })
                .state('new.collateral', {
                    url: '/collateral',
                    templateUrl: 'angular/loans/collateral/collateral.html',
                    controller: 'CollateralController',
                    data: {newapplication: true}
                })
                .state('new.crops', {
                    url: '/crops',
                    templateUrl: 'angular/loans/crops/crops.html',
                    controller: 'CropsController',
                    data: {newapplication: true}
                })
                .state('new.distributor', {
                    url: '/distributor',
                    templateUrl: 'angular/loans/distributors/distributor.html',
                    controller: 'DistributorController',
                    data: {newapplication: true}
                })
                .state('new.expenses', {
                    url: '/expenses',
                    templateUrl: 'angular/loans/budgets/expenses.html',
                    controller: 'BudgetsController',
                    data: {newapplication: true}
                })
                .state('new.farmer', {
                    url: '/farmer',
                    templateUrl: 'angular/loans/farmers/farmer.html',
                    controller: 'FarmersController',
                    data: {newapplication: true},
                    resolve: {
                        Loan: function ($stateParams, LoansFactory) {
                            return LoansFactory.getLoan($stateParams.loanID);
                        }
                    }
                })
                .state('new.farms', {
                    url: '/farms',
                    templateUrl: 'angular/loans/farms/farms.html',
                    controller: 'FarmsController',
                    data: {newapplication: true}
                })
                .state('new.financials', {
                    url: '/financials',
                    templateUrl: 'angular/loans/financials/financials.html',
                    controller: 'FinancialsController',
                    data: {newapplication: true}
                })
                .state('new.insurance', {
                    url: '/insurance',
                    templateUrl: 'angular/loans/insurance/insurance.html',
                    controller: 'InsuranceController',
                    data: {newapplication: true}
                })
                .state('new.optimizer', {
                    url: '/optimizer',
                    templateUrl: 'angular/loans/optimizer/optimizer.html',
                    controller: 'OptimizerController',
                    data: {newapplication: true}
                })
                .state('new.prerequisites', {
                    url: '/prerequisites',
                    templateUrl: 'angular/loans/documents/prerequisites.html',
                    controller: 'PrerequisitesController',
                    data: {newapplication: true}
                })
                .state('new.plannedcrops', {
                    url: '/plannedcrops',
                    templateUrl: 'angular/loans/crops/plannedcrops.html',
                    controller: 'PlannedCropsController',
                    data: {newapplication: true}
                })
                .state('new.purgatory', {
                    url: '/purgatory',
                    templateUrl: 'angular/loans/purgatory/purgatory.html',
                    controller: 'PurgatoryController',
                    data: {newapplication: true}
                })
                .state('new.quests', {
                    url: '/quests',
                    templateUrl: 'angular/loans/quests/quests.html',
                    controller: 'QuestsController',
                    data: {newapplication: true}
                })
                .state('new.references', {
                    url: '/references',
                    templateUrl: 'angular/loans/references/newreferences.html',
                    controller: 'ReferencesController',
                    data: {newapplication: true}
                })
                .state('new.storage', {
                    url: '/storage',
                    templateUrl: 'angular/loans/storage/storage.html',
                    controller: 'StorageController',
                    data: {newapplication: true}
                })
                .state('new.terms', {
                    url: '/terms',
                    templateUrl: 'angular/loans/terms/terms.html',
                    controller: 'TermsController',
                    data: {newapplication: true}
                })
                .state('new.yield', {
                    url: '/yield',
                    templateUrl: 'angular/loans/yield/yield.html',
                    controller: 'YieldController',
                    data: {newapplication: true}
                });
        });
})();
