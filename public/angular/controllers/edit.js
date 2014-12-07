(function(){
    'use strict';
    angular.module('ARM')
      .controller('EditAppController', function($scope){
        $scope.loan = {
          is_cross_collateralized: true,
          has_distributor: true,
          fins: {
            risk: 125000,
            cash_flow: 25000
          }
        };
      });
})();