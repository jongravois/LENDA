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
      $scope.insertBudget = function(){
        var curr = $state.current.url;
        alert(curr.substring(1,curr.length));
      }
    });
})();