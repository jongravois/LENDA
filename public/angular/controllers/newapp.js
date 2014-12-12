(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewAppController', function(
        $scope,
        $http,
        $state,
        API_URL,
        AppFactory,
        FarmersFactory,
        GlobalsFactory,
        LoansFactory
      ){
        $scope.newapplication = true; //flag for screen buttons

        var obj = {
          app_date: '2014-12-12',
          due_date: '2014-12-12',
          loan_type_id: '2',
          crop_year: '2015',
          season: 'S',
          season_full: 'Spring',
          loc_id: '4',
          region_id: '2',
          user_id: '2'
        };

        LoansFactory.insertLoan(obj).then(function success(response){
          console.log(response);
          $scope.loan = response.data;
        });

        $scope.farmer = $scope.farmer || {};

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