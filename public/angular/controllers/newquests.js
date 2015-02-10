(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('NewQuestsController', function(
        $scope, $state, $stateParams, Loan,
        AppFactory, LoansFactory, QuestsFactory
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) {
            obj.status = 1;
          }
        });
        //alert(currScreen);

        $scope.loan = $scope.loan || Loan.data.data[0];

        $scope.quests = $scope.quests || {};
        LoansFactory.getQuests($stateParams.loanID).then(function success(rsp){
          $scope.quests = rsp.data.data[0];
        });

        $scope.updateQuestions = function(){
          QuestsFactory.update($scope.quests.id, $scope.quests)
            .then(function success(rsp){
              AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
            });
          }
      });
})();