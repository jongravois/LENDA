(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ManagementController', ManagementController);

        ManagementController.$inject = ['$scope'];

        function ManagementController($scope){
            $scope.pending_view = 1;
            $scope.orderOptions = ['applicant', '-categoryOrder'];
            //TODO: Here to make sort order dynamic
            $scope.orderOption = 'applicant';
            $scope.nextOrder = function(stat) {
                //debugger;
                if (stat === 0) {
                    $scope.orderOption = ['applicant'];
                } else {
                    $scope.orderOption = ['-need_vote', '-has_comment', '-is_stale', '-is_watched', '-disbursement_issue'];
                } // end if
            }; // end next order
        } // end controller
})();
