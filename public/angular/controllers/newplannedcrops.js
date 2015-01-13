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

      $scope.getTotalAcres = function(obj){
        return _.reduce(obj, function(tot, obj){
          return tot + parseFloat(obj.acres);
        }, 0);
      };

      $scope.getTotalPCC_AgPro = function(obj) {
        return _.reduce(obj, function (tot, obj) {
          return tot + parseFloat(obj.acres) * parseFloat(obj.crop.tea);
        }, 0);
      }

      $scope.insertPlan = function(obj) {
        angular.forEach(obj, function(item){
          item.loan_id = $stateParams.loanID;
          AppFactory.putIt('/loancrops/',item.id, item);
        });

        $scope.loan.crops = obj;

        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    });
})();