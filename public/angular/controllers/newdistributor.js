(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('NewDistributorController', function(
        $scope, $state, $stateParams,
        AppFactory, LoansFactory
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        //alert(currScreen);

        if(!$scope.newDistributor){
          LoansFactory.getDistributor($stateParams.loanID).then(function success(rsp){
            $scope.newDistributor = rsp.data.data[0];
          });
        }

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

      });
})();