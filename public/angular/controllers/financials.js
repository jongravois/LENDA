(function(){
    'use strict';
    angular.module('ARM')
      .controller('FinancialsController', function(
        $scope,
        $stateParams,
        API_URL,
        AppFactory,
        LoansFactory
      ){
        $scope.loan = $scope.loan || {};
        $scope.loan.fins = $scope.loan.fins || {};

        $scope.getIncome = function(rev, ex){
          return rev - ex;
        }
        $scope.averageArray = function(arr){
          return AppFactory.averageArray(arr);
        }

        //TODO: hardcoded!
        $scope.loan.fins.totalPCC = 260550 + 261135;
      });
})();