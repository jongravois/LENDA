(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminEntityTypesController', AdminEntityTypesController);

        AdminEntityTypesController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminEntityTypesController($scope, $http, $state, $stateParams){
            $scope.entitytype_id = $stateParams.entitytypeId;
            $scope.entitytype = _.find($scope.entitytypes, function (i) {
                return i.id === $scope.entitytype_id;
            });

            // edit entitytype
            $scope.saveEntitytype = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/entitytypes/' + id, data);
            };

            // remove entitytype
            $scope.removeEntitytype = function (index, id) {
                $http.delete('/api/entitytypes/' + id);
                $scope.entitytypes.splice(index, 1);
            };

            // add entitytype
            $scope.addEntitytype = function () {
                $scope.inserted = {
                    id: $scope.entitytypes.length + 1,
                    entitytype: null,
                    path: null,
                    is_required: false
                };
                $scope.entitytypes.push($scope.inserted);
                $state.go('admin.entitytypes.edit', {entitytypeId: $scope.inserted.id});
            };
        } // end function
})();