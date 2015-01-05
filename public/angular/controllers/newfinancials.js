(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewFinancialsController', function(
      $scope, $stateParams, LoansFactory
    ){
      //TODO: There are no crops for Planned Crop Constraints
      if(!$scope.loan){
        LoansFactory.getLoan($stateParams.loanID)
          .then(function success(rsp){
            $scope.loan = rsp.data.data;
            if(!$scope.loan.fins){
              var newone = {
              loan_id: $stateParams.loanID
            };
              LoansFactory.createFinancials(newone)
                .then(function success(rsp){
                  $scope.loans.fins = rsp.data.data;
                });
            } // end if
          });
      } // end if
    });
})();