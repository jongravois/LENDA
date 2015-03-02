<!DOCTYPE html>
<html lang="en" ng-app="ARM">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge, chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="AR Management Operations">
    <meta name="author" content="Jonathan Gravois">
    <title>LENDA</title>
    <base href="/">
    <style>
        .ng-hide{ display: none !important; }
    </style>

    <!-- bower:css -->
    <link rel="stylesheet" href="/vendor/bootstrap-3.3.2/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="vendor/angular-loading-bar/build/loading-bar.min.css"/>
    <link rel="stylesheet" href="vendor/ng-grid/ng-grid.min.css"/>
    <link rel="stylesheet" href="vendor/angular-toastr/dist/angular-toastr.min.css"/>
    <!-- endbower -->

    <!-- inject:css -->
    <link rel="stylesheet" href=".tmp/styles.css"/>
    <!-- endinject -->

    <link rel="apple-touch-icon" sizes="57x57" href="/ico/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/ico/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/ico/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/ico/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/ico/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/ico/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="/ico/favicon-196x196.png" sizes="196x196">
    <link rel="icon" type="image/png" href="/ico/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="/ico/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/ico/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/ico/favicon-32x32.png" sizes="32x32">
</head>
<body ng-controller="MainController"  autoscroll="true">
<div id="main_container" style="min-height:800px;" ng-cloak>
    <div id="main_top">
        <div class="col-xs-12" style="z-index:1;">
            <span style="display:none;" id="user_id" data-id="{{Auth::user()->id}}"> 
                {{Auth::user()->username}} 
            </span>
            <div class="row" style="z-index: 32000;">
                <div class="col-xs-12">
                    <div ng-include="'angular/views/topbars/logobar.html'"></div>
                </div>
            </div>
        </div>
    </div>
    <div ui-view style="margin-top:120px; z-index: 10;"></div>
</div><!-- /.container -->

<!-- bower:js -->
<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="vendor/lodash/dist/lodash.min.js"></script>
<script src="vendor/bootstrap-3.3.2/js/bootstrap.min.js"></script>
<script src="vendor/moment/min/moment.min.js"></script>

<script src="vendor/angular/angular.min.js"></script>
<script src="vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="vendor/angular-toastr/dist/angular-toastr.min.js"></script>
<script src="vendor/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="vendor/angular-ui-utils/ui-utils.min.js"></script>
<script src="vendor/angular-messages/angular-messages.min.js"></script>
<script src="vendor/angular-sanitize/angular-sanitize.min.js"></script>
<script src="vendor/angular-animate/angular-animate.min.js"></script>
<script src="vendor/angular-resource/angular-resource.min.js"></script>
<script src="vendor/angular-loading-bar/build/loading-bar.min.js"></script>
<script src="vendor/ng-grid/build/ng-grid.debug.js"></script>
<!-- endbower -->

<!-- inject.js -->
<script src="angular/app.module.js"></script>
<script src="angular/constants/constants.js"></script>
<script src="angular/routes/routes.js"></script>
<script src="angular/routes/admin_routes.js"></script>
<script src="angular/routes/edit_application_routes.js"></script>
<script src="angular/routes/new_application_routes.js"></script>
<script src="angular/routes/library_routes.js"></script>
<script src="angular/routes/reports_routes.js"></script>
<script src="angular/filters/filters.js"></script>
<script src="angular/models/base.js"></script>
<script src="angular/directives/directives.js"></script>
<script src="angular/directives/inPlaceDirectives.js"></script>

<script src="angular/controllers/main.js"></script>
<script src="angular/controllers/sessions.js"></script>
<script src="angular/controllers/prefs.js"></script>
<script src="angular/controllers/home.js"></script>
<script src="angular/controllers/management.js"></script>
<script src="angular/controllers/newloan.js"></script>
<script src="angular/controllers/editLoan.js"></script>

<script src="angular/controllers/admin.js"></script>
<script src="angular/controllers/audits.js"></script>
<script src="angular/controllers/applicant.js"></script>
<script src="angular/controllers/budgets.js"></script>
<script src="angular/controllers/calendar.js"></script>
<script src="angular/controllers/closing.js"></script>
<script src="angular/comments/controller.js"></script>
<script src="angular/controllers/committee.js"></script>
<script src="angular/controllers/crops.js"></script>
<script src="angular/controllers/disbursement.js"></script>
<script src="angular/controllers/distributor.js"></script>
<script src="angular/controllers/farmer.js"></script>
<script src="angular/controllers/farms.js"></script>
<script src="angular/controllers/financials.js"></script>
<script src="angular/controllers/insurance.js"></script>
<script src="angular/controllers/legalDocs.js"></script>
<script src="angular/controllers/legend.js"></script>
<script src="angular/controllers/Library.js"></script>
<script src="angular/controllers/loanexceptions.js"></script>
<script src="angular/controllers/loanProducts.js"></script>
<script src="angular/controllers/matrix.js"></script>
<script src="angular/controllers/optimizer.js"></script>
<script src="angular/controllers/pdfApps.js"></script>
<script src="angular/controllers/plannedcrops.js"></script>
<script src="angular/controllers/polProcs.js"></script>
<script src="angular/controllers/prefs.js"></script>
<script src="angular/controllers/prerequisites.js"></script>
<script src="angular/controllers/purgatory.js"></script>
<script src="angular/controllers/quests.js"></script>
<script src="angular/controllers/references.js"></script>
<script src="angular/controllers/reports.js"></script>
<script src="angular/controllers/resources.js"></script>
<script src="angular/controllers/storage.js"></script>
<script src="angular/controllers/summary.js"></script>
<script src="angular/controllers/terms.js"></script>
<script src="angular/controllers/underwriting.js"></script>
<script src="angular/controllers/uploads.js"></script>
<script src="angular/controllers/yield.js"></script>

<script src="angular/services/ApplicantsFactory.js"></script>
<script src="angular/services/AppFactory.js"></script>
<script src="angular/comments/data.js"></script>
<script src="angular/comments/logic.js"></script>
<script src="angular/services/ConditionsFactory.js"></script>
<script src="angular/services/EmailFactory.js"></script>
<script src="angular/services/ExceptionsFactory.js"></script>
<script src="angular/services/ExpensesFactory.js"></script>
<script src="angular/services/FarmersFactory.js"></script>
<script src="angular/services/FeederFactory.js"></script>
<script src="angular/services/FinancialsFactory.js"></script>
<script src="angular/services/GlobalsFactory.js"></script>
<script src="angular/services/Grader.js"></script>
<script src="angular/services/InsuranceFactory.js"></script>
<script src="angular/services/LendaFactory.js"></script>
<script src="angular/services/LibraryFactory.js"></script>
<script src="angular/services/LoansFactory.js"></script>
<script src="angular/services/LoggingFactory.js"></script>
<script src="angular/services/MessagingFactory.js"></script>
<script src="angular/services/ProcessLoansFactory.js"></script>
<script src="angular/services/QuestsFactory.js"></script>
<script src="angular/services/UsersFactory.js"></script>
<!-- endinject -->

<script type="text/javascript"> 
    var user_id = {{Auth::user()->id}}; 
</script>
<!--JAVASCRIPT-->
</body>
</html>