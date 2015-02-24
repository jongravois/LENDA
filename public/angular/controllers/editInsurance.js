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
        $scope.addNewOne = false;
        $scope.insurance = InsuranceFactory.data;

        $scope.agencies = [
          //TODO: load agencies
          {agency: 'Rayville State Farm', address: '1 Good Neighbor Road', city: 'Rayville', state: 'LA', zip: '72132', phone: '3185551212', email: 'rsfarm@statefarm.org', agent: 'James Bond', agent_email: '007@hermagestyservices.org', agent_phone: '3184883988', isOpen: true},
          {agency: 'Jack Daniels Mutual of Omaha', address: '1 Sipping Good Road', city: 'Delhi', state: 'LA', zip: '72132', phone: '3188881020', email: 'jddelhi@mutualofomaha.org', agent: 'Jason Bourne', agent_email: 'meds@treadstone.org', agent_phone: '3184569010', isOpen: false}
        ];

        $scope.ins_sum = [
          {
            crop: 'Corn',
            type: 'RP',
            option: 'EU',
            price: 4.25,
            level: 75,
            guarantee: 431.34,
            premium: 11.88,
            share: 84,
            value: 122985.31,
            risk: 40,
            cash_flow: 300
          },
          {
            crop: 'Soybeans',
            type: 'RP',
            option: 'EU',
            price: 11.25,
            level: 75,
            guarantee: 305.83,
            premium: 14.35,
            share: 80.7,
            value: 136480.66,
            risk: 28,
            cash_flow: -10
          },
          {
            crop: 'Sorghum',
            type: 'RP',
            option: 'EU',
            price: 4.00,
            level: 75,
            guarantee: 0,
            premium: 20.00,
            share: 100,
            value: 0,
            risk: 0,
            cash_flow: 0
          },
          {
            crop: 'Wheat',
            type: 'RP',
            option: 'EU',
            price: 6.64,
            level: 75,
            guarantee: 0,
            premium: 20.00,
            share: 100,
            value: 0,
            risk: 0,
            cash_flow: 0
          },
          {
            crop: 'Cotton',
            type: 'RP',
            option: 'EU',
            price: 0.70,
            level: 75,
            guarantee: 0,
            premium: 20.00,
            share: 100,
            value: 0,
            risk: 0,
            cash_flow: 0
          },
          {
            crop: 'Rice',
            type: 'RP',
            option: 'EU',
            price: 0.140,
            level: 75,
            guarantee: 0,
            premium: 20.00,
            share: 100,
            value: 0,
            risk: 0,
            cash_flow: 0
          },
          {
            crop: 'Peanuts',
            type: 'RP',
            option: 'EU',
            price: 2.30,
            level: 75,
            guarantee: 0,
            premium: 20.00,
            share: 100,
            value: 0,
            risk: 0,
            cash_flow: 0
          },
          {
            crop: 'Sugar Cane',
            type: 'RP',
            option: 'EU',
            price: 0.28,
            level: 75,
            guarantee: 0,
            premium: 20.00,
            share: 100,
            value: 0,
            risk: 0,
            cash_flow: 0
          }
        ];

        $scope.toggleAddNewOne = function(){
          $scope.addNewOne = !$scope.addNewOne;
        }
      } // end function
})();