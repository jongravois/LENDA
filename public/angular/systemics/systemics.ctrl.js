(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('SystemicsController', SystemicsController);
    
        SystemicsController.$inject = ['$scope'];
    
        function SystemicsController(
            $scope
        ){} // end function
})();