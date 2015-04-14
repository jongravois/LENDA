(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ManagementController', ManagementController);

        ManagementController.$inject = ['$scope'];

        function ManagementController($scope){
            $scope.pending_view = 0;
            $scope.orderOptions = ['applicant', '-categoryOrder'];
            $scope.orderOption = "['applicant']";
        } // end controller
})();
