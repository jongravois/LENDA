(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('ClosingController', ClosingController);

      ClosingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'InsurancesFactory'];

      function ClosingController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          LoansFactory,
          InsurancesFactory
      ){
        LoansFactory.getInsurancePolicies($stateParams.loanID)
          .then(function success(rsp){
            var policies = rsp.data.data;
            $scope.myAcres = InsurancesFactory.calcTotalAcres(policies);
          });

        /*InsurancesFactory.calcTotalAcres()
          .then(function success(rsp){
              $scope.myAcres = rsp.data.data;
          });*/
      } // end function
})();