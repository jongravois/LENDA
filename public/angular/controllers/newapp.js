(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewAppController', function(
        $scope,
        $http,
        API_URL,
        AppFactory,
        FarmersFactory,
        LoansFactory
      ){
        var obj = {};
        $scope.newapplication = true; //flag for screen buttons

        // TODO: call AppFactory.getDefaultDueDate('2', '2015) -- loan type and crop_year

        $scope.farmer = $scope.farmer || {};
        $scope.loan = {
          app_date: $scope.globals.today,
          entity_type_id: 2
        };

        if(!$scope.screens){
            LoansFactory.getScreens('2').then(function success(response){
              $scope.screens = response.data.data;
              angular.forEach(response.data.data, function(obj, index){
                //if(obj.screen == 'farmer'){
                  obj.status = 1;
               // } else {
                  //obj.status = 0;
                //}
              });
              return obj;
            });
          } // end if

        /* SCOPE METHODS */
        $scope.onFarmerSelect = function($item,$model,$label){
          if($item){
            $scope.farmer = $item;
          }
        };

        $scope.createFarmer = function(obj) {
          return FarmersFactory.createFarmer(obj)
            .then(function(res){
              $scope.loan.farmer_id = res.data.message;
            });
        };
      });
})();