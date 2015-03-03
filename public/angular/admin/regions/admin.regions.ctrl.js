(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminRegionsController', AdminRegionsController);

        AdminRegionsController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminRegionsController($scope, $http, $state, $stateParams){
            $scope.region_id = $stateParams.regionId;
            $scope.region = _.find($scope.regions, function (i) {
                return i.id === $scope.region_id;
            });

            // edit region
            $scope.saveRegion = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/regions/' + id, data);
            };

            // remove region
            $scope.removeRegion = function (index, id) {
                $http.delete('/api/regions/' + id);
                $scope.regions.splice(index, 1);
            };

            // add region
            $scope.addRegion = function () {
                $scope.inserted = {
                    id: $scope.regions.length + 1,
                    region: null,
                    path: null,
                    is_required: false
                };
                $scope.regions.push($scope.inserted);
                $state.go('admin.regions.edit', {regionId: $scope.inserted.id});
            };
        } // end function
})();