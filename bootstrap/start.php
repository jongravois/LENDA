<?php

$app = new Illuminate\Foundation\Application;

//putenv('APP_ENV=staging');
//putenv('APP_ENV=production');
$env = $app->detectEnvironment(function(){
  return getenv('APP_ENV') ?: 'local';
});

$app->bindInstallPaths(require __DIR__.'/paths.php');

$framework = $app['path.base'].
                 '/vendor/laravel/framework/src';

require $framework.'/Illuminate/Foundation/start.php';

return $app;
