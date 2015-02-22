(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('NewQuestsController', function(
        $scope, $state, $stateParams, InitialData,
        AppFactory, LoansFactory, QuestsFactory
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

        $scope.loan = $scope.loan || InitialData.data.data[0];

        $scope.quests = $scope.quests || {};
        LoansFactory.getQuests($stateParams.loanID).then(function success(rsp){
          $scope.quests = rsp.data.data[0];
        });

        $scope.insertQuestions = function(){
          QuestsFactory.update($scope.quests.id, $scope.quests)
            .then(function success(rsp){
              AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
            });
          }
      });
})();