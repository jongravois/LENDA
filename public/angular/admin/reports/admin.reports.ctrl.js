(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminReportsController', AdminReportsController);

        AdminReportsController.$inject = [$scope, $http, $state, $stateParams];

        function AdminReportsController($scope, $http, $state, $stateParams){
            $scope.report_id = $stateParams.reportId;
            $scope.report = _.find($scope.reports, function (i) {
                return i.id === $scope.report_id;
            });

            // edit report
            $scope.saveReport = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/reports/' + id, data);
            };

            // remove report
            $scope.removeReport = function (index, id) {
                $http.delete('/api/reports/' + id);
                $scope.reports.splice(index, 1);
            };

            // add report
            $scope.addReport = function () {
                $scope.inserted = {
                    id: $scope.reports.length + 1,
                    report: null,
                    path: null,
                    is_required: false
                };
                $scope.reports.push($scope.inserted);
                $state.go('admin.reports.edit', {reportId: $scope.inserted.id});
            };
        } // end function
})();