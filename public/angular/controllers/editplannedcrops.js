(function(){
    'use strict';
    angular.module("ARM")
      .controller('EditPlannedCropsController', function($scope){
        $scope.plannedcrops = {
          "loan": {
            "crops": {
              "corn": {
                "is_active": false,
                "acres": 0,
                "tea": 750,
                "total": 0
              },
              "beans": {
                "is_active": false,
                "acres": 0,
                "tea": 450,
                "total": 0
              },
              "sorghum": {
                "is_active": false,
                "acres": 0,
                "tea": 375,
                "total": 0
              },
              "wheat": {
                "is_active": false,
                "acres": 0,
                "tea": 360,
                "total": 0
              },
              "cotton": {
                "is_active": false,
                "acres": 0,
                "tea": 540,
                "total": 0
              },
              "rice": {
                "is_active": false,
                "acres": 0,
                "tea": 750,
                "total": 0
              },
              "peanuts": {
                "is_active": false,
                "acres": 0,
                "tea": 750,
                "total": 0
              },
              "cane": {
                "is_active": false,
                "acres": 0,
                "tea": 750,
                "total": 0
              }
            }
          }
        };
      });
})();