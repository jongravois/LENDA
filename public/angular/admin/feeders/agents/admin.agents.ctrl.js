(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminAgentsController', AdminAgentsController);

        AdminAgentsController.$inject = ['$scope'];

        function AdminAgentsController(
            $scope
        ){} // end function
})();