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
        
        ExpensesFactory.getExpenses($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            var raw = rsp.data.data;
            $scope.uses = raw;
            /*$scope.uses = _.map(raw, function(obj){
              obj.peracre = 100000;
              return obj;
            });*/
          });

      } // end function
})();