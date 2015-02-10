(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('BudgetsController', BudgetsController);

      BudgetsController.$inject = ['$scope', '$stateParams', 'Loan', 'ExpensesFactory'];

      function BudgetsController(
          $scope,
          $stateParams,
          Loan,
          ExpensesFactory
      ){
        $scope.loan = $scope.loan || Loan.data.data[0];

        ExpensesFactory.getBudget($stateParams.loanID)
          .then(function success(rsp){
            var arr = rsp.data;
            var flattened = _.flatten(arr);

            var grped = _.groupBy(flattened, function(item) {
              return item.crop;
            });
            $scope.uses = grped;

            $scope.budget_subtotals = _.map(grped, function (item, key) {
              return item.reduce(function (previous, current) {
                  previous.acres = current.acres;
                  previous.arm += current.arm;
                  previous.dist += current.dist;
                  previous.other += current.other;
                  previous.peracre += current.peracre;
                  previous.calc_arm += current.arm * current.acres;
                  previous.calc_dist += current.dist * current.acres;
                  previous.calc_other += current.other * current.acres;
                  previous.calc_total += current.peracre * current.acres;
                  return previous;
                },
                {crop: key, acres: 0, arm: 0, dist: 0, other: 0, peracre: 0, calc_arm: 0, calc_dist: 0, calc_other: 0, calc_total: 0});
            });

            $scope.budget_totals = $scope.budget_subtotals.reduce(function (previous, current) {
                previous.acres += current.acres;
                previous.arm += current.arm;
                previous.dist += current.dist;
                previous.other += current.other;
                previous.peracre += current.peracre;
                previous.calc_arm += current.arm * current.acres;
                previous.calc_dist += current.dist * current.acres;
                previous.calc_other += current.other * current.acres;
                previous.calc_total += current.peracre * current.acres;
                return previous;
              },
              {acres: 0, arm: 0, dist: 0, other: 0, peracre: 0, calc_arm: 0, calc_dist: 0, calc_other: 0, calc_total: 0});

            var uniqExp = _.uniq(_.pluck(flattened, 'expense'));
            $scope.budget_expCats = uniqExp;
          });

      } // end function
})();