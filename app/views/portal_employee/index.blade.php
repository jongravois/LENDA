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
    {{ HTML::style('lib/fullcalendar/fullcalendar.css') }}
    {{ HTML::style('lib/angular-toastr/angular-toastr.min.css') }}
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
<!-- endbower -->

<!-- inject.js -->
<script src="angular/app.module.js"></script>
<script src="angular/main.ctrl.js"></script>
<script src="angular/main.loans.ctrl.js"></script>
<script src="angular/constants/constants.js"></script>
<script src="angular/routes/routes.js"></script>
<script src="angular/routes/admin_routes.js"></script>
<script src="angular/routes/edit_application_routes.js"></script>
<script src="angular/routes/new_application_routes.js"></script>
<script src="angular/routes/library_routes.js"></script>
<script src="angular/routes/reports_routes.js"></script>
<script src="angular/filters/filters.js"></script>
<script src="angular/models/base.js"></script>
<script src="angular/_directives/directives.js"></script>
<script src="angular/_directives/inPlaceDirectives.js"></script>

<script src="angular/addendums/addendum.factory.js"></script>

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

<script src="angular/addendums/addendums.ctrl.js"></script>
<script src="angular/applicants/applicants.ctrl.js"></script>
<script src="angular/applicants/applicants.factory.js"></script>
<script src="angular/budgets/budgets.ctrl.js"></script>
<script src="angular/budgets/expenses.factory.js"></script>
<script src="angular/closing/closing.ctrl.js"></script>
<script src="angular/collateral/collateral.ctrl.js"></script>
<script src="angular/comments/comments.ctrl.js"></script>
<script src="angular/comments/comments.data.js"></script>
<script src="angular/comments/comments.logic.js"></script>
<script src="angular/comments/comment.modal.ctrl.js"></script>
<script src="angular/committee/committee.ctrl.js"></script>
<script src="angular/crops/crops.ctrl.js"></script>
<script src="angular/crops/planned.crops.ctrl.js"></script>
<script src="angular/disbursements/disbursements.ctrl.js"></script>
<script src="angular/distributors/distributors.ctrl.js"></script>
<script src="angular/documents/prerequisites.ctrl.js"></script>
<script src="angular/documents/uploads.ctrl.js"></script>
<script src="angular/farmers/farmers.ctrl.js"></script>
<script src="angular/farmers/farmers.factory.js"></script>
<script src="angular/farms/farms.ctrl.js"></script>
<script src="angular/financials/financials.ctrl.js"></script>
<script src="angular/financials/financials.factory.js"></script>
<script src="angular/home/home.ctrl.js"></script>
<script src="angular/insurance/insurance.ctrl.js"></script>
<script src="angular/insurance/insurance.factory.js"></script>
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
<script src="angular/loans/edit.loans.ctrl.js"></script>
<script src="angular/loans/globals.factory.js"></script>
<script src="angular/loans/grader.factory.js"></script>
<script src="angular/loans/loan.conditions.factory.js"></script>
<script src="angular/loans/loan.exceptions.ctrl.js"></script>
<script src="angular/loans/loan.exceptions.factory.js"></script>
<script src="angular/loans/loans.factory.js"></script>
<script src="angular/loans/loans.processor.factory.js"></script>
<script src="angular/loans/loan.summary.ctrl.js"></script>
<script src="angular/loans/new.loans.ctrl.js"></script>
<script src="angular/loans/summary.ctrl.js"></script>
<script src="angular/management/management.ctrl.js"></script>
<script src="angular/modals/confirm.modal.ctrl.js"></script>
<script src="angular/modals/modals.service.js"></script>
<script src="angular/optimizer/optimizer.ctrl.js"></script>
<script src="angular/purgatory/purgatory.ctrl.js"></script>
<script src="angular/quests/quests.ctrl.js"></script>
<script src="angular/quests/quests.factory.js"></script>
<script src="angular/reconciliations/recons.ctrl.js"></script>
<script src="angular/references/references.ctrl.js"></script>
<script src="angular/reports/reports.ctrl.js"></script>
<script src="angular/reports/reports.factory.js"></script>
<script src="angular/shared/app.factory.js"></script>
<script src="angular/shared/email.factory.js"></script>
<script src="angular/shared/feeder.factory.js"></script>
<script src="angular/shared/lenda.factory.js"></script>
<script src="angular/shared/logging.factory.js"></script>
<script src="angular/shared/messages.factory.js"></script>
<script src="angular/storage/storage.ctrl.js"></script>
<script src="angular/storage/storage.factory.js"></script>
<script src="angular/systemics/systemics.ctrl.js"></script>
<script src="angular/terms/terms.ctrl.js"></script>
<script src="angular/layout/topbars/progress-bar.ctrl.js"></script>
<script src="angular/underwriting/underwriting.ctrl.js"></script>
<script src="angular/uploads/uploads.ctrl.js"></script>
<script src="angular/users/sessions.ctrl.js"></script>
<script src="angular/users/settings.ctrl.js"></script>
<script src="angular/users/users.factory.js"></script>
<script src="angular/yield/yield.ctrl.js"></script>
<!-- endinject -->

<!--JAVASCRIPT-->
</body>
</html>