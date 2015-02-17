(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('QuestsController', QuestsController);

      QuestsController.$inject = ['$scope', '$state', '$stateParams', 'Loan', 'AppFactory', 'ExceptionsFactory', 'LoansFactory', 'QuestsFactory'];

      function QuestsController(
        $scope, $state, $stateParams,
        Loan, AppFactory, ExceptionsFactory, LoansFactory, QuestsFactory
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        if( $state.includes('new') ){
          $scope.newapplication == true;
          angular.forEach($scope.screens, function(obj, index) {
            if (obj.screen == currScreen) { obj.status = 1; }
          });
        } else {
          $scope.newapplication == false;
        }// end if
        //alert(currScreen);

        $scope.loan = $scope.loan || Loan.data.data[0];

        if(!$scope.quests){
          LoansFactory.getQuests($stateParams.loanID).then(function success(rsp){
            $scope.quests = rsp.data.data[0];
          });
        }

        $scope.insertQuestions = function(){
          checkExceptions();
          QuestsFactory.update($scope.quests.id, $scope.quests)
            .then(function success(rsp){
              AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
            });
        }

        $scope.updateQuestions = function(){
          checkExceptions();
          AppFactory.putIt('/loanquestions/', $stateParams.loanID, $scope.quests);
        }

        function checkExceptions(){
          ExceptionsFactory.handler($stateParams.loanID, 'bankruptcyHistory', !$scope.quests.bankruptcy, {});
          ExceptionsFactory.handler($stateParams.loanID, 'bankruptcyOrder', $scope.quests.bankruptcyOrder, {});
          ExceptionsFactory.handler($stateParams.loanID, 'cashOutlayProvisions', $scope.quests.other_cash, {});
          ExceptionsFactory.handler($stateParams.loanID, 'contractualObligations', !$scope.quests.future_liabilities, {});
          ExceptionsFactory.handler($stateParams.loanID, 'equipmentObligations', $scope.quests.equip_obligations, {});
          ExceptionsFactory.handler($stateParams.loanID, 'fmaGoodStanding', $scope.quests.fci_good, {});
          ExceptionsFactory.handler($stateParams.loanID, 'fsaGoodStanding', $scope.quests.fsa_good, {});
          ExceptionsFactory.handler($stateParams.loanID, 'harvestOwn', $scope.quests.harvest_own, {});
          ExceptionsFactory.handler($stateParams.loanID, 'isDefendant', !$scope.quests.legal_defendant, {});
          ExceptionsFactory.handler($stateParams.loanID, 'outstandingJudgement', !$scope.quests.judgements, {});
          ExceptionsFactory.handler($stateParams.loanID, 'outstandingLiens', !$scope.quests.liens, {});
          ExceptionsFactory.handler($stateParams.loanID, 'pastDuePremiums', $scope.quests.premiums_past, {});
          ExceptionsFactory.handler($stateParams.loanID, 'plantOwn', $scope.quests.plant_own, {});
          ExceptionsFactory.handler($stateParams.loanID, 'thirdPartyCredit', !$scope.quests.credit_3p_available, {});
        }
      } // end function
})();