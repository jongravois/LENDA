(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommentsController', CommentsController);

    CommentsController.$inject = ['$scope', '$stateParams', 'CommentsData', 'CommentsLogic', 'ModalService'];

    function CommentsController($scope, $stateParams, CommentsData, CommentsLogic, ModalService) {
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
            //TODO: Figure out logic to insert response
            //pop-up to enter reply
            var msg = '<p>This is the text that should appear in my modal.</p>';
            ModalService.commentReply({})
                .then(function(){
                    //delete in db
                    alert('Deleting the record now');
                });
            //persist new response
            //create pending status for all committee members
            //push into array
        };
        $scope.btnCommentStatus = function (obj, userID) {
            //TODO: Figure out logic to persist status change
            alert(obj.id + '||' + userID);
            console.log(obj);
            // persist change

            // remove from notifications
            // change icon
            // trigger toastr confirming action
        };
    } // end function
})();
