(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('CommitteeController', CommitteeController);
  
      CommitteeController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];
  
      function CommitteeController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          LoansFactory
      ){
        LoansFactory.getCommittee($stateParams.loanID)
          .then(function success(rsp){
              $scope.committee = rsp.data.data;
          });
      } // end function
})();