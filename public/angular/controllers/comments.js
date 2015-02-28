(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('CommentsController', CommentsController);

      CommentsController.$inject = ['$scope'];

      function CommentsController(
          $scope
      ){

        $scope.btnCommentReply = function(id){
          alert(id);
        }
        $scope.btnCommentStatus = function(currStat){
          alert(currStat);
        }
      } // end function
})();