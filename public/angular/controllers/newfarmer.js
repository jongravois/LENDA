(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewFarmerController', function(
      $scope, $state, $stateParams,
      Loan, AppFactory, FarmersFactory, LoansFactory
    ){
      //TODO: Use Resolve to prevent empty form
      /*$scope.loan = Loan;
      console.log(Loan);
      */
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);

      LoansFactory.getLoan($stateParams.loanID)
        .then(function success(rsp){
          $scope.loan = rsp.data.data;
          if($scope.loan.farmer_id) {
            FarmersFactory.getFarmer($scope.loan.farmer_id)
              .then(function success(rsp) {
                $scope.farmer = rsp.data.data;
              });
          } else {
            $scope.farmer = {};
          } // end if
        });

      $scope.createFarmer = function(obj) {
        if (angular.isDefined($scope.farmerID) && obj.id === $scope.farmerID) {
          AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: $scope.farmerID});
          $state.go('new.applicant', $stateParams);
        } else {
          var thisYear = new Date().getFullYear();
          var exp = AppFactory.diffInDates(thisYear, parseInt(obj.first_year_farmer));
          obj.farm_exp = exp;
          return FarmersFactory.createFarmer(obj)
            .then(function(res){
              AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: res.data.message});
              $state.go('new.applicant', $stateParams);
        });
        } // end if
      }; // end createFarmer function

      $scope.onFarmerSelect = function($item,$model,$label){
        if($item){
          $scope.farmerID = $item.id;
          $scope.farmer = $item;
        }
      };
    });
})();