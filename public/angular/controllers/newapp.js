(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewAppController', function(
        $scope,
        $http,
        $state,
        $stateParams,
        API_URL,
        AppFactory,
        FarmersFactory,
        GlobalsFactory,
        LoansFactory
      ){
        $scope.newapplication = true; //flag for screen buttons
        $scope.currentScreen = 0;
        LoansFactory.getLoan($stateParams.loanID).then(function(response) {
          $scope.loan = response.data.data;
        });

        $scope.farmer = $scope.farmer || {};

        if(!$scope.screens){
            LoansFactory.getScreens($stateParams.loantypeID).then(function success(response){
              $scope.screens = response.data.data;
              angular.forEach($scope.screens, function(obj, index){
                if(obj.screen == 'farmer'){
                  obj.status = 1;
               } else {
                  obj.status = 0;
                }
              });
            });
          } // end if

        /* SCOPE METHODS */
        $scope.onFarmerSelect = function($item,$model,$label){
          if($item){
            $scope.farmerID = $item.id;
            $scope.farmer = $item;
          }
        };

        $scope.createFarmer = function(obj) {
          if (angular.isDefined($scope.farmerID) && obj.id === $scope.farmerID) {
            //TODO: patch farmer_id in loan in DB


          } else {
            return FarmersFactory.createFarmer(obj)
              .then(function(res){
                //TODO: patch farmer_id in loan in DB
                $scope.loan.farmer_id = res.data.message;
                if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
                  //$scope.screens[$scope.currentScreen].status = 0;
                  $scope.screens[$scope.currentScreen + 1].status = 1;
                  AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
                }
              });
          }

        };
      })
      .controller('NewApplicantController', function($scope,ApplicantsFactory, AppFactory){
        $scope.createApplicant = function() {
          ApplicantsFactory.createApplicant();
        };
      });
})();