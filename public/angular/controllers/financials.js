(function(){
    'use strict';
    angular.module('ARM')
      .controller('FinancialsController', function(
        $scope
      ){
        //TODO: hardcoded!
        $scope.loan.fins.totalPCC = 260550 + 261135;
        $scope.calcIncomeConstraints =function(o){
          $scope.loan.fins.year_1_income = o.year_1_revenue - o.year_1_expenses;
          $scope.loan.fins.year_2_income = o.year_2_revenue - o.year_2_expenses;
          $scope.loan.fins.year_3_income = o.year_3_revenue - o.year_3_expenses;
          $scope.loan.fins.average_revenue = (o.year_1_revenue * 1 + o.year_2_revenue * 1 + o.year_3_revenue * 1)/3;
          $scope.loan.fins.average_expense = (o.year_1_expenses * 1 + o.year_2_expenses * 1 + o.year_3_expenses * 1)/3;
          $scope.loan.fins.total_income = $scope.loan.fins.average_revenue - $scope.loan.fins.average_expense;
        };
      });
})();