(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminCropsController', AdminCropsController);

        AdminCropsController.$inject = ['$scope', '$http', '$state', '$stateParams', 'AppFactory'];

        function AdminCropsController($scope, $http, $state, $stateParams, AppFactory){
            $scope.adminUpdateCrop = function (o) {
                AppFactory.putIt('/crops/', o.id, o).then(function success(response) {
                });
            };
        } // end function
})();