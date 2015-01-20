(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('UnderwritingController', UnderwritingController);

      UnderwritingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'LoansFactory'];

      function UnderwritingController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          InsuranceFactory,
          LoansFactory
      ){
          $scope.insurance = $scope.insurance || InsuranceFactory.data;
      } // end function
})();