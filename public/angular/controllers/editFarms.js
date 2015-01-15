(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('EditFarmsController', EditFarmsController);

      EditFarmsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

      function EditFarmsController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          LoansFactory
      ){
        LoansFactory.getFarms($stateParams.loanID)
          .then(function success(rsp){
              $scope.farms = rsp.data.data;
          });
      } // end function
})();