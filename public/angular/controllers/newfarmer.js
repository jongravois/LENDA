(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewFarmerController', function(
      $scope,
      $stateParams,
      toastr,
      AppFactory,
      FarmersFactory
    ){
      $scope.farmer = $scope.farmer || {};
      $scope.farmer.loan_id = $stateParams.loanID;

      $scope.createFarmer = function(obj) {
        if (angular.isDefined($scope.farmerID) && obj.id === $scope.farmerID) {
          AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: $scope.farmerID});
          if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
            $scope.screens[$scope.currentScreen + 1].status = 1;
            AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
            $scope.currentScreen++;
          } else {
            //TODO: Move to edit.summary
            console.log('End of Screens');
          }
        } else {
          var thisYear = new Date().getFullYear();
          var exp = AppFactory.diffInDates(thisYear, parseInt(obj.first_year_farmer));
          obj.farm_exp = exp;
          return FarmersFactory.createFarmer(obj)
            .then(function(res){
              AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: res.data.message});
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
      };

      $scope.onFarmerSelect = function($item,$model,$label){
        if($item){
          $scope.farmerID = $item.id;
          $scope.farmer = $item;
        }
      };
    });
})();