(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('EditInsuranceController', EditInsuranceController);

      EditInsuranceController.$inject = ['$scope', 'InsuranceFactory'];

      function EditInsuranceController(
          $scope,
          InsuranceFactory
      ){
        //TODO: Add ability to add new insurance policy
        //TODO: Pass loan.id to InsuranceFactory
        $scope.insurance = InsuranceFactory.data;
      } // end function
})();