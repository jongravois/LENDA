(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminLocationsController', AdminLocationsController);

        AdminLocationsController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminLocationsController($scope, $http, $state, $stateParams){
            $scope.location_id = $stateParams.locationId;
            $scope.location = _.find($scope.locations, function (i) {
                return i.id === $scope.location_id;
            });

            // edit location
            $scope.saveLocation = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/locations/' + id, data);
            };

            // remove location
            $scope.removeLocation = function (index, id) {
                $http.delete('/api/locations/' + id);
                $scope.locations.splice(index, 1);
            };

            // add location
            $scope.addLocation = function () {
                $scope.inserted = {
                    id: $scope.locations.length + 1,
                    location: null,
                    path: null,
                    is_required: false
                };
                $scope.locations.push($scope.inserted);
                $state.go('admin.locations.edit', {locationId: $scope.inserted.id});
            };
        } // end function
})();