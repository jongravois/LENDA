(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('CommitteeController', CommitteeController);
  
      CommitteeController.$inject = ['$scope', '$state', '$stateParams', 'Loan', 'AppFactory', 'LoansFactory'];
  
      function CommitteeController(
          $scope, $state, $stateParams,
          Loan, AppFactory, LoansFactory
      ){
        $scope.loan = $scope.loan || Loan.data.data[0];

        LoansFactory.getCommittee($stateParams.loanID)
          .then(function success(rsp){
              $scope.committee = rsp.data.data;
          });
      } // end function
})();