(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminApplicantsController', AdminApplicantsController);

        AdminApplicantsController.$inject = ['$scope'];

        function AdminApplicantsController(
            $scope
        ){} // end function
})();