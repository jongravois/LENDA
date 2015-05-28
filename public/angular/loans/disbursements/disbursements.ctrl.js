(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('DisbursementsController', DisbursementsController);

        DisbursementsController.$inject = ['$scope', '$timeout', 'toastr', 'AppFactory'];

        function DisbursementsController($scope, $timeout, toastr, AppFactory){
            $scope.disbursed = false;
            var coll = $scope.loan.disbursements;

            $scope.disburse_arm_total = function() {
                return _.sumCollection(coll, 'arm_budget');
            };
            $scope.disburse_rem_total = function() {
                return _.sumCollection(coll, 'spent');
            };
            $scope.disburse_spent_total =function() {
                return _.sumCollection(coll, 'remaining');
            };
            $scope.requestDisbursement = function() {
                $scope.disbursed = true;
                // turn on disbursement_issue
                $scope.loan.disbursement_issue = 1;
                $scope.newDisb = 0;

                //[1] create disbursement and adjust values
                for (var i = 0; i < $scope.loan.disbursements.length; i++) {
                    $scope.newDisb += Number($scope.loan.disbursements[i].requested);
                    $scope.loan.disbursements[i].spent += Number($scope.loan.disbursements[i].requested);
                    $scope.loan.disbursements[i].remaining -= Number($scope.loan.disbursements[i].requested);
                }

                $timeout(function() {
                    toastr.success('There are no limit-warnings in place. Disbursement Request sent to Accounting.', 'Email sent to Accounting');
                }, 1200);

                var coll = $scope.loan.disbursements;
                angular.forEach(coll, function(i){
                    AppFactory.putIt('/disbursements/', i.id, i);
                });
                // check for limit-warnings
                //    if yes, send disbursement to analyst
                //        if over, offer addendum
                //            if no, cancel all
                //            if yes, process addendum and persist changes
                //    if no, send disbursement to Katie
                //           persist changes


                //if Katie acknowledges disbursement
                //    turn off disbursement_issue
                //    update database (no requested)

                //if analyst approves warned disbursement
                //    send to Katie
            };
        } // end controller
})();
