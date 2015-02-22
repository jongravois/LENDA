(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('FarmsController', FarmsController);

    FarmsController.$inject = ['$scope', '$state', '$stateParams', 'InitialData', 'AppFactory', 'LoansFactory'];

    function FarmsController(
      $scope, $state, $stateParams,
      InitialData, AppFactory, LoansFactory
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

      $scope.newFarm = $scope.newFarm || {};
      $scope.stateCounties = [];
      $scope.newFarm.irr = $scope.newFarm.irr || 0;
      $scope.newFarm.ni = $scope.newFarm.ni || 0;
      $scope.newFarm.facirr = $scope.newFarm.facirr || 0;
      $scope.newFarm.facni = $scope.newFarm.facni || 0;
      $scope.newFarm.acres = $scope.newFarm.acres || 0;

      if(!$scope.farms){
        LoansFactory.getFarms($stateParams.loanID)
          .then(function success(rsp){
            $scope.farms = rsp.data.data;
          });
      }

      $scope.moveFromFarms = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }

      $scope.onStateChange = function(id){
        //alert(id);
        AppFactory.countiesInState(id)
          .then(function success(rsp){
            $scope.statesCounties = rsp.data.data;
          });
      }

      $scope.onCountySelect = function($item,$model,$label){
        if($item){
          $scope.newFarm.county_id = $item.id;
          $scope.newFarm.locale = $item.locale;
        }
      };

      //TODO: On Screen Move - $scope.loan.farms = $scope.farms???
      $scope.addNewFarm = function(obj){
        if(obj.county != '' || obj.fsn != '') {
          obj.loan_id = $stateParams.loanID;
          obj.acres = ((1 * obj.irr) + (1 * obj.ni) + (1 * obj.facirr) + (1 * obj.facni));
          obj.percent_irrigated = (((1 * obj.irr) + (1 * obj.facirr)) / ((1 * obj.irr) + (1 * obj.ni) + (1 * obj.facirr) + (1 * obj.facni)) * 100);

          if(parseFloat(obj.waived) > 0){
            ExceptionsFactory.handler($stateParams.loanID, 'cashRentWaivers', false, {});
          }

          if(obj.cash_rent == 0 && obj.share == 0){
            ExceptionsFactory.handler($stateParams.loanID, 'rentExpenses', false, {});
          }

          LoansFactory.insertFarm(obj)
            .then(function success(rsp){
              $scope.farms.push(obj);
              $scope.newFarm = {
                irr: 0,
                ni: 0,
                facirr: 0,
                facni: 0,
                acres: 0
              };
            });
        } // end if
      }

    } // end controller function
})();