<!DOCTYPE html>
<html lang="en" ng-app="ARM">
<head>
    <meta charset="utf-8">
    <title>LENDA</title>
    <meta name="description" content="AR Management Operations">
    <meta name="author" content="Jonathan Gravois">

    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="vendor/angular-loading-bar/build/loading-bar.min.css"/>
    <link rel="stylesheet" href="vendor/angular-toastr/dist/angular-toastr.min.css"/>
    <link rel="stylesheet" href="css/appng.css"/>

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
<body ng-controller="MainController">
<div id="main_container" style="min-height:800px;" ng-cloak>
    <div id="main_top">
        <div class="col-xs-12" style="z-index:1;">
                <span style="display:none;" id="user_id" data-id="{{Auth::user()->id}}"> 
                    {{Auth::user()->username}} 
                </span>
            <div class="row">
                <div class="col-xs-12">
                    <div ng-include="'angular/views/topbars/logobar.html'"></div>
                </div>
            </div>
        </div>

    </div>
    <div ui-view style="margin-top:100px;" ></div>
</div><!-- /.container -->

<!--JAVASCRIPT-->
<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="vendor/lodash/dist/lodash.min.js"></script>
<script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="vendor/moment/min/moment.min.js"></script>

<!-- ANGULAR CORE -->
<script src="vendor/angular/angular.min.js"></script>
<script src="vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="vendor/angular-moment/angular-moment.min.js"></script>
<script src="vendor/angular-toastr/dist/angular-toastr.min.js"></script>
<script src="vendor/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="vendor/angular-ui-utils/ui-utils.min.js"></script>
<script src="vendor/angular-sanitize/angular-sanitize.min.js"></script>
<script src="vendor/angular-animate/angular-animate.min.js"></script>
<script src="vendor/angular-resource/angular-resource.min.js"></script>
<script src="vendor/angular-loading-bar/build/loading-bar.min.js"></script>
<script src="vendor/ng-grid/build/ng-grid.min.js"></script>
<!-- ANGULAR CORE -->

<!-- APP SPECIFIC -->
<script src="angular/arm.js"></script>
<script src="angular/filters/filters.js"></script>
<script src="angular/directives/directives.js"></script>
<!-- CONTROLLERS -->
<script src="angular/controllers/main.js"></script>
<script src="angular/controllers/sessions.js"></script>
<script src="angular/controllers/home.js"></script>
<script src="angular/controllers/newloan.js"></script>
<script src="angular/controllers/newaffiliates.js"></script>
<script src="angular/controllers/newapplicant.js"></script>
<script src="angular/controllers/newbudgets.js"></script>
<script src="angular/controllers/newclosing.js"></script>
<script src="angular/controllers/newcrops.js"></script>
<script src="angular/controllers/newdistributor.js"></script>
<script src="angular/controllers/newfarmer.js"></script>
<script src="angular/controllers/newfarms.js"></script>
<script src="angular/controllers/newfinancials.js"></script>
<script src="angular/controllers/newgrain.js"></script>
<script src="angular/controllers/newinsurance.js"></script>
<script src="angular/controllers/newplannedcrops.js"></script>
<script src="angular/controllers/newquests.js"></script>
<script src="angular/controllers/newreferences.js"></script>
<script src="angular/controllers/newuploads.js"></script>
<script src="angular/controllers/newyield.js"></script>
<script src="angular/controllers/edit.js"></script>
<script src="angular/controllers/management.js"></script>
<script src="angular/controllers/prefs.js"></script>
<script src="angular/controllers/calendar.js"></script>
<script src="angular/controllers/matrix.js"></script>
<script src="angular/controllers/reports.js"></script>
<script src="angular/controllers/library.js"></script>
<script src="angular/controllers/admin.js"></script>
<script src="angular/controllers/disbursement.js"></script>
<!-- CONTROLLERS -->
<!-- FACTORIES -->
<script src="angular/services/AppFactory.js"></script>
<script src="angular/services/GlobalsFactory.js"></script>
<script src="angular/services/UsersFactory.js"></script>
<script src="angular/services/FeederFactory.js"></script>
<script src="angular/services/LoansFactory.js"></script>
<script src="angular/services/FarmersFactory.js"></script>
<script src="angular/services/ApplicantsFactory.js"></script>
<script src="angular/services/QuestsFactory.js"></script>
<script src="angular/services/AffiliatesFactory.js"></script>
<script src="angular/services/ReferencesFactory.js"></script>
<script src="angular/services/CommentsFactory.js"></script>
<script src="angular/services/LendaFactory.js"></script>
<script src="angular/services/EmailFactory.js"></script>
<script src="angular/services/MessagingFactory.js"></script>
<script src="angular/services/LoggingFactory.js"></script>
<!-- FACTORIES -->
<!-- APP SPECIFIC -->

<script type="text/javascript"> 
    var user_id = {{Auth::user()->id}}; 
</script>
<!--JAVASCRIPT-->
</body>
</html>