(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewFinancialsController', function(
      $scope, $state, $stateParams, toastr,
      Loan, AppFactory, FarmersFactory, LoansFactory
    ){
      $scope.loan = Loan.data.data;
      $scope.loan.grade = $scope.loan.grade || 'F';
      $scope.loan.grader = $scope.loan.grader || {
        debt2asset_ratio: 0,
        debt2asset_ratio_adj: 0,
        ratio_current: 0,
        ratio_current_adj: 0,
        capWork: 0,
        capWork_adj: 0,
        capBorrow: 0,
        capBorrow_adj: 0
      };

      var curr = $state.current.url;
      var currScreen = curr.substring(1,curr.length);

      FarmersFactory.getFarmer($scope.loan.farmer_id)
          .then(function success(rsp){
            $scope.farmer = rsp.data.data;
          });

      if(!$scope.loan.fins){
        var newone = {
        loan_id: $stateParams.loanID
      };
        LoansFactory.createFinancials(newone)
          .then(function success(rsp){
            $scope.loans.fins = rsp.data.data;
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
        $scope.loan.grader.debt2asset_ratio = ($scope.loan.fins.total_liability * 1) / ($scope.loan.fins.total_assets * 1) * 100;
        //total liabilities/ total asset_adj
        $scope.loan.grader.debt2asset_ratio_adj = ($scope.loan.fins.total_liability * 1) / ($scope.loan.fins.total_assets_adj * 1) * 100;
        //current asset/current liability
        $scope.loan.grader.ratio_current = ($scope.loan.fins.current_assets / $scope.loan.fins.current_assets_liability) * 100;
        //current asset_adj/liability
        $scope.loan.grader.ratio_current_adj = ($scope.loan.fins.current_assets_adj / $scope.loan.fins.current_assets_liability) * 100;
        //(current asset - current liability) / average expenses
        $scope.loan.grader.capWork = ($scope.loan.fins.current_assets - $scope.loan.fins.current_assets_liability) * 100 / $scope.loan.fins.average_expense;
        // current reserve / average expenses
        $scope.loan.grader.capWork_adj = ($scope.loan.fins.current_assets_reserve / $scope.loan.fins.average_expense) * 100;
        //(total assets - total liabilities) / total assets
        $scope.loan.grader.capBorrow = ((($scope.loan.fins.total_assets * 1) - ($scope.loan.fins.total_liability * 1)) / $scope.loan.fins.total_assets) * 100;
        //total reserve / total assets/adj
        $scope.loan.grader.capBorrow_adj = (($scope.loan.fins.total_reserve * 1) / ($scope.loan.fins.total_assets_adj * 1)) * 100;
        $scope.loan.grade = calcGrade();
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