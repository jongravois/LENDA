(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('GrainController', GrainController);

      GrainController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory'];

      function GrainController (
        $scope, $state, $stateParams, AppFactory
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        $scope.newapplication = $state.current.data.newapplication;

        if($scope.newapplication && $scope.screens){
          angular.forEach($scope.screens, function(obj) {
            if (obj.screen == currScreen) { obj.status = 1; }
          });
        }// end if

        $scope.storage = $scope.storage || [];

        $scope.newStorage = {
          contract_date: new Date(),
          grain_buyer: '',
          advance_percent: 75,
          payment_terms: 15,
          amount_requested: 0
        };

        $scope.total_stored = {
          acres: 0,
          revenue: 0,
          eligible: 0,
          remaining: 0
        };

        $scope.newContract = {
          contract_number: '',
          lien_holder: '',
          delivery_due_date: '',
          owner_share: 0.00,
          contract_amount: 0.00,
          uom: 'bu',
          contract_price: 0.0000
        };

        $scope.saveStorageContract = function(){
          var ins = {
            loan_id: $stateParams.loanID,
            contract_number: $scope.newContract.contract_number,
            grain_buyer: $scope.newStorage.grain_buyer,
            lien_holder: $scope.newContract.lien_holder,
            contract_date: $scope.newStorage.contract_date,
            delivery_date: $scope.newContract.delivery_due_date,
            contract_amount: $scope.newContract.contract_amount,
            contract_price: $scope.newContract.contract_price,
            owner_share: $scope.newContract.owner_share,
            revenue: 1 * $scope.newContract.contract_amount * 1 * $scope.newContract.contract_price * (1 - (1 * $scope.newContract.owner_share/100)),
            eligible_proceeds: (1 * $scope.newContract.contract_amount * 1 * $scope.newContract.contract_price * (1 - (1 * $scope.newContract.owner_share/100))) * (1 * ($scope.newStorage.advance_percent/100)),
            advance_percent: $scope.newStorage.advance_percent,
            payment_terms: $scope.newStorage.payment_terms
          };
          $scope.storage.push(ins);
          $scope.total_stored.acres += 1 * ins.contract_amount;
          $scope.total_stored.revenue += 1 * ins.revenue;
          $scope.total_stored.eligible += 1 * ins.eligible_proceeds;
          $scope.total_stored.remaining = (1 * $scope.total_stored.eligible) - $scope.newStorage.amount_requested;
          //TODO: persist data
          $scope.newContract = {
            contract_number: '',
            lien_holder: '',
            delivery_due_date: '',
            owner_share: 0.00,
            contract_amount: 0.00,
            uom: 'bu',
            contract_price: 0.0000
          };
        }


        $scope.insertGrain = function(obj) {
          //obj.loan_id = $stateParams.loanID;
          AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        }
      }
})();