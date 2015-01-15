(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('EditOptimizerController', EditOptimizerController);

      EditOptimizerController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

      function EditOptimizerController(
          $scope,
          $state,
          $stateParams,
          AppFactory,
          LoansFactory
      ){
        LoansFactory.getFarmPractices($stateParams.loanID)
          .then(function success(rsp){
              $scope.farmPractices = rsp.data.data;
          });
      } // end function
})();