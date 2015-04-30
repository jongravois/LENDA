(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('UnderwritingController', UnderwritingController);

    UnderwritingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'AddendumsFactory', 'LoansFactory'];

    function UnderwritingController($scope, $state, $stateParams, AppFactory, InsuranceFactory, AddendumsFactory, LoansFactory) {

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
