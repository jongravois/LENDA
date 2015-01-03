(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewFarmsController', function(
      $scope,
      $stateParams,
      toastr,
      AppFactory,
      LoansFactory
    ){
      var idLoan = $stateParams.loanID;
      $scope.loan = $scope.loan || {};
      $scope.farms = $scope.farms || [];
      $scope.newFarm = {};
      $scope.stateCounties = [];

      $scope.onStateChange = function(id){
        //alert(id);
        AppFactory.countiesInState(id).then(function success(response){
          $scope.statesCounties = response.data.data;
        });
      }

      $scope.onCountySelect = function($item,$model,$label){
        if($item){
          $scope.newFarm.county_id = $item.id;
          $scope.newFarm.locale = $item.locale;
        }
      };

      //TODO: Prevent empty records from being submitted
      //TODO: On Screen Move - $scope.loan.farms = $scope.farms???
      $scope.addNewFarm = function(obj){
        obj.loan_id = idLoan;
        LoansFactory.insertFarm(obj).then(function success(response){
          $scope.farms.push(obj);
          $scope.newFarm = {};
        });
      }
    });
})();