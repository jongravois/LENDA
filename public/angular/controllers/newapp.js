(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewAppController', function(
        $scope,
        $http,
        LoansFactory
      ){
        var obj = {};
        $scope.newapplication = true; //flag for screen buttons

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
          $http.get('/api/farmers/' + $item)
            .success(function(farmer){
              //debugger
              angular.forEach(farmer.data, function(object, index){
                if(object.farmer == $item){
                  $scope.farmer = object;
                } // end if
              });
            });
        };
      });
})();