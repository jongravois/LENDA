(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewUploadsController', function(
      $scope, $state, $stateParams
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      angular.forEach($scope.screens, function(obj, index) {
        if (obj.screen == currScreen) {
          obj.status = 1;
        }
      });
      //alert(currScreen);

      $scope.moveFromUploads = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();