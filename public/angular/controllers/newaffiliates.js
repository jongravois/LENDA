(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewAffiliatesController', function(
        $scope,
        $stateParams,
        toastr,
        AffiliatesFactory,
        AppFactory,
        LoansFactory
      ){
        $scope.moveFromAffiliates = function(){
          //TODO: Refactor like references
          //TODO: Advances to applicant - wrong!
          if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
            $scope.screens[$scope.currentScreen + 1].status = 1;
            AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
            $scope.currentScreen++;
          } else {
            //TODO: Move to edit.summary
            console.log('End of Screens');
          }
        }
        $scope.newAffilate = function(){
          if(!$scope.affiliates){ $scope.affiliates = []; }
          $scope.newAffiliate.loan_id = $stateParams.loanID;
          AffiliatesFactory.create($scope.newAffiliate)
            .then(function(res){});
          $scope.affiliates.push($scope.newAffiliate);
          $scope.newAffiliate = {};
        }
      });
})();