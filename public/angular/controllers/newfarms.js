(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewFarmsController', function(
      $scope,
      $stateParams,
      toastr,
      AppFactory,
      LoansFactory
    ){
      var idLoan = $stateParams.loanID;
      $scope.loan = $scope.loan || {};
    });
})();