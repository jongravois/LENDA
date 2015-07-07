## LENDA

[![Join the chat at https://gitter.im/jongravois/LENDA](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jongravois/LENDA?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is an AngularJS/Laravel 4.2 application

## Installation

* Clone repo to local environment
* From root, run ```composer install```
* Run ```touch bootstrap/environment.php```
* Run ```touch .env.local.php```
* Navigate to public folder
* Run ```npm install```  
* Run ```bower install```
* Open site in favorite text editor (```pstorm .```)
* Edit /bootstrap/environment.php
  
```
<?php return 'local';
```

* Edit .env.local.php (match your own setting, if necessary)

```
<?php

return [
  'DB_HOST' => 'localhost',
  'DB_NAME' => 'LENDA',
  'DB_USER' => 'homestead',
  'DB_PASSWORD' => 'secret',
  'MANDRILL_SECRET' => '',
  'FTP_BASE' => 'Projects/LENDA/public'
];
```

* Create an empty database named LENDA
* Navigate to the root of the project
* Run ```php artisan migrate```
* Run ```php artisan migrate:refresh --seed```
* Create /public/angular/constants.js

```
(function(){
    'use strict';
    angular
      .module('ARM')
      .constant('_', window._)
      .constant('API_URL', 'http://lenda.app/api')
      .constant('FILE_URL', 'http://lenda.app/files_loans/')
      .constant('LEGAL_NAME', 'Ag Resource Management');
})();
```



