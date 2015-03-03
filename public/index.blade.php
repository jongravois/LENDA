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
    <link rel="stylesheet" href="../public/vendor/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="../public/vendor/angular-toastr/dist/angular-toastr.css" />
    <link rel="stylesheet" href="../public/vendor/angular-loading-bar/build/loading-bar.css" />
    <link rel="stylesheet" href="../public/vendor/ng-grid/ng-grid.css" />
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
<script src="../public/vendor/jquery/dist/jquery.js"></script>
<script src="../public/vendor/lodash/dist/lodash.compat.js"></script>
<script src="../public/vendor/bootstrap/dist/js/bootstrap.js"></script>
<script src="../public/vendor/moment/moment.js"></script>
<script src="../public/vendor/angular/angular.js"></script>
<script src="../public/vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
<script src="../public/vendor/angular-toastr/dist/angular-toastr.js"></script>
<script src="../public/vendor/angular-ui-router/release/angular-ui-router.js"></script>
<script src="../public/vendor/angular-ui-utils/ui-utils.js"></script>
<script src="../public/vendor/angular-messages/angular-messages.js"></script>
<script src="../public/vendor/angular-sanitize/angular-sanitize.js"></script>
<script src="../public/vendor/angular-animate/angular-animate.js"></script>
<script src="../public/vendor/angular-resource/angular-resource.js"></script>
<script src="../public/vendor/angular-loading-bar/build/loading-bar.js"></script>
<script src="../public/vendor/ng-grid/build/ng-grid.js"></script>
<!-- endbower -->

<!-- inject.js -->
<!-- endinject -->

<script type="text/javascript"> 
    var user_id = {{Auth::user()->id}}; 
</script>
<!--JAVASCRIPT-->
</body>
</html>