(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('SettingsController', SettingsController);

        SettingsController.$inject = ['$scope', 'toastr', 'AppFactory'];

        function SettingsController($scope, toastr, AppFactory){
            $scope.updateUserInfo = function () {
                var oUpd = {
                    username: $scope.user.username,
                    email: $scope.user.email,
                    loc_id: parseInt($scope.user.loc_id),
                    closer_id: $scope.user.closer_id,
                    comms: $scope.user.comms
                };
                AppFactory.putIt('/users/', $scope.user.id, oUpd);
                toastr.success('Changes Saved', 'Success!');
            };
            $scope.updateFilterPrefs = function () {
                //TODO: create function
                alert('Updating Filters');
            };
            $scope.updateViewPrefs = function (o) {
                AppFactory.putIt('/viewoptions/', $scope.user.id, o);
                toastr.success('Changes Saved', 'Success!');
            };
        } // end controller
})();
