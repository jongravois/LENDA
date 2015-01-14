(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('NewTermsController', NewTermsController);
  
      NewTermsController.$inject = ['$scope',  '$state', '$stateParams'];
  
      function NewTermsController(
          $scope,
          $state,
          $stateParams
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        //alert(currScreen);

        //TODO: total loan process & service default to true

        //TODO: default all to globals -- lenda, if changed

        //TODO: watch due_date and patch to loans on change -- lenda, if changed

        //TODO: if !processing_fee, processing_fee = 330

        $scope.insertTerms = function(){
          //TODO: if !commit_arm, commit_arm = amount_requested
          //TODO: persist data
          //AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        }
      } // end function
})();