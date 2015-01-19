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
        $scope.loan.insurance = $scope.loan.insurance || {};

        LoansFactory.getInsurancePolicies($stateParams.loanID)
          .then(function success(rsp){
            var policies = rsp.data.data;
            $scope.loan.insurance.policies = policies;
            $scope.loan.insurance.TotalAcres = InsurancesFactory.calcTotalAcres(policies);

          });
      } // end function
})();