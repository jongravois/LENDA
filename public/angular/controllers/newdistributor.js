(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewDistributorController', function(
        $scope,
        $stateParams,
        toastr,
        AppFactory,
        LoansFactory
      ){
       $scope.newDistributor = {};

        $scope.insertDistributor = function(o){
          o.loan_id = $stateParams.loanID;

          LoansFactory.createDistributor(o);
          toastr.success('Distributor added.', 'Success: Added distributor information.');
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
        $scope.onDistributorSelect = function($item,$model,$label){
          //alert($item.distributor);
          if($item){
            $scope.distributorID = $item.id;
            $scope.newDistributor = $item;
            $scope.$apply();
          }
        };


      });
})();