(function(){
    'use strict';
    angular
      .module("ARM")
      .controller('NewReferencesController', function(
        $scope, $state, $stateParams,
        AppFactory, LoansFactory
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        //alert(currScreen);

        $scope.references = [];

        $scope.moveFromReferences = function(){
          //TODO: Use $stateParams.loantypeID to determine next screen
        }
        $scope.createNewReference = function(o){
          o.loan_id = $stateParams.loanID;
          LoansFactory.createReference(o)
            .then(function(rsp){});
          $scope.references.push(o);
          $scope.newReference = {};
        }
      });
})();