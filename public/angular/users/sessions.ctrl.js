(function () {
    'use strict';
   angular
       .module('ARM')
       .controller('SessionsController', SessionsController);

       SessionsController.$inject = ['$scope'];

       function SessionsController(
           $scope
       ){} // end function
})();
