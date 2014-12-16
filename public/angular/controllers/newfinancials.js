(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewFinancialsController', function($scope, $stateParams, LoansFactory){
      //TODO: There are no crops for Planned Crop Constraints
      if(!$scope.loan){
        LoansFactory.getLoan($stateParams.loanID).then(function success(response){
          $scope.loan = response.data.data;
          if(!$scope.loan.fins){
            var newone = {
              loan_id: $stateParams.loanID
            };
            LoansFactory.createFinancials(newone).then(function success(response){
              $scope.loans.fins = response.data.data;
              console.log($scope.loan.fins);
            });
          } // end if
        });
      } // end if

    });
})();