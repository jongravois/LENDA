(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('EditStorageController', function(
      $scope, $state, $stateParams, Loan, LoansFactory
    ){
      $scope.loan = $scope.loan || Loan.data.data[0];
      LoansFactory.getStorage($stateParams.loanID)
        .then(function success(rsp){
          $scope.storage = rsp.data.data;
          //TODO: Hard-Coded!
          $scope.total_stored = {
            acres: 39000,
            revenue: 505840,
            eligible: 379380
            };
        });
    });
})();