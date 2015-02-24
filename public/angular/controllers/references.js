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
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        if( $state.includes('new') ){
          $scope.newapplication == true;
          angular.forEach($scope.screens, function(obj, index) {
            if (obj.screen == currScreen) { obj.status = 1; }
          });
        } else {
          $scope.newapplication == false;
        }// end if
        //alert(currScreen);

        if(!$scope.references) {
          LoansFactory.getReferences($stateParams.loanID)
            .then(function success(rsp) {
              $scope.references = rsp.data.data;
            });
        }

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
      } // end function
})();