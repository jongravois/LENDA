(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('DistributorController', DistributorController);

      DistributorController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

      function DistributorController(
        $scope, $state, $stateParams,
        AppFactory, LoansFactory
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

        if(!$scope.distributor){
          LoansFactory.getDistributor($stateParams.loanID).then(function success(rsp){
            $scope.distributor = rsp.data.data[0];
          });
        }

        $scope.newDistributor = $scope.newDistributor || {};

        $scope.insertDistributor = function(obj) {
          obj.loan_id = $stateParams.loanID;

          LoansFactory.createDistributor(obj);
          AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        }

          $scope.onDistributorSelect = function($item,$model,$label){
          if($item){
            $scope.distributorID = $item.id;
            $scope.newDistributor = $item;
            $scope.$apply();
          }
        };

      }
})();