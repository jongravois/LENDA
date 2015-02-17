(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('FarmerController', FarmerController);

    FarmerController.$inject = ['$scope', '$state', '$stateParams', 'Loan', 'AppFactory', 'FarmersFactory', 'ExceptionsFactory', 'LoansFactory'];

  function FarmerController(
      $scope, $state, $stateParams, Loan,
      AppFactory, FarmersFactory, ExceptionsFactory, LoansFactory
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
        checkExceptions(exp);
        AppFactory.patchIt('/loanfinancials/', $scope.loan.id, {experience: exp});

        // HANDLE CREATING/UPDATING FARMER
        if (angular.isDefined($scope.farmerID) && obj.id === $scope.farmerID) {
          AppFactory.patchIt('/loans/', $stateParams.loanID, {farmer_id: $scope.farmerID});
          AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        } else {
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

      function checkExceptions(experience){
        //TODO: Exception - Previous Loans???
        if(parseInt(experience) == 1){
          ExceptionsFactory.handler($stateParams.loanID, 'firstTimeFarmer', false, {});
        } else if(parseInt(experience) < 4){
          ExceptionsFactory.handler($stateParams.loanID, 'farmerHistory', false, {});
        } // end if
      }
    } // end controller
})();