(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('ClosingController', ClosingController);

      ClosingController.$inject = ['$scope', '$state', '$stateParams', 'Loan', 'AppFactory', 'LoansFactory', 'InsurancesFactory'];

      function ClosingController(
          $scope,
          $state,
          $stateParams,
          Loan,
          AppFactory,
          LoansFactory,
          InsurancesFactory
      ){
        $scope.loan = $scope.loan || Loan.data.data[0];

        LoansFactory.getInsurancePolicies($stateParams.loanID)
          .then(function success(rsp){
            var policies = rsp.data.data;
            //$scope.loan.ins.TotalAcres = InsurancesFactory.calcTotalAcres(policies);
            $scope.loan.insurance = policies;
          });
      } // end function
})();