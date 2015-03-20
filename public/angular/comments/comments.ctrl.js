(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommentsController', CommentsController);

    CommentsController.$inject = ['$scope', '$stateParams', '$modal', 'toastr', 'AppFactory', 'CommentsData', 'CommentsLogic'];

    function CommentsController($scope, $stateParams, $modal, toastr, AppFactory, CommentsData, CommentsLogic) {
        $scope.response = {};

        CommentsData
            .load($stateParams.loanID)
            .then(CommentsLogic($scope.user.id))
            .then(function (results) {
                var groups = _.chain(results).groupBy('type').value();
                $scope.comments = groups;
                //console.log($scope.comments);
            });

        $scope.cbCommentsAll = function () {
            $scope.user.cbCommentLenda = true;
            $scope.user.cbCommentCommittee = true;
            $scope.user.cbCommentAnalyst = true;
            $scope.user.cbCommentAccount = true;
        };

        $scope.createComment = function () {
            alert('Creating new comment');
            //if analyst == user.id --> create Analyst Comment
            //else create Committee Comment
        };

        $scope.btnCommentReply = function (obj) {
            //TODO: Figure out logic to insert response
            //pop-up to enter reply
            var modalInstance = $modal.open({
                templateUrl: 'angular/comments/reply-modal.html',
                controller: 'CommentModalController',
                scope: $scope
            });

            modalInstance.result.then(function (response) {
                var newRsp = {
                    loan_id: obj.loan_id,
                    comment_id: obj.id,
                    user_id: $scope.user_id,
                    body: response.msg
                };
                //persist new response
                AppFactory.postIt('/responses', newRsp);
                toastr.success('Your comment has been sent.', 'Success!');
                //create pending status for all committee members
                //push into array
                // TODO: Insert into Comments and show up w/o refresh
                angular.forEach($scope.comments, function(comment){
                    if(comment.id === obj.id){
                        comment.responses.unshift(newRsp);
                    } // end if
                });
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
                console.log('Passed: ', obj);
            });


        };
        $scope.btnCommentStatus = function (obj, userID) {
            //TODO: create update functionality
            var upd = {
                status: 'confirmed'
            };
            // persist change
            // remove from notifications
            // change icon
            // trigger toastr confirming action
        };

    } // end function
})();
