(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminCropsController', AdminCropsController);

        AdminCropsController.$inject = ['$scope', 'ModalService', 'AppFactory'];

        function AdminCropsController($scope, ModalService, AppFactory){
            $scope.addCrop = function() {
                //TODO: Create Method
                alert('Adding a crop');
            };
            $scope.adminUpdateCrop = function (o) {
                AppFactory.putIt('/crops/', o.id, o).then(function success(response) {
                });
            };
            $scope.removeCrop = function(o) {
                //confirm modal
                ModalService.confirmDelete({})
                    .then(function(){
                        //delete in db
                        alert('Deleting the record now');
                    });
            };
        } // end function
})();