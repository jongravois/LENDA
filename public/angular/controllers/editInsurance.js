(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('EditInsuranceController', EditInsuranceController);

      EditInsuranceController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

      function EditInsuranceController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          LoansFactory
      ){
        LoansFactory.getInsurancePolicies($stateParams.loanID)
          .then(function success(rsp){
              $scope.loan.insurance = rsp.data.data;
          });
      } // end function
})();