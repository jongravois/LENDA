(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewFinancialsController', function(
      $scope, $state, $stateParams, toastr,
      Loan, AppFactory, FarmersFactory, LoansFactory
    ){
      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);

      $scope.loan = Loan.data.data[0];

      FarmersFactory.getFarmer($scope.loan.farmer_id)
        .then(function success(rsp){
          $scope.farmer = rsp.data.data;
        });

      if(!$scope.loan.fins){
        //TODO: Check and return if exists else make it
        var newone = {
        loan_id: $stateParams.loanID
      };
        LoansFactory.createFinancials(newone)
          .then(function success(rsp){
            $scope.loan.fins = rsp.data.data;
          });
      } // end if

      $scope.calcIncomeConstraints = function(arr){
        var rev = [
          parseFloat(arr.year_1_revenue),
          parseFloat(arr.year_2_revenue),
          parseFloat(arr.year_3_revenue)
        ];
        var sumRev = rev[0] + rev[1] + rev[2];
        var cntRev = _.compact(rev).length;

        var exp = [
          parseFloat(arr.year_1_expenses),
          parseFloat(arr.year_2_expenses),
          parseFloat(arr.year_3_expenses)
        ];
        var sumExp = exp[0] + exp[1] + exp[2];
        var cntExp = _.compact(exp).length;

        $scope.loan.fins.average_revenue = sumRev/cntRev;
        $scope.loan.fins.average_expense = sumExp/cntExp;
        $scope.loan.fins.average_income = $scope.loan.fins.average_revenue - $scope.loan.fins.average_expense;

        //total liabilities/total assets
        $scope.loan.fins.debt2asset_ratio = ($scope.loan.fins.total_liability * 1) / ($scope.loan.fins.total_assets * 1) * 100;
        //total liabilities/ total asset_adj
        $scope.loan.fins.debt2asset_ratio_adj = ($scope.loan.fins.total_liability * 1) / ($scope.loan.fins.total_assets_adj * 1) * 100;
        //current asset/current liability
        $scope.loan.fins.ratio_current = ($scope.loan.fins.current_assets / $scope.loan.fins.current_assets_liability) * 100;
        //current asset_adj/liability
        $scope.loan.fins.ratio_current_adj = ($scope.loan.fins.current_assets_adj / $scope.loan.fins.current_assets_liability) * 100;
        //(current asset - current liability) / average expenses
        $scope.loan.fins.capWork = ($scope.loan.fins.current_assets - $scope.loan.fins.current_assets_liability) * 100 / $scope.loan.fins.average_expense;
        // current reserve / average expenses
        $scope.loan.fins.capWork_adj = ($scope.loan.fins.current_assets_reserve / $scope.loan.fins.average_expense) * 100;
        //(total assets - total liabilities) / total assets
        $scope.loan.fins.capBorrow = ((($scope.loan.fins.total_assets * 1) - ($scope.loan.fins.total_liability * 1)) / $scope.loan.fins.total_assets) * 100;
        //total reserve / total assets/adj
        $scope.loan.fins.capBorrow_adj = (($scope.loan.fins.total_reserve * 1) / ($scope.loan.fins.total_assets_adj * 1)) * 100;
        $scope.loan.fins.grade = calcGrade();
      }

      $scope.getTotalAcres = function(obj){
        return _.reduce(obj, function(tot, obj){
          return tot + parseFloat(obj.acres);
        }, 0);
      };

      $scope.getTotalPCC_AgPro = function(obj) {
        return _.reduce(obj, function (tot, obj) {
          return tot + parseFloat(obj.acres) * parseFloat(obj.crop.tea);
        }, 0);
      }

      $scope.getGrade = function(){
        return calcGrade();
      }

      $scope.insertFin = function(obj) {
        //TODO: persist data
        //TODO: Use Toastr to announce grade before transition
        //obj.loan_id = $stateParams.loanID;
        AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
      }

      var calcGrade = function(){
        return 'F';
      }

    });
})();