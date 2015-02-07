(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('UnderwritingController', UnderwritingController);

      UnderwritingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'Loan', 'LoansFactory'];

      function UnderwritingController(
          $scope, $state, $stateParams,
          AppFactory, InsuranceFactory, Loan, LoansFactory
      ){
          $scope.loan = $scope.loan || Loan.data.data[0];
          $scope.insurance = $scope.insurance || InsuranceFactory.data;

          $scope.createCollateralCondition = function(){
              var newCondition = {
                  id: 8,
                  crop_year: $scope.loan.crop_year,
                  loan_id: $stateParams.loanID,
                  condition_id: 9,
                  //condition: $scope.newCondition.condition,
                  status: 'pending',
                  action_date: null
              };
              LoansFactory.createLoanCondition(newCondition);
              $scope.loanConditions.push(newCondition);
          }
      } // end function
})();