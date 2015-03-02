(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommentsController', CommentsController);

    CommentsController.$inject = ['$scope', '$state', '$stateParams', 'ModalsService', 'CommentsData', 'CommentsLogic'];

    function CommentsController($scope, $state, $stateParams, ModalsService, CommentsData, CommentsLogic) {
        CommentsData
            .load($stateParams.loanID)
            .then(CommentsLogic($scope.user.id))
            .then(function (results) {
                var groups = _.chain(results).groupBy('type').value();
                $scope.comments = groups;
            });

        $scope.createComment = function () {
            alert('Creating new comment');
            //if analyst == user.id --> create Analyst Comment
            //else create Committee Comment
        };

        $scope.btnCommentReply = function (id) {
            //alert(id);
            //pop-up to enter reply
            var msg = "This is the text that should appear in my modal.";
            ModalsService.confirm(msg, 'First Modal', ['OK', 'Cancel'], 'lg')
                .then(function(){
                    console.log('Modal OK!');
                });
            //persist new response
            //create pending status for all committee members
            //push into array
        };
        $scope.btnCommentStatus = function (id, userID) {
            alert(id + '||' + userID);
            // persist change
            // remove from notifications
            // change icon
            // trigger toastr confirming action
        };
    } // end function
})();
