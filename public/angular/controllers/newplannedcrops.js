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
      if( $state.includes('new') ){
        $scope.newapplication == true;
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) { obj.status = 1; }
        });
      } else {
        $scope.newapplication == false;
      }// end if
      //alert(currScreen);

      LoansFactory.getLoanCrops($stateParams.loanID)
        .then(function success(rsp){
          $scope.loanCrops = rsp.data.data;
      });

      $scope.getTotalAcres = function(){
        var obj = $scope.loanCrops;
        return _.reduce(obj, function(tot, obj){
          return tot + parseFloat(obj.acres);
        }, 0);
      };

      $scope.getTotalPCC = function() {
        var obj = $scope.loanCrops;
        return _.reduce(obj, function (tot, obj) {
          return tot + parseFloat(obj.acres) * parseFloat(obj.tea);
        }, 0);
      }

      $scope.insertPlan = function(obj) {
        var acres = 0;
        var value = 0;

        angular.forEach(obj, function(item){
          item.loan_id = $stateParams.loanID;
          AppFactory.putIt('/loancrops/',item.id, item);
          acres = acres + item.acres;
          value = value + (item.acres * item.tea);
        });

        $scope.loan.crops = obj;
        AppFactory.patchIt('/loanfinancials/', $stateParams.loanID, {total_acres: acres, cash_flow: value});

        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();