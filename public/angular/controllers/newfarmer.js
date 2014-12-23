(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewFarmerController', function(
      $scope,
      $stateParams
    ){
      $scope.farmer = $scope.farmer || {};
      $scope.farmer.loan_id = $stateParams.loanID;

      $scope.onFarmerSelect = function($item,$model,$label){
        if($item){
          $scope.farmerID = $item.id;
          $scope.farmer = $item;
        }
      };
    });
})();