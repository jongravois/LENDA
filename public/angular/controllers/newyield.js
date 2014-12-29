(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewYieldController', function(
      $scope,
      $stateParams,
      toastr,
      AppFactory,
      LoansFactory
    ){
      var idLoan = $stateParams.loanID;
      $scope.loan = $scope.loan || {};

      $scope.averageArray = AppFactory.averageArray;

      if(!$scope.loan.loanCrops){
        LoansFactory.getLoanCrops(idLoan)
          .then(function success(response){
                $scope.loan.loanCrops = response.data.data;
              });
      }

      $scope.updateYield = function(){
        alert('Updating');
      }
    });
})();