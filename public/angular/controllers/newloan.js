(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewLoanController', function(
      $scope,
      $http,
      $state,
      $stateParams,
      API_URL,
      AppFactory,
      FarmersFactory,
      GlobalsFactory,
      LoansFactory,
      LoanProcessor
    ){
      $scope.newapplication = true; //flag for screen buttons
      $scope.currentScreen = 0;
      //TODO: Copy in newinsurance.js -- refactor for DRY
      LoansFactory.getLoan($stateParams.loanID)
        .then(function success(response){
          var loan = response.data.data;
          LoansFactory.getInsuranceTotal(loan.id)
            .then(function(response){
              loan.total_ins_value = response.data;
            });
          $scope.loan = loan;
        });
      $scope.farmer = $scope.farmer || {};

      if(!$scope.screens){
        LoansFactory.getScreens($stateParams.loantypeID).then(function success(response){
          $scope.screens = response.data.data;
          angular.forEach($scope.screens, function(obj, index){
            if(obj.screen == 'farmer'){
              obj.status = 1;
            } else {
              obj.status = 0;
            }
          });
        });
      } // end if

      /* SCOPE METHODS */

    });
})();