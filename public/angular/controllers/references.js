(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('ReferencesController', ReferencesController);
  
      ReferencesController.$inject = ['$scope', '$stateParams', 'LoansFactory'];
  
      function ReferencesController(
          $scope,
          $stateParams,
          LoansFactory
      ){
        //TODO: Need to code update functionality

        LoansFactory.getReferences($stateParams.loanID)
          .then(function success(rsp){
              $scope.references = rsp.data.data;
          });
      } // end function
})();