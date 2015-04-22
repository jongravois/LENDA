<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="favicon.ico">

    <title>LENDA: AR Resource Management</title>

    <!-- Bootstrap core CSS -->
    {{ HTML::style('css/bootstrap.min.css'); }}
    {{ HTML::style('css/app.css'); }}

    <link rel="apple-touch-icon" sizes="57x57" href="/ico/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/ico/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/ico/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/ico/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/ico/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/ico/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/ico/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="/ico/favicon-196x196.png" sizes="196x196">
    <link rel="icon" type="image/png" href="/ico/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="/ico/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/ico/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/ico/favicon-32x32.png" sizes="32x32">
</head>

<body>

<div class="container">
    <div class="row">
        <div class="col-lg-2">&nbsp;</div>
        <div class="col-lg-4" style="text-align: center;">
            <img src="/images/LENDA_Logo.png" alt="LENDA Logo" style="padding-top:70px;" />
            <h5 class="slogan">Loan Operations System</h5>
        </div>
        <div class="col-lg-4">
            @yield('content')
        </div>
        <div class="col-lg-2">&nbsp;</div>
    </div>
</div><!-- /.container -->

{{ HTML::script('lib/jquery/dist/jquery.min.js'); }}

</body>
</html>