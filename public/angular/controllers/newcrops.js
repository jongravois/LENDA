(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewCropsController', function($scope){
      init();

      $scope.createLoanCrops = function(){
        alert('Do Something');
      }

      //TODO: Hard Coded!
      function init(){
        $scope.corn = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.soybeans = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.sorghum = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.wheat = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.cotton = {
          uom: 'lb',
          uom_rebate: 'lb'
        };
        $scope.rice = {
          uom: 'lb',
          uom_rebate: 'bu'
        };
        $scope.peanuts = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.sugarcane = {
          uom: 'bu',
          uom_rebate: 'ton'
        };
      }
    });
})();