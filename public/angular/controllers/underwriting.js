(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('UnderwritingController', UnderwritingController);

      UnderwritingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'LoansFactory'];

      function UnderwritingController(
          $scope, $state, $stateParams,
          AppFactory, InsuranceFactory, Loan, LoansFactory
      ){
          $scope.loan = $scope.loan || Loan.data.data[0];
          $scope.insurance = $scope.insurance || InsuranceFactory.data;
      } // end function
})();