(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('EditLoansController', EditLoansController);

    EditLoansController.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 'toastr', 'AppFactory', 'ExceptionsFactory', 'CommentsData', 'CommentsLogic'];

    /* @ngInject */
    function EditLoansController($scope, $state, $stateParams, $filter, $timeout, toastr, AppFactory, ExceptionsFactory, CommentsData, CommentsLogic) {
        $scope.AppFactory = AppFactory;

        $scope.loan = _.find($scope.loans, function(i) {
            return i.id == $stateParams.loanID;
        });

        if($scope.loan){
            CommentsData
                .load($stateParams.loanID)
                .then(CommentsLogic($scope.user.id))
                .then(function (results) {
                    var groups = _.chain(results).groupBy('type').value();
                    $scope.loan.comments = groups;
                    //console.log($scope.loan.comments);
                });
            toastr.success('Loaded active loan', 'Success!');
        }

        activate();

        function activate() {
            $scope.indicon_width = '140px';
            $scope.toggleComment = false;
        }

        $scope.updateLoanComment = function() {
            var loanID = $stateParams.loanID;
            var comment = $scope.loan.comments.Loan[0].comment;
            var commentID = $scope.loan.comments.Loan[0].id;
            AppFactory.patchIt('/comments/', commentID, {comment: comment});
            toastr.success('Your comment has been updated.', 'Success');
        };

        $scope.updateAddendumComment = function() {
            var loanID = $stateParams.loanID;
            var comment = $scope.loan.comments.Addendum[0].comment;
            var commentID = $scope.loan.comments.Addendum[0].id;
            AppFactory.patchIt('/comments/', commentID, {comment: comment});
            toastr.success('Your comment has been updated.', 'Success');
        };

        $scope.updateWatchlistComment = function() {
            var loanID = $stateParams.loanID;
            var comment = $scope.loan.comments.Watch[0].comment;
            var commentID = $scope.loan.comments.Watch[0].id;
            AppFactory.patchIt('/comments/', commentID, {comment: comment});
            toastr.success('Your comment has been updated.', 'Success');
        };

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
