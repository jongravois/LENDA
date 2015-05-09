(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('CommentModalController', CommentModalController);

    CommentModalController.$inject = ['$scope', '$modalInstance'];

    /* @ngInject */
    function CommentModalController($scope, $modalInstance) {
        $scope.ok = function() {
            $modalInstance.close($scope.newResponse);
        };
        $scope.cancel = function() {
            $modalInstance.dismiss();
        };
    } // end factory
})();