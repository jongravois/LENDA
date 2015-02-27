(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('SummaryController', SummaryController);
      SummaryController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];
      function SummaryController(
        $scope, $state, $stateParams,
        AppFactory, LoansFactory
      ){
        if(parseInt($stateParams.loantypeID) == 7) {
          //GRAIN STORAGE
          LoansFactory.getStorage($stateParams.loanID)
            .then(function success(rsp) {
              $scope.storage = rsp.data.data;
              var sto = $scope.storage;
              var suma = AppFactory.sumThese;
              var totalRevenue = _.pluck(sto, 'revenue').reduce(suma);
              var totalEligible = _.pluck(sto, 'eligible_proceeds').reduce(suma);
              $scope.total_stored = {
                acres: _.pluck(sto, 'contract_amount').reduce(suma),
                revenue: totalRevenue,
                eligible: totalEligible,
                remaining: parseFloat(totalEligible) - parseFloat($scope.loan.fins.amount_requested)
              };
            });
        } // end if
      } // end controller
})();