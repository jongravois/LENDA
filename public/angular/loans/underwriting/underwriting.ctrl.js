(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('UnderwritingController', UnderwritingController);

    UnderwritingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'AddendumsFactory', 'LoansFactory'];

    function UnderwritingController($scope, $state, $stateParams, AppFactory, InsuranceFactory, AddendumsFactory, LoansFactory) {

        $scope.hot_springs = [
            {
                crop: 'Corn',
                acres: 347.4,
                aph: 152.3,
                price: 4.2000,
                share: 84.4,
                crops: 187552,
                bkadj: 0,
                hrvadj: 0,
                totaladj: 187552,
                insurance: 169018,
                ins_disc: 775421,
                ins_over_disc: 38771,
                non_rp: 0

            },
            {
                crop: 'Soybeans',
                acres: 558,
                aph: 36.7,
                price: 11.250,
                share: 80.7,
                crops: 165242,
                bkadj: 0,
                hrvadj: 0,
                totaladj: 165242,
                insurance: 180990,
                ins_disc: 78142,
                ins_over_disc: 39071,
                non_rp: 0

            },
            {
                crop: 'Soybeans FAC',
                acres: 22.3,
                aph: 36.7,
                price: 10,
                share: 80.7,
                crops: 6604,
                bkadj: 0,
                hrvadj: 0,
                totaladj: 6604,
                insurance: 10062,
                ins_disc: 3944,
                ins_over_disc: 1972,
                non_rp: 0

            }
        ];

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
