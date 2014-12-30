(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewInsuranceController', function(
      $scope,
      $stateParams,
      toastr,
      AppFactory,
      LoansFactory
    ){
      var idLoan = $stateParams.loanID;
      $scope.loan = $scope.loan || {};
      $scope.insurance = $scope.insurance || [];
      $scope.newInsurance = {};

      $scope.onAgencySelect = function($item,$model,$label){
        if($item){
          AppFactory.agentsInAgency($item.id).then(function success(response){
                  $scope.agencyAgents = response.data.data;
                });
        }
      };

      $scope.onAgentSelect = function($item,$model,$label){
        if($item){
          console.log($scope.newInsurance);
        }
      };

    });
})();