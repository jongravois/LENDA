(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewUploadsController', function(
      $scope, $state, $stateParams
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      if( $state.includes('new') ){
        $scope.newapplication == true;
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) { obj.status = 1; }
        });
      } else {
        $scope.newapplication == false;
      }// end if
      //alert(currScreen);

      $scope.moveFromUploads = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();