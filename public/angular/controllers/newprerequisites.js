(function(){
    'use strict';
  angular
    .module('ARM')
    .controller('NewPrerequisitesController', function(
      $scope, $state, $stateParams
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      //alert(currScreen);

      $scope.moveFromDocs = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();