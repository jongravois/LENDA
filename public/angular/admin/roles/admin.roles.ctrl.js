(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminRolesController', AdminRolesController);

        AdminRolesController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminRolesController($scope, $http, $state, $stateParams){
            $scope.role_id = $stateParams.roleId;
            $scope.role = _.find($scope.roles, function (i) {
                return i.id === $scope.role_id;
            });

            // edit role
            $scope.saveRole = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/roles/' + id, data);
            };

            // remove role
            $scope.removeRole = function (index, id) {
                $http.delete('/api/roles/' + id);
                $scope.roles.splice(index, 1);
            };

            // add role
            $scope.addRole = function () {
                $scope.inserted = {
                    id: $scope.roles.length + 1,
                    role: null,
                    abr: null
                };
                $scope.roles.push($scope.inserted);
                $state.go('admin.roles.edit', {roleId: $scope.inserted.id});
            };
        } // end function
})();