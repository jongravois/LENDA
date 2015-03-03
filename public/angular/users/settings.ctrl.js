(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('SettingsController', SettingsController);

        SettingsController.$inject = ['$scope'];

        function SettingsController(
            $scope
        ){} // end function
})();
