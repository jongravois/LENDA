(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('BudgetsController', BudgetsController);

      BudgetsController.$inject = ['$scope', "$stateParams", "AppFactory", "ExpensesFactory", "LoansFactory"];

      function BudgetsController(
          $scope,
          $stateParams,
          AppFactory,
          ExpensesFactory,
          LoansFactory
      ){
        $scope.loan = $scope.loan || Loan.data.data[0];
        
        LoansFactory.getFarmExpenses($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            $scope.farmExpenses = rsp.data.data;
            $scope.uses = ExpensesFactory.data;
          });

      } // end function
})();