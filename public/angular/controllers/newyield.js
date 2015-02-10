(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewYieldController', function(
      $scope, $state, $stateParams,
      AppFactory, LoansFactory
    ) {
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      angular.forEach($scope.screens, function(obj, index) {
        if (obj.screen == currScreen) {
          obj.status = 1;
        }
      });
      //alert(currScreen);

      var idLoan = $stateParams.loanID;
      $scope.loan = $scope.loan || {};

      $scope.averageArray = AppFactory.averageArray;

      if (!$scope.loan.loanCrops) {
        LoansFactory.getLoanCrops(idLoan)
          .then(function success(response) {
            $scope.loan.loanCrops = response.data.data;
          });
      }

      $scope.updateYield = function () {
        //TODO: Create function
        alert('Updating');
      }

      $scope.moveFromYields = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();