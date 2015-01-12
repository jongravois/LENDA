(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('EditDistributorController', EditDistributorController);

      EditDistributorController.$inject = ['$scope', '$stateParams',
        'LoansFactory'];

      function EditDistributorController(
          $scope,
          $stateParams,
          LoansFactory
      ){
        LoansFactory.getDistributor($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            $scope.distributor = rsp.data.data[0];
          });
      } // end function
})();