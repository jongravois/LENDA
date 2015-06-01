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

            $scope.views = [
                {txt: 'Farmer', i: 1},
                {txt: 'Applicant', i: 2},
                {txt: 'Loan Type', i: 3},
                {txt: 'Crop Year', i: 4},
                {txt: 'App Date', i: 5},
                {txt: 'Location', i: 6},
                {txt: 'Status', i: 7}
            ];

            $scope.rpts = [
                {txt: 'Farmer', i: 1},
                {txt: 'Applicant', i: 2},
                {txt: 'Loan Type', i: 3},
                {txt: 'Crop Year', i: 4},
                {txt: 'App Date', i: 5},
                {txt: 'Location', i: 6},
                {txt: 'Status', i: 7}
            ];

            $scope.views.sort(function (a, b) {
                return a.i > b.i;
            });

            $scope.sortableOptions = {
                stop: function(e, ui) {
                    for (var index in $scope.views) {
                        $scope.views[index].i = index;
                    }

                    logModels();
                }
            };

            $scope.sortingLog = [];

            function logModels () {
                var logEntry = $scope.views.map(function(i){
                    return i.txt+'(pos:'+i.i+')';
                }).join(', ');
                $scope.sortingLog.push('Stop: ' + logEntry);
            }
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
