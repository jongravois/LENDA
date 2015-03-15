(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('FinancialsController', FinancialsController);

    FinancialsController.$inject = ['$scope', '$state', '$stateParams', 'toastr', 'InitialData', 'AppFactory', 'LoansFactory', 'Grader'];

    function FinancialsController($scope, $state, $stateParams, toastr, InitialData, AppFactory, LoansFactory, Grader) {
        var curr = $state.current.url;
        var currScreen = curr.substring(1, curr.length);
        $scope.newapplication = $state.current.data.newapplication;

        if ($scope.newapplication && $scope.screens) {
            angular.forEach($scope.screens, function (obj) {
                if (obj.screen === currScreen) {
                    obj.status = 1;
                }
            });
        }// end if

        $scope.loan = InitialData.data.data[0];
        LoansFactory.getFinancials($stateParams.loanID)
            .then(function success(rsp) {
                $scope.loan.fins = rsp.data.data[0];
                //$scope.$watchCollection('loan.fins', function(newVal, oldVal){
                //$scope.loan.grade = Grader.gradeLoan($scope.loan.fins, $scope.grads);
                //});
            });

        $scope.calcIncomeConstraints = function (arr) {
            var rev = [
                parseFloat(arr.year_1_revenue) || 0,
                parseFloat(arr.year_2_revenue) || 0,
                parseFloat(arr.year_3_revenue) || 0
            ];
            var sumRev = rev[0] + rev[1] + rev[2];
            var cntRev = _.compact(rev).length;

            var exp = [
                parseFloat(arr.year_1_expenses) || 0,
                parseFloat(arr.year_2_expenses) || 0,
                parseFloat(arr.year_3_expenses) || 0
            ];
            var sumExp = exp[0] + exp[1] + exp[2];
            var cntExp = _.compact(exp).length;

            $scope.loan.fins.average_revenue = sumRev / cntRev;
            $scope.loan.fins.average_expense = sumExp / cntExp;
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
        };

        $scope.getTotalAcres = function (obj) {
            return _.reduce(obj, function (tot, obj) {
                return tot + parseFloat(obj.acres);
            }, 0);
        };

        $scope.getTotalPCC_AgPro = function (obj) {
            return _.reduce(obj, function (tot, obj) {
                return tot + parseFloat(obj.acres) * parseFloat(obj.tea);
            }, 0);
        };

        $scope.insertFins = function () {
            //TODO: refactor to FinancialsFactory???
            //TODO: determine if factors differ from defaults; if, loan exception
            var returner = Grader.gradeLoan($scope.loan.fins, $scope.grads);
            $scope.loan.fins.grade = returner.grade;
            switch ($scope.loan.fins.grade) {
                case 'A':
                    toastr.success('Loan Grade: A');
                    break;
                case 'F':
                    toastr.error('Loan Grade: F');
                    break;
                default:
                    toastr.info('Loan Grade: ' + $scope.loan.fins.grade);
                    break;
            } // end switch

            switch (parseInt($scope.loan.loan_type_id)) {
                case 3:
                case 4:
                    // Ag-Pro
                    $scope.loan.fins.max_loan = returner.ag_pro_max_loan;
                    $scope.loan.fins.max_rate = returner.ag_pro_max_rate;
                    $scope.loan.fins.risk_adj = returner.ag_pro_max_loan - $scope.loan.fins.amount_requested;
                    break;
                case 5:
                    // Cap-Bridge
                    $scope.loan.fins.max_loan = returner.capital_bridge_max_loan;
                    $scope.loan.fins.max_rate = returner.caital_bridge_max_rate;
                    $scope.loan.fins.risk_adj = returner.capital_bridge_max_loan - $scope.loan.fins.amount_requested;
                    break;
                case 6:
                    // Ag-Vest
                    $scope.loan.fins.max_loan = returner.ag_vest_max_loan;
                    $scope.loan.fins.max_rate = returner.ag_vest_max_rate;
                    $scope.loan.fins.risk_adj = returner.ag_vest_max_loan - $scope.loan.fins.amount_requested;
                    break;
                default:
                    //TODO: Find out about others not listed and what these values do
                    $scope.loan.fins.max_loan = returner.all_max_loan;
                    $scope.loan.fins.max_rate = 100;
                    $scope.loan.fins.risk_adj = returner.all_max_loan;
                    break;
            } // end switch

            console.log($scope.loan.fins);

            AppFactory.putIt('/loanfinancials/', $stateParams.loanID, $scope.loan.fins);
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };

        $scope.getIncome = function (rev, ex) {
            return rev - ex;
        }; // end function

        $scope.averageArray = function (arr) {
            return AppFactory.averageArray(arr);
        };

        //TODO: hardcoded!
        $scope.loan.fins.totalPCC = 260550 + 261135;
    } // end controller function
})();
