(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewQuestsController', function(
        $scope,
        $stateParams,
        toastr,
        AppFactory,
        LoansFactory,
        QuestsFactory
      ){
          $scope.quests = $scope.quests || {};
          LoansFactory.getQuests($stateParams.loanID).then(function success(response){
                  $scope.quests = response.data.data[0];
              });

          $scope.insertQuestions = function(){
              alert($scope.loan.id);
          }
          $scope.updateQuestions = function(){
              QuestsFactory.update($scope.quests.id, $scope.quests)
                .then(function success(response){
                    toastr.success('The Loan Questions have been updated.', 'Successful Update');
                    //TODO: Quests not moving???
                    if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
                      $scope.screens[$scope.currentScreen + 1].status = 1;
                      AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
                      $scope.currentScreen++;
                    } else {
                        //TODO: Move to edit.summary
                        console.log('End of Screens');
                    }
                });
          }
      });
})();