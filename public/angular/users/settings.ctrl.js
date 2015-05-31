(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('SettingsController', SettingsController);

        SettingsController.$inject = ['$scope', 'toastr', 'AppFactory'];

        function SettingsController($scope, toastr, AppFactory){
            $scope.mySettingsUpdate = function() {
                updateUserInfo();
                updateViewPrefs();
                updateViewFilters();
                //updateReportPrefs();
                //updateReportFilters();
                toastr.success('User settings have been updated.', 'Success');
            };

            //////////
            function updateUserInfo() {
                var oUpd = {
                    username: $scope.user.username,
                    email: $scope.user.email,
                    loc_id: parseInt($scope.user.loc_id),
                    manager_id: parseInt($scope.user.manager_id),
                    closer_id: $scope.user.closer_id,
                    comms: $scope.user.comms
                };
                AppFactory.putIt('/users/', $scope.user.id, oUpd);
            }
            function updateViewPrefs() {
                var obj = $scope.user.viewopts;
                AppFactory.putIt('/viewoptions/', $scope.user.id, obj);
            }
            function updateViewFilters() {
                var obj = $scope.user.viewfltrs;
                AppFactory.putIt('/viewfilters/', $scope.user.id, obj);
            }
            function updateReportPrefs() {
                var obj = $scope.user.rptopts;
                AppFactory.putIt('/reportoptions/', $scope.user.id, obj);
            }
            function updateReportFilters() {
                var obj = $scope.user.rptfltrs;
                AppFactory.putIt('/reportfilters/', $scope.user.id, obj);
            }
        } // end controller
})();
