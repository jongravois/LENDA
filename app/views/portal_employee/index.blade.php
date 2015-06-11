<!DOCTYPE html>
<html lang="en" ng-app="ARM">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge, chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="AR Management Operations">
    <meta name="author" content="Jonathan Gravois">
    <title>LENDA - Ag Resource Management</title>
    <base href="/">
    <style>
        .ng-hide{ display: none !important; }
    </style>

    <!-- bower:css -->
    {{ HTML::style('lib/bootstrap/dist/css/bootstrap.min.css') }}
    {{ HTML::style('lib/angular-loading-bar/build/loading-bar.min.css') }}
    {{ HTML::style('lib/ng-grid/ng-grid.min.css') }}
    {{ HTML::style('lib/font-awesome-4.3.0/css/font-awesome.min.css') }}
    {{ HTML::style('lib/angular-toastr/angular-toastr.min.css') }}
    {{ HTML::style('lib/ag-grid/dist/angular-grid.min.css') }}
    {{ HTML::style('lib/ag-grid/dist/theme-fresh.min.css') }}
    <!-- endbower -->

    <!-- inject:css -->
    {{ HTML::style('css/styles.css') }}
    <!-- endinject -->

    <link rel="apple-touch-icon" sizes="120x120" href="/ico/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/ico/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="/ico/favicon-196x196.png" sizes="196x196">
    <link rel="icon" type="image/png" href="/ico/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="/ico/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/ico/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/ico/favicon-32x32.png" sizes="32x32">
</head>

<body ng-controller="MainController">
<div id="main_container" ng-cloak>
    <span style="display:none;" id="user_id" data-id="{{Auth::user()->id}}"> {{Auth::user()->username}} </span>
    <div ng-include="'angular/_shell/shell.html'"></div>
</div>

<!-- bower:js -->
{{ HTML::script('lib/jquery/dist/jquery.min.js'); }}
{{ HTML::script('lib/jquery-ui/ui/jquery-ui.js'); }}
{{ HTML::script('lib/lodash/lodash.min.js'); }}
{{ HTML::script('lib/moment/min/moment.min.js'); }}
{{ HTML::script('lib/angular-1.3.14/angular.js'); }}
{{ HTML::script('lib/angular-bootstrap/ui-bootstrap-tpls.min.js'); }}
{{ HTML::script('lib/angular-1.3.14/angular-animate.min.js'); }}
{{ HTML::script('lib/angular-toastr/angular-toastr.tpls.js'); }}
{{ HTML::script('lib/angular-ui-router/release/angular-ui-router.min.js'); }}
{{ HTML::script('lib/angular-ui-calendar/src/calendar.js'); }}
{{ HTML::script('lib/fullcalendar/fullcalendar.min.js'); }}
{{ HTML::script('lib/angular-ui-utils/ui-utils.min.js'); }}
{{ HTML::script('lib/angular-1.3.14/angular-messages.min.js'); }}
{{ HTML::script('lib/angular-1.3.14/angular-sanitize.min.js'); }}
{{ HTML::script('lib/angular-1.3.14/angular-resource.min.js'); }}
{{ HTML::script('lib/angular-loading-bar/build/loading-bar.min.js'); }}
{{ HTML::script('lib/ng-grid/build/ng-grid.debug.js'); }}
{{ HTML::script('lib/ng-grid/plugins/ng-grid-flexible-height.js'); }}
{{ HTML::script('lib/ng-file-upload/angular-file-upload-shim.js'); }}
{{ HTML::script('lib/ng-file-upload/angular-file-upload.js'); }}
{{ HTML::script('lib/angular-ui-sortable/sortable.min.js'); }}
{{ HTML::script('lib/ag-grid/dist/angular-grid.min.js'); }}
<!-- endbower -->

<!-- inject.js -->
<script src="angular/app.module.js"></script>
<script src="angular/loader.service.js"></script>
<script src="angular/main.ctrl.js"></script>
<script src="angular/main.loans.ctrl.js"></script>
<script src="angular/_constants/constants.js"></script>
<script src="angular/_routes/routes.js"></script>
<script src="angular/_routes/admin_routes.js"></script>
<script src="angular/_routes/edit_application_routes.js"></script>
<script src="angular/_routes/new_application_routes.js"></script>
<script src="angular/_routes/library_routes.js"></script>
<script src="angular/_routes/reports_routes.js"></script>
<script src="angular/_filters/filters.js"></script>
<script src="angular/_models/base.js"></script>
<script src="angular/_directives/clip.upload.directive.js"></script>
<script src="angular/_directives/decimals.directives.js"></script>
<script src="angular/_directives/inPlaceDirectives.js"></script>
<script src="angular/_directives/loan.progress.directive.js"></script>
<script src="angular/_directives/loan.status.directive.js"></script>
<script src="angular/_directives/notificator.directive.js"></script>
<script src="angular/_directives/really.click.directive.js"></script>
<script src="angular/_directives/single.click.directive.js"></script>


<script src="angular/admin/admin.ctrl.js"></script>
<script src="angular/admin/feeders/agents/admin.agents.ctrl.js"></script>
<script src="angular/admin/feeders/crops/admin.crops.ctrl.js"></script>
<script src="angular/admin/feeders/distributors/admin.distributors.ctrl.js"></script>
<script src="angular/admin/feeders/entity-types/admin.entity.types.ctrl.js"></script>
<script src="angular/admin/feeders/ins-types/admin.ins.types.ctrl.js"></script>
<script src="angular/admin/feeders/loan-types/admin.loan.types.ctrl.js"></script>
<script src="angular/admin/feeders/locations/admin.locations.ctrl.js"></script>
<script src="angular/admin/feeders/regions/admin.regions.ctrl.js"></script>
<script src="angular/admin/feeders/roles/admin.roles.ctrl.js"></script>
<script src="angular/admin/feeders/units/admin.units.ctrl.js"></script>
<script src="angular/admin/loans/committeespecs/admin.committee.specs.ctrl.js"></script>
<script src="angular/admin/reports/admin.reports.ctrl.js"></script>
<script src="angular/admin/users/admin.users.ctrl.js"></script>
<script src="angular/admin/users/applicants/admin.applicants.ctrl.js"></script>
<script src="angular/admin/users/farmers/admin.farmers.ctrl.js"></script>

<script src="angular/home/home.ctrl.js"></script>

<script src="angular/library/calendar/calendar.ctrl.js"></script>
<script src="angular/library/classroom/classroom.ctrl.js"></script>
<script src="angular/library/legal-docs/legal.docs.ctrl.js"></script>
<script src="angular/library/legend/legend.ctrl.js"></script>
<script src="angular/library/library.ctrl.js"></script>
<script src="angular/library/library.factory.js"></script>
<script src="angular/library/loan-products/loan.products.ctrl.js"></script>
<script src="angular/library/matrix/matrix.ctrl.js"></script>
<script src="angular/library/pdf-apps/pdf.apps.ctrl.js"></script>
<script src="angular/library/policies/pol.procs.ctrl.js"></script>
<script src="angular/library/resources/resources.ctrl.js"></script>

<script src="angular/loans/addendums/addendums.ctrl.js"></script>
<script src="angular/loans/addendums/addendum.factory.js"></script>
<script src="angular/loans/budgets/budgets.ctrl.js"></script>
<script src="angular/loans/budgets/expenses.factory.js"></script>
<script src="angular/loans/closing/closing.ctrl.js"></script>
<script src="angular/loans/collateral/collateral.ctrl.js"></script>
<script src="angular/loans/comments/comments.ctrl.js"></script>
<script src="angular/loans/comments/comments.data.js"></script>
<script src="angular/loans/comments/comments.logic.js"></script>
<script src="angular/loans/comments/comment.modal.ctrl.js"></script>
<script src="angular/loans/committee/committee.ctrl.js"></script>
<script src="angular/loans/crops/crops.ctrl.js"></script>
<script src="angular/loans/crops/planned.crops.ctrl.js"></script>
<script src="angular/loans/disbursements/disbursements.ctrl.js"></script>
<script src="angular/loans/distributors/distributors.ctrl.js"></script>
<script src="angular/loans/farmers/farmers.ctrl.js"></script>
<script src="angular/loans/farmers/farmers.factory.js"></script>
<script src="angular/loans/farms/farms.ctrl.js"></script>
<script src="angular/loans/financials/financials.ctrl.js"></script>
<script src="angular/loans/financials/financials.factory.js"></script>
<script src="angular/loans/insurance/insurance.ctrl.js"></script>
<script src="angular/loans/insurance/insurance.factory.js"></script>
<script src="angular/loans/prereqs/prerequisites.ctrl.js"></script>
<script src="angular/loans/prereqs/uploads.ctrl.js"></script>
<script src="angular/loans/summary/loan.summary.ctrl.js"></script>
<script src="angular/loans/summary/summary.ctrl.js"></script>
<script src="angular/loans/management/management.ctrl.js"></script>
<script src="angular/loans/optimizer/optimizer.ctrl.js"></script>
<script src="angular/loans/purgatory/purgatory.ctrl.js"></script>
<script src="angular/loans/quests/quests.ctrl.js"></script>
<script src="angular/loans/quests/quests.factory.js"></script>
<script src="angular/loans/reconciliations/recons.ctrl.js"></script>
<script src="angular/loans/references/references.ctrl.js"></script>
<script src="angular/loans/services/app.factory.js"></script>
<script src="angular/loans/services/defaults.factory.js"></script>
<script src="angular/loans/services/edit.loans.ctrl.js"></script>
<script src="angular/loans/services/email.factory.js"></script>
<script src="angular/loans/services/feeder.factory.js"></script>
<script src="angular/loans/services/globals.factory.js"></script>
<script src="angular/loans/services/grader.factory.js"></script>
<script src="angular/loans/services/lenda.factory.js"></script>
<script src="angular/loans/services/loan.conditions.factory.js"></script>
<script src="angular/loans/services/loan.exceptions.ctrl.js"></script>
<script src="angular/loans/services/loan.exceptions.factory.js"></script>
<script src="angular/loans/services/loans.factory.js"></script>
<script src="angular/loans/services/loans.processor.factory.js"></script>
<script src="angular/loans/services/logging.factory.js"></script>
<script src="angular/loans/services/messages.factory.js"></script>
<script src="angular/loans/services/new.loans.ctrl.js"></script>
<script src="angular/loans/storage/storage.ctrl.js"></script>
<script src="angular/loans/storage/storage.factory.js"></script>
<script src="angular/loans/systemics/systemics.ctrl.js"></script>
<script src="angular/loans/terms/terms.ctrl.js"></script>
<script src="angular/loans/underwriting/underwriting.ctrl.js"></script>
<script src="angular/loans/yield/yield.ctrl.js"></script>

<script src="angular/modals/modal.ctrl.js"></script>
<script src="angular/modals/modals.service.js"></script>

<script src="angular/reports/account_reconciliation/account.reconciliation.ctrl.js"></script>
<script src="angular/reports/account_reconciliation/account.reconciliation.factory.js"></script>
<script src="angular/reports/activity_detail/activity.detail.ctrl.js"></script>
<script src="angular/reports/activity_detail/activity.detail.factory.js"></script>
<script src="angular/reports/activity_summary/activity.summary.ctrl.js"></script>
<script src="angular/reports/activity_summary/activity.summary.factory.js"></script>
<script src="angular/reports/available_credit/available.credit.ctrl.js"></script>
<script src="angular/reports/available_credit/available.credit.factory.js"></script>
<script src="angular/reports/committee_approval/committee.approval.ctrl.js"></script>
<script src="angular/reports/committee_approval/committee.approval.factory.js"></script>
<script src="angular/reports/committee_comment/committee.comment.ctrl.js"></script>
<script src="angular/reports/committee_comment/committee.comment.factory.js"></script>
<script src="angular/reports/crop_mix/crop.mix.ctrl.js"></script>
<script src="angular/reports/crop_mix/crop.mix.factory.js"></script>
<script src="angular/reports/customer_budget/customer.budget.ctrl.js"></script>
<script src="angular/reports/customer_budget/customer.budget.factory.js"></script>
<script src="angular/reports/farmer_history/farmer.history.ctrl.js"></script>
<script src="angular/reports/farmer_history/farmer.history.factory.js"></script>
<script src="angular/reports/flow_and_risk/cfarm.ctrl.js"></script>
<script src="angular/reports/flow_and_risk/cfarm.factory.js"></script>
<script src="angular/reports/loan_management/loan.management.ctrl.js"></script>
<script src="angular/reports/loan_management/loan.management.factory.js"></script>
<script src="angular/reports/reports.ctrl.js"></script>
<script src="angular/reports/reports.factory.js"></script>
<script src="angular/reports/user_audit/user.audit.ctrl.js"></script>
<script src="angular/reports/user_audit/user.audit.factory.js"></script>

<script src="angular/layout/topbars/progress-bar.ctrl.js"></script>

<script src="angular/uploads/uploads.ctrl.js"></script>

<script src="angular/users/sessions.ctrl.js"></script>
<script src="angular/users/settings.ctrl.js"></script>
<script src="angular/users/users.factory.js"></script>
<!-- endinject -->

<!--JAVASCRIPT-->
</body>
</html>