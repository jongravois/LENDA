# Confirmation Addon for Angular UI-Router:

Angular UI-Router is the defacto router for AngularJS.

Angular UI-Router Confirm add navigation confirm to your UI-Router states.

## Dependencies
- required:
    - "angular": "~1.2.0",
    - "angular-ui-router": "~0.2.10"

## Get Started
**(1)** Get UI-Router Confirm in one of the following ways:
 - [download the release](https://github.com/bogdanalexe90/ui-router-confirm/blob/master/release/angular-ui-router-confirm.js) (or [minified](https://github.com/bogdanalexe90/ui-router-confirm/blob/master/release/angular-ui-router-confirm.min.js))
 - via **[Bower](http://bower.io/)**: by running `$ bower install ui-router-confirm` from your console

**(2)** Include `angular-ui-router-confirm.js` (or `angular-ui-router-confirm.min.js`) in your `index.html`, after including Angular and UI-Router

**(3)** Add `'ui.router.confirm'` to your main module's list of dependencies

When you're done, your setup should look similar to the following:

>
```html
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
    <script src="js/angular-ui-router.min.js"></script>
    <script src="js/ui-router-confirm.min.js"></script>
    <script>
        angular.module('myApp', ['ui.router', 'ui.router.confirm']);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```

### How to use

>
```javascript
angular
  .module('myApp')
  //Overridde default values
  .constant('uiRouterConfirmConfig', {
    property: 'confirmOnExit', // default property
    title: 'Are you sure?', //default property
    message: 'Do you want to navigate away?', //default property
    sync: true //default property - async is not yet implemented
  })
  .config(function($stateProvider) {
    $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope, $state) {
        $scope.navigateWithoutConfirm = function(){
            //Set confirm flag to false
            $state.current.confirmOnExit = false;
            $state.go('state1');
        };
        $scope.navigateWithConfirm = function(){
            $state.go('state1');
        };
      },
      //Add a onEnter hook to set the confirmation flag each time the state is enabled
      onEnter: function(){
        this.confirmOnExit = true;
      }
    });
});
```
