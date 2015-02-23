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

        $scope.agencies = [
          {agency: 'Rayville State Farm', address: '1 Good Neighbor Road', city: 'Rayville', state: 'LA', zip: '72132', phone: '3185551212', email: 'rsfarm@statefarm.org'}
        ];
      } // end function
})();