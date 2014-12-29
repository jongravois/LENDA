(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewLoanController', function(
      $scope,
      $http,
      $state,
      $stateParams,
      API_URL,
      AppFactory,
      FarmersFactory,
      GlobalsFactory,
      LoansFactory
    ){
      $scope.newapplication = true; //flag for screen buttons
      $scope.currentScreen = 0;
      LoansFactory.getLoan($stateParams.loanID).then(function(response) {
        $scope.loan = response.data.data;
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