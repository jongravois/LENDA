(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminFarmersController', AdminFarmersController);

        AdminFarmersController.$inject = ['$scope'];

        function AdminFarmersController(
            $scope
        ){} // end function
})();