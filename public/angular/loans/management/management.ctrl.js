(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ManagementController', ManagementController);

        ManagementController.$inject = ['$scope'];

        function ManagementController($scope){
            $scope.pending_view = false;
            $scope.orderOptions = ['applicant', '-categoryOrder'];
            $scope.orderOption = 'applicant';
            $scope.nextOrder = function(stat) {
                //debugger;
                if (stat === 0) {
                    $scope.orderOption = ['applicant'];
                } else {
                    //TODO: Sort Order by Array is SCREWY
                    //$scope.orderOption = '-need_vote';
                    $scope.orderOption = ['-need_vote', '-has_comment', '-is_stale', '-is_watched', '-disbursement_issue'];
                } // end if
            }; // end next order
        } // end controller
})();
