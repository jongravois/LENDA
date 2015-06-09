(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider) {
            $stateProvider
                .state('edit', {
                    abstract: true,
                    url: '/edit/{loantypeID:\\d+}/{loanID:\\d+}',
                    templateUrl: 'angular/loans/edit.loan.shell.html',
                    controller: 'EditLoansController',
                    resolve: {}
                })
                .state('edit.addendums', {
                    url: '/addendums',
                    templateUrl: 'angular/loans/addendums/addendums.html',
                    controller: 'AddendumsController',
                    data: {newapplication: false}
                })
                .state('edit.audit', {
                    url: '/audit',
                    templateUrl: 'angular/loans/systemics/systemics.html',
                    controller: 'SystemicsController',
                    data: {newapplication: false}
                })
                .state('edit.budgets', {
                    url: '/budgets',
                    templateUrl: 'angular/loans/budgets/budgets.html',
                    controller: 'BudgetsController',
                    data: {newapplication: false}
                })
                .state('edit.closing', {
                    url: '/closing',
                    templateUrl: 'angular/loans/closing/closing.html',
                    controller: 'ClosingController',
                    data: {newapplication: false}
                })
                .state('edit.collateral', {
                    url: '/collateral',
                    templateUrl: 'angular/loans/collateral/collateral.html',
                    controller: 'CollateralController',
                    data: {newapplication: false}
                })
                .state('edit.comments', {
                    url: '/comments',
                    templateUrl: 'angular/loans/comments/comments.html',
                    controller: 'CommentsController',
                    data: {newapplication: false}
                })
                .state('edit.committee', {
                    url: '/committee',
                    templateUrl: 'angular/loans/committee/committee.html',
                    controller: 'CommitteeController',
                    data: {newapplication: false}
                })
                .state('edit.crops', {
                    url: '/crops',
                    templateUrl: 'angular/loans/crops/crops.html',
                    controller: 'CropsController',
                    data: {newapplication: false}
                })
                .state('edit.disbursement', {
                    url: '/disbursement',
                    templateUrl: 'angular/loans/disbursements/disbursement.html',
                    controller: 'DisbursementsController',
                    data: {newapplication: false}
                })
                .state('edit.distributor', {
                    url: '/distributor',
                    templateUrl: 'angular/loans/distributors/distributor.html',
                    controller: 'DistributorsController',
                    data: {newapplication: false}
                })
                .state('edit.farmdetails', {
                    url: '/farmdetails',
                    templateUrl: 'angular/loans/farms/farmdetails.html',
                    controller: 'EditFarmDetailsController',
                    data: {newapplication: false}
                })
                .state('edit.farmer', {
                    url: '/farmer',
                    templateUrl: 'angular/loans/farmers/farmer.html',
                    controller: 'FarmersController',
                    data: {newapplication: false}
                })
                .state('edit.farms', {
                    url: '/farms',
                    templateUrl: 'angular/loans/farms/farms.html',
                    controller: 'FarmsController',
                    data: {newapplication: false}
                })
                .state('edit.financials', {
                    url: '/financials',
                    templateUrl: 'angular/loans/financials/financials.html',
                    controller: 'FinancialsController',
                    data: {newapplication: false}
                })
                .state('edit.insurance', {
                    url: '/insurance',
                    templateUrl: 'angular/loans/insurance/insurance.html',
                    controller: 'InsuranceController',
                    data: {newapplication: false}
                })
                .state('edit.optimizer', {
                    url: '/optimizer',
                    templateUrl: 'angular/loans/optimizer/optimizer.html',
                    controller: 'OptimizerController',
                    data: {newapplication: false}
                })
                .state('edit.plannedcrops', {
                    url: '/plannedcrops',
                    templateUrl: 'angular/loans/crops/plannedcrops.html',
                    controller: 'PlannedCropsController',
                    data: {newapplication: false}
                })
                .state('edit.prerequisites', {
                    url: '/prerequisites',
                    templateUrl: 'angular/loans/prereqs/prerequisites.html',
                    controller: 'PrerequisitesController',
                    data: {newapplication: false}
                })
                .state('edit.quests', {
                    url: '/quests',
                    templateUrl: 'angular/loans/quests/quests.html',
                    controller: 'QuestsController',
                    data: {newapplication: false}
                })
                .state('edit.reconciliation', {
                    url: '/reconciliation',
                    templateUrl: 'angular/loans/reconciliations/recon.html',
                    controller: 'ReconciliationsController',
                    data: {newapplication: false}
                })
                .state('edit.references', {
                    url: '/references',
                    templateUrl: 'angular/loans/references/references.html',
                    controller: 'ReferencesController',
                    data: {newapplication: false}
                })
                .state('edit.storage', {
                    url: '/storage',
                    templateUrl: 'angular/loans/storage/storage.html',
                    controller: 'StorageController',
                    data: {newapplication: false}
                })
                .state('edit.summary', {
                    url: '/summary',
                    templateUrl: 'angular/loans/summary/summary.html',
                    controller: 'SummaryController',
                    data: {newapplication: false}
                })
                .state('edit.terms', {
                    url: '/terms',
                    templateUrl: 'angular/loans/terms/terms.html',
                    controller: 'TermsController',
                    data: {newapplication: false}
                })
                .state('edit.underwriting', {
                    url: '/underwriting',
                    templateUrl: 'angular/loans/underwriting/underwriting.html',
                    controller: 'UnderwritingController',
                    data: {newapplication: false}
                })
                .state('edit.uploads', {
                    url: '/uploads',
                    templateUrl: 'angular/uploads/uploads.html',
                    controller: 'UploadsController',
                    data: {newapplication: false}
                })
                .state('edit.yield', {
                    url: '/yield',
                    templateUrl: 'angular/loans/yield/yield.html',
                    controller: 'YieldController',
                    data: {newapplication: false}
                });
        });
})();
