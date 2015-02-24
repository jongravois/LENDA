(function(){
    'use strict';
  angular
    .module('ARM')
    .controller('PrerequisitesController', PrerequisitesController);

    PrerequisitesController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

    function PrerequisitesController(
      $scope, $state, $stateParams,
      AppFactory, LoansFactory
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);
      $scope.newapplication = $state.current.data.newapplication;

      if( $state.includes('new') ){
        angular.forEach($scope.screens, function(obj, index) {
          if (obj.screen == currScreen) { obj.status = 1; }
        });
      } // end if
      //alert(currScreen);

      LoansFactory.getPrerequisites($stateParams.loanID)
        .then(function success(rsp){
          //console.log(rsp);
          if(rsp.data.length !== 0){
            $scope.docs = rsp.data.data;
          } else {
            $scope.docs = [];
            LoansFactory.getRequiredDocuments($stateParams.loantypeID)
              .then(function success(rsp){
                var docs = rsp.data.data;
                for(var d=0; d<docs.length; d++){
                  var rdoc = {
                    'loan_id': $stateParams.loanID,
                    'document': docs[d]['document']
                  };
                  AppFactory.postIt('/prerequisites', rdoc);
                  $scope.docs.push(rdoc);
                } // end for
              });
          } // end if
        });

      $scope.moveFromDocs = function(){
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }
    } // end controller function
})();