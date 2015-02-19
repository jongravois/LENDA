(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('YieldController', YieldController);

    YieldController.$inject = ['$scope', '$state', '$stateParams', 'Loan', 'AppFactory', 'LoansFactory'];

    function YieldController(
      $scope, $state, $stateParams,
      Loan, AppFactory, LoansFactory
    ) {
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      if( $state.includes('new') ){
        $scope.newapplication == true;
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) { obj.status = 1; }
        });
      } else {
        $scope.newapplication == false;
      }// end if
      //alert(currScreen);

      $scope.loan = $scope.loan || Loan.data.data[0];

      $scope.averageArray = AppFactory.averageArray;

      if (!$scope.loan.loanCrops) {
        LoansFactory.getLoanCrops($stateParams.loanID)
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
    }
})();