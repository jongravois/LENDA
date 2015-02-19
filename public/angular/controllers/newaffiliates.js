(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('NewAffiliatesController', function(
        $scope, $state, $stateParams,
        AppFactory, LoansFactory
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

        $scope.moveFromAffiliates = function(){
          AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        }
        $scope.newAffiliate = function(){
          if(!$scope.affiliates){ $scope.affiliates = []; }
          $scope.newAffiliate.loan_id = $stateParams.loanID;
          LoansFactory.createAffiliate($scope.newAffiliate)
            .then(function(rsp){});
          $scope.affiliates.push($scope.newAffiliate);
          $scope.newAffiliate = {};
        }
      });
})();