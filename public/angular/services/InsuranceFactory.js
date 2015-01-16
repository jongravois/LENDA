(function(){
    'use strict';
    angular.module('ARM')
        .factory('InsurancesFactory', function InsurancesFactory($q, $stateParams, LoansFactory){
/*
 ok, I have a long list of loans and their edit screen are found at domain/edit/17/screenname, and I harvest that $stateParam of loanID in a factory, hit the API and grab all of the, let's say, applicable insurance policies from the database. I expose the 12-14 necessary calculations via the factory and since the promise is already resolved, I just direct assign the value in the controller. Even though factories run once and persist, when the user changes to another loan, the factory will perform its calculations for the new loan?
 */
          var policies = [];
          var total_acres = 0;
          var crop_acres = [];

          return {
            calcTotalAcres: calcTotalAcres
          };

          LoansFactory.getInsurancePolicies($stateParams.loanID)
              .then(function success(rsp){
                policies = rsp.data.data;
                total_acres = _.reduce(policies, function(sum, obj){
                  return sum + obj.acres;
                }, 0);


              });

          function calcTotalAcres(){
            return total_acres;
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