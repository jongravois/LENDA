(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewFarmerController', function(
      $scope, $state, $stateParams, Loan,
      AppFactory, FarmersFactory, ExceptionsFactory, LoansFactory
    ){
      $scope.loan = $scope.loan || Loan.data.data[0];

      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);

      if($scope.loan.farmer_id) {
        FarmersFactory.getFarmer($scope.loan.farmer_id)
          .then(function success(rsp) {
            $scope.farmer = rsp.data.data;
          });
      } else {
        $scope.farmer = {
          new_client: true
        };
      } // end if

      $scope.createFarmer = function(obj) {
        var thisYear = new Date().getFullYear();
        var exp = AppFactory.diffInDates(thisYear, parseInt(obj.first_year_farmer));
        AppFactory.patchIt('/loanfinancials/', $scope.loan.id, {experience: exp});

        // HANDLE CREATING/UPDATING FARMER
        if (angular.isDefined($scope.farmerID) && obj.id === $scope.farmerID) {
          AppFactory.patchIt('/loans/', $stateParams.loanID, {farmer_id: $scope.farmerID});
          AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        } else {
          var thisYear = new Date().getFullYear();
          var exp = AppFactory.diffInDates(thisYear, parseInt(obj.first_year_farmer));
          obj.farm_exp = exp;
          return FarmersFactory.createFarmer(obj)
            .then(function(res){
              AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: res.data.message});
              AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
          });
        } // end if
      }; // end createFarmer function

      $scope.onFarmerSelect = function($item,$model,$label){
        if($item){
          $scope.farmerID = $item.id;
          $scope.farmer = $item;
          $scope.farmer.new_client = false;
        }
      };
    });
})();