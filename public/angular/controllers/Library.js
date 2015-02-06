(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('LibraryController', LibraryController);

        LibraryController.$inject = ['$scope'];

        function LibraryController(
          $scope
        ){} // end function
})();