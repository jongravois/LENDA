<?php

$app = new Illuminate\Foundation\Application;

$env = $app->detectEnvironment( function () {

  // Defined in the server configuration
  if ( isset( $_SERVER['APP_ENVIRONMENT'] ) ) {
    return $_SERVER['APP_ENVIRONMENT'];

    // Look for ./environment.php
  } elseif ( file_exists( __DIR__ . '/environment.php' ) ) {
    return include __DIR__ . '/environment.php';
  }

});

$app->bindInstallPaths(require __DIR__.'/paths.php');

$framework = $app['path.base'].
                 '/vendor/laravel/framework/src';

require $framework.'/Illuminate/Foundation/start.php';

return $app;
