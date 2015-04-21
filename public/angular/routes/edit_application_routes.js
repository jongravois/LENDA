(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('edit', {
                    abstract: true,
                    url: '/edit/{loantypeID:\\d+}/{loanID:\\d+}',
                    templateUrl: 'angular/loans/edit.loan.shell.html',
                    controller: 'EditLoansController',
                    resolve: {
                        InitialData: function (LoansFactory) {
                            return LoansFactory.getLoans();
                        }
                    }
                })
                .state('edit.addendums', {
                    url: '/addendums',
                    templateUrl: 'angular/addendums/addendums.html',
                    controller: 'AddendumsController',
                    data: {newapplication: false}
                })
                .state('edit.applicant', {
                    url: '/applicant',
                    templateUrl: 'angular/applicants/editapplicant.html',
                    controller: 'ApplicantsController',
                    data: {newapplication: false}
                })
                .state('edit.audit', {
                    url: '/audit',
                    templateUrl: 'angular/systemics/systemics.html',
                    controller: 'SystemicsController',
                    data: {newapplication: false}
                })
                .state('edit.budgets', {
                    url: '/budgets',
                    templateUrl: 'angular/budgets/budgets.html',
                    controller: 'BudgetsController',
                    data: {newapplication: false}
                })
                .state('edit.closing', {
                    url: '/closing',
                    templateUrl: 'angular/closing/closing.html',
                    controller: 'ClosingController',
                    data: {newapplication: false}
                })
                .state('edit.collateral', {
                    url: '/collateral',
                    templateUrl: 'angular/collateral/collateral.html',
                    controller: 'CollateralController',
                    data: {newapplication: false}
                })
                .state('edit.comments', {
                    url: '/comments',
                    templateUrl: 'angular/comments/comments.html',
                    controller: 'CommentsController',
                    data: {newapplication: false}
                })
                .state('edit.committee', {
                    url: '/committee',
                    templateUrl: 'angular/committee/committee.html',
                    controller: 'CommitteeController',
                    data: {newapplication: false}
                })
                .state('edit.crops', {
                    url: '/crops',
                    templateUrl: 'angular/crops/editcrops.html',
                    controller: 'CropsController',
                    data: {newapplication: false}
                })
                .state('edit.disbursement', {
                    url: '/disbursement',
                    templateUrl: 'angular/disbursements/disbursement.html',
                    controller: 'DisbursementController',
                    data: {newapplication: false}
                })
                .state('edit.distributor', {
                    url: '/distributor',
                    templateUrl: 'angular/distributors/editdistributor.html',
                    controller: 'DistributorsController',
                    data: {newapplication: false}
                })
                .state('edit.farmdetails', {
                    url: '/farmdetails',
                    templateUrl: 'angular/farms/farmdetails.html',
                    controller: 'EditFarmDetailsController',
                    data: {newapplication: false}
                })
                .state('edit.farmer', {
                    url: '/farmer',
                    templateUrl: 'angular/farmers/editfarmer.html',
                    controller: 'FarmersController',
                    data: {newapplication: false}
                })
                .state('edit.farms', {
                    url: '/farms',
                    templateUrl: 'angular/farms/editfarms.html',
                    controller: 'FarmsController',
                    data: {newapplication: false}
                })
                .state('edit.financials', {
                    url: '/financials',
                    templateUrl: 'angular/financials/editfinancials.html',
                    controller: 'FinancialsController',
                    data: {newapplication: false}
                })
                .state('edit.insurance', {
                    url: '/insurance',
                    templateUrl: 'angular/insurance/editinsurance.html',
                    controller: 'InsuranceController',
                    data: {newapplication: false}
                })
                .state('edit.optimizer', {
                    url: '/optimizer',
                    templateUrl: 'angular/optimizer/optimizer.html',
                    controller: 'OptimizerController',
                    data: {newapplication: false}
                })
                .state('edit.plannedcrops', {
                    url: '/plannedcrops',
                    templateUrl: 'angular/crops/editplannedcrops.html',
                    controller: 'PlannedCropsController',
                    data: {newapplication: false}
                })
                .state('edit.prerequisites', {
                    url: '/prerequisites',
                    templateUrl: 'angular/documents/prerequisites.html',
                    controller: 'PrerequisitesController',
                    data: {newapplication: false}
                })
                .state('edit.quests', {
                    url: '/quests',
                    templateUrl: 'angular/quests/quests.html',
                    controller: 'QuestsController',
                    data: {newapplication: false}
                })
                .state('edit.reconciliation', {
                    url: '/reconciliation',
                    templateUrl: 'angular/reconciliations/recon.html',
                    controller: 'ReconciliationsController',
                    data: {newapplication: false}
                })
                .state('edit.references', {
                    url: '/references',
                    templateUrl: 'angular/references/editreferences.html',
                    controller: 'ReferencesController',
                    data: {newapplication: false}
                })
                .state('edit.storage', {
                    url: '/storage',
                    templateUrl: 'angular/storage/storage.html',
                    controller: 'StorageController',
                    data: {newapplication: false}
                })
                .state('edit.summary', {
                    url: '/summary',
                    templateUrl: 'angular/loans/summary.html',
                    controller: 'SummaryController',
                    data: {newapplication: false}
                })
                .state('edit.terms', {
                    url: '/terms',
                    templateUrl: 'angular/terms/terms.html',
                    controller: 'TermsController',
                    data: {newapplication: false}
                })
                .state('edit.underwriting', {
                    url: '/underwriting',
                    templateUrl: 'angular/underwriting/underwriting.html',
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
                    templateUrl: 'angular/yield/edityield.html',
                    controller: 'YieldController',
                    data: {newapplication: false}
                });
        });
})();
