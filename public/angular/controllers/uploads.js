(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('UploadsController', UploadsController);

    UploadsController.$inject = ['$scope', '$state', '$stateParams'];

    function UploadsController (
      $scope, $state, $stateParams
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      $scope.newapplication = $state.current.data.newapplication;

      if( $state.includes('new') ){
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) { obj.status = 1; }
        });
      } // end if
      //alert(currScreen);

      $scope.moveFromUploads = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    }
})();