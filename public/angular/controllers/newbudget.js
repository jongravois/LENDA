(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewBudgetController', function(
      $scope,
      $state,
      $stateParams,
      $location,
      toastr,
      AppFactory,
      LoansFactory
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      //alert(currScreen);

      $scope.insertBudget = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();