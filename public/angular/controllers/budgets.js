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

            //TODO: Loan Crop Budget Totals

            //TODO: Loan Budget Totals
            $scope.uses.totals = {};

            //TODO: Unique Cats doesn't work
            var uniqExp = _.pluck(arr, 'expense');
            //console.log(arr, uniqExp);
          });

      } // end function
})();