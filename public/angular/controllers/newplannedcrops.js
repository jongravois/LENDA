(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewPlannedCropsController', function(
      $scope, $state, $stateParams,
      AppFactory, LoansFactory
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      //alert(currScreen);

      LoansFactory.getLoanCrops($stateParams.loanID)
        .then(function success(rsp){
          $scope.loanCrops = rsp.data.data;
      });

      $scope.insertPlan = function(obj) {
        angular.forEach(obj, function(item){
          item.loan_id = $stateParams.loanID;
        });
        console.log(obj);
        //AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();