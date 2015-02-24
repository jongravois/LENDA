(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('OptimizerController', OptimizerController);

      OptimizerController.$inject = ['$scope', '$state', '$stateParams', 'InitialData', 'AppFactory', 'LoansFactory'];

      function OptimizerController(
          $scope, $state, $stateParams,
          InitialData, AppFactory, LoansFactory
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

        $scope.loan = $scope.loan || InitialData.data.data[0];

        LoansFactory.getFarmPractices($stateParams.loanID)
          .then(function success(rsp){
              $scope.farmPractices = rsp.data.data;
          });
      } // end function
})();