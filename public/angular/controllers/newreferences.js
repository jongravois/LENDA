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
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) {
            obj.status = 1;
          }
        });
        //alert(currScreen);

        $scope.references = [];

        $scope.moveFromReferences = function(){
          AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
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