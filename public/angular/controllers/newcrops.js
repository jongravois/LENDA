(function(){
  'use strict';
  angular.module('ARM')
    .controller('NewCropsController', function(
      $scope,
      $stateParams,
      LoansFactory
    ){
      init();

      $scope.createLoanCrops = function(){
        //TODO: Prevent multiple submission
        //TODO: Refactor
        var CY = $scope.globals.crop_year;
        var idLoan = $stateParams.loanID;
        if($scope.corn.is_active){
          var newCorn = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 1,
            is_active: $scope.corn.is_active,
            markettowhom: $scope.corn.markettowhom,
            bkqty: $scope.corn.bkqty,
            bkprice: $scope.corn.bkprice,
            harvest: $scope.corn.harvest,
            uom: $scope.corn.uom,
            gin_mill: $scope.corn.gin_mill,
            rebates: $scope.corn.rebates,
            uom_rebate: $scope.corn.uom_rebate
          };
          
          LoansFactory.insertLoanCrop(newCorn);
        }
        if($scope.soybeans.is_active){
          var newSoybeans = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 2,
            is_active: $scope.soybeans.is_active,
            markettowhom: $scope.soybeans.markettowhom,
            bkqty: $scope.soybeans.bkqty,
            bkprice: $scope.soybeans.bkprice,
            harvest: $scope.soybeans.harvest,
            uom: $scope.soybeans.uom,
            gin_mill: $scope.soybeans.gin_mill,
            rebates: $scope.soybeans.rebates,
            uom_rebate: $scope.soybeans.uom_rebate
          };

          LoansFactory.insertLoanCrop(newSoybeans);
        }
        if($scope.sorghum.is_active){
          var newSorghum = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 3,
            is_active: $scope.sorghum.is_active,
            markettowhom: $scope.sorghum.markettowhom,
            bkqty: $scope.sorghum.bkqty,
            bkprice: $scope.sorghum.bkprice,
            harvest: $scope.sorghum.harvest,
            uom: $scope.sorghum.uom,
            gin_mill: $scope.sorghum.gin_mill,
            rebates: $scope.sorghum.rebates,
            uom_rebate: $scope.sorghum.uom_rebate
          };

          LoansFactory.insertLoanCrop(newSorghum);
        }
        if($scope.wheat.is_active){
          var newWheat = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 4,
            is_active: $scope.wheat.is_active,
            markettowhom: $scope.wheat.markettowhom,
            bkqty: $scope.wheat.bkqty,
            bkprice: $scope.wheat.bkprice,
            harvest: $scope.wheat.harvest,
            uom: $scope.wheat.uom,
            gin_mill: $scope.wheat.gin_mill,
            rebates: $scope.wheat.rebates,
            uom_rebate: $scope.wheat.uom_rebate
          };

          LoansFactory.insertLoanCrop(newWheat);
        }
        if($scope.cotton.is_active){
          var newCotton = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 5,
            is_active: $scope.cotton.is_active,
            markettowhom: $scope.cotton.markettowhom,
            bkqty: $scope.cotton.bkqty,
            bkprice: $scope.cotton.bkprice,
            harvest: $scope.cotton.harvest,
            uom: $scope.cotton.uom,
            gin_mill: $scope.cotton.gin_mill,
            rebates: $scope.cotton.rebates,
            uom_rebate: $scope.cotton.uom_rebate
          };

          LoansFactory.insertLoanCrop(newCotton);
        }
        if($scope.rice.is_active){
          var newRice = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 6,
            is_active: $scope.rice.is_active,
            markettowhom: $scope.rice.markettowhom,
            bkqty: $scope.rice.bkqty,
            bkprice: $scope.rice.bkprice,
            harvest: $scope.rice.harvest,
            uom: $scope.rice.uom,
            gin_mill: $scope.rice.gin_mill,
            rebates: $scope.rice.rebates,
            uom_rebate: $scope.rice.uom_rebate
          };

          LoansFactory.insertLoanCrop(newRice);
        }
        if($scope.peanuts.is_active){
          var newPeanuts = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 7,
            is_active: $scope.peanuts.is_active,
            markettowhom: $scope.peanuts.markettowhom,
            bkqty: $scope.peanuts.bkqty,
            bkprice: $scope.peanuts.bkprice,
            harvest: $scope.peanuts.harvest,
            uom: $scope.peanuts.uom,
            gin_mill: $scope.peanuts.gin_mill,
            rebates: $scope.peanuts.rebates,
            uom_rebate: $scope.peanuts.uom_rebate
          };

          LoansFactory.insertLoanCrop(newPeanuts);
        }
        if($scope.sugarcane.is_active){
          var newSugarcane = {
            crop_year: CY,
            loan_id: idLoan,
            crop_id: 8,
            is_active: $scope.sugarcane.is_active,
            markettowhom: $scope.sugarcane.markettowhom,
            bkqty: $scope.sugarcane.bkqty,
            bkprice: $scope.sugarcane.bkprice,
            harvest: $scope.sugarcane.harvest,
            uom: $scope.sugarcane.uom,
            gin_mill: $scope.sugarcane.gin_mill,
            rebates: $scope.sugarcane.rebates,
            uom_rebate: $scope.sugarcane.uom_rebate
          };

          LoansFactory.insertLoanCrop(newSugarcane);
        }
      }

      //TODO: Hard Coded!
      function init(){
        $scope.corn = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.soybeans = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.sorghum = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.wheat = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.cotton = {
          uom: 'lb',
          uom_rebate: 'lb'
        };
        $scope.rice = {
          uom: 'lb',
          uom_rebate: 'bu'
        };
        $scope.peanuts = {
          uom: 'bu',
          uom_rebate: 'bu'
        };
        $scope.sugarcane = {
          uom: 'bu',
          uom_rebate: 'ton'
        };
      }
    });
})();