(function(){
    'use strict';
    angular.module("ARM")
      .controller('NewReferencesController', function(
        $scope,
        $stateParams,
        toastr,
        AppFactory,
        LoansFactory
      ){
        $scope.references = [];

        $scope.moveFromReferences = function(){
          if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
            $scope.screens[$scope.currentScreen + 1].status = 1;
            AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
            $scope.currentScreen++;
          } else {
            //TODO: Move to edit.summary
            console.log('End of Screens');
          }
        }
        $scope.createNewReference = function(o){
          o.loan_id = $stateParams.loanID;
          LoansFactory.createReference(o)
            .then(function(res){});
          $scope.references.push(o);
          $scope.newReference = {};
        }
      });
})();