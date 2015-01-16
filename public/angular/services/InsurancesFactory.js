(function(){
    'use strict';
    angular.module('ARM')
        .factory('InsurancesFactory', function InsurancesFactory($q, $stateParams, LoansFactory){

        return {
          calcTotalAcres: calcTotalAcres
        };

        function calcTotalAcres(obj){
          return _.reduce(obj, function(sum, o){
            return sum + o.acres;
          }, 0);
        }


          /*
           // TODO: Factor in changing from RP ins_type
           // TODO: Check value and guaranty calculation
           // is aph and ins_yield the same
           $scope.calcGuaranty = function ($arr) {
           //TODO: calculate the percentage of farm_acre/total_acres

           //TODO: calculate weighted average of aph
           //=(28/347.4*96+90*130/347.4+48.4*149/347.4+181/347.4*141)
           //acres/total_acres * aph -- rinse and repeat

           //TODO: loop and total
           //return ($arr['level'] / 100) * $arr['aph'] * $arr['price'];
           return ($arr['level'] / 100) * ($arr['aph'] * 28/347.4) * $arr['price'];
           };
           $scope.calcValue = function ($guaranty, $arr) {
           return ($guaranty - $arr['premium']) * ($arr['share'] / 100) * $arr['acres'];
           };
           //  TODO: Create calcTotalValue Function
           $scope.calcTotalValue = function () {
           //TOTAL INSURANCE VALUE
           return 39549017.29;
           };
           */

      }); // end factory
})();