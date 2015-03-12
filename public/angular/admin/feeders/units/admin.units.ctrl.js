(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminUnitsController', AdminUnitsController);

        AdminUnitsController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminUnitsController(
            $scope, $http, $state, $stateParams
        ){
            $scope.unit_id = $stateParams.unitId;
            $scope.unit = _.find($scope.units, function (i) {
                return i.id === $scope.unit_id;
            });

            // edit unit
            $scope.saveUnit = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/units/' + id, data);
            };

            // remove unit
            $scope.removeUnit = function (index, id) {
                $http.delete('/api/units/' + id);
                $scope.units.splice(index, 1);
            };

            // add unit
            $scope.addUnit = function () {
                $scope.inserted = {
                    id: $scope.units.length + 1,
                    unit: null,
                    abr: null
                };
                $scope.units.push($scope.inserted);
                $state.go('admin.units.edit', {unitId: $scope.inserted.id});
            };
        } // end function
})();