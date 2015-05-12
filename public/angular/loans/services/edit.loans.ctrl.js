(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('EditLoansController', EditLoansController);

    EditLoansController.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 'toastr', 'AppFactory', 'ApplicantsFactory', 'ExceptionsFactory', 'FarmersFactory', 'LoansFactory', 'LoansProcessor'];

    /* @ngInject */
    function EditLoansController($scope, $state, $stateParams, $filter, $timeout, toastr, AppFactory, ApplicantsFactory, ExceptionsFactory, FarmersFactory, LoansFactory, LoansProcessor) {
        $scope.AppFactory = AppFactory;

        if(!$scope.loan) {
            $scope.loan = _.find($scope.loans, function (i) {
                return i.id == $stateParams.loanID;
            });
        }
        
        activate();

        function activate() {
            $scope.indicon_width = '140px';
        }

        $scope.uomChanged = function (id, uom) {
            alert('Crop ID: ' + id + ' has been changed to ' + uom);
        };
        $scope.addGuarantor = function () {
            $scope.guarantors.push($scope.newGuarantor);
            $scope.newGuarantor = {};
        };
        //TODO: Remove These
        $scope.createExceptions = ExceptionsFactory.createExceptions;
        $scope.createBankruptcy = ExceptionsFactory.bankruptcyHistory;
        $scope.deleteException = function (index) {
            var removee = $scope.loanExceptions[index];
            $scope.loanExceptions.splice(index, 1);
            ExceptionsFactory.deleteException(removee.id);
        };
        //TODO: Remove These
        $scope.getAverage = function (arr) {
            var cnt = 0;
            var tot = 0;
            //console.log(arr);
            for (var a = 0; a < arr.length; a++) {
                if (!_.isNaN(parseFloat(arr[a]))) {
                    tot = tot + parseFloat(arr[a]);
                    cnt = cnt + 1;
                } // end if
            } // end for
            return tot / cnt;
        };

    } // end controller function

})();
