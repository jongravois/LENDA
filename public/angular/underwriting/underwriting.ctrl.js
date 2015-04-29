(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('UnderwritingController', UnderwritingController);

    UnderwritingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'AddendumsFactory', 'LoansFactory'];

    function UnderwritingController($scope, $state, $stateParams, AppFactory, InsuranceFactory, AddendumsFactory, LoansFactory) {
        $scope.loan.fins.disc_prod_percent = $scope.loan.fins.disc_prod_percent|| $scope.globals.projected_crops_discount_rate;
        $scope.loan.fins.fsa_assignment_percent = $scope.loan.fins.fsa_assignment_percent|| $scope.globals.fsa_assignment_discount_rate;
        $scope.loan.fins.disc_ins_percent = $scope.loan.fins.disc_ins_percent|| $scope.globals.ins_discount_rate;
        //$scope.loan.fins.fsa_assignment_percent = $scope.loan.fins.fsa_assignment_percent|| $scope.globals.fsa_assignment_discount_rate;
        //$scope.loan.fins.fsa_assignment_percent = $scope.loan.fins.fsa_assignment_percent|| $scope.globals.fsa_assignment_discount_rate;
        $scope.loan.fins.equipment_percent = $scope.loan.fins.equipment_percent|| $scope.globals.equipment_discount_rate;
        $scope.loan.fins.realestate_percent = $scope.loan.fins.realestate_percent|| $scope.globals.realestate_discount_rate;
        $scope.loan.fins.claims_percent = $scope.loan.fins.claims_percent|| $scope.globals.claims_discount_rate;
        //$scope.loan.fins.other_collateral_percent = $scope.loan.fins.other_collateral_percent|| $scope.globals.other_collateral_discount_rate;

        $scope.newCondition = {
            crop_year: $scope.loan.crop_year,
            loan_id: $stateParams.loanID,
            condition_id: 9,
            condition: '',
            status: 'pending',
            action_date: null
        };

        if($scope.loan.has_addendum){
            AddendumsFactory.getLoanAddendums($scope.loan.id)
                .then(function success(rsp){
                    $scope.addendums = rsp.data.data;
                });
        }

        $scope.verifyCondition = function (index) {
            //TODO: Confirm dialog to ensure intent
            var o = $scope.loanConditions[index];
            o.status = 'verified';
            o.action_date = moment().format('YYYY-MM-DD');
            AppFactory.putIt('/loanconditions/', o.id, o)
                .then(function success(rsp) {
                    o.action_date = moment().format('MM/DD/YYYY');
                    $scope.loanConditions[index] = o;
                });
        };

        $scope.createCollateralCondition = function () {
            if ($scope.newCondition.condition.length > 0) {
                LoansFactory.createLoanCondition($scope.newCondition).then(function success(rsp) {
                    $scope.newCondition.id = rsp.data.message;
                    $scope.loanConditions.push($scope.newCondition);
                    $scope.newCondition = {
                        crop_year: $scope.loan.crop_year,
                        loan_id: $stateParams.loanID,
                        condition_id: 9,
                        condition: '',
                        status: 'pending',
                        action_date: null
                    };
                });
            }
        };
    } // end function
})();
