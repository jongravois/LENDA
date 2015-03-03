(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminUsersController', AdminUsersController);

        AdminUsersController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminUsersController(
            $scope, $http, $state, $stateParams
        ){
            $scope.user_id = $stateParams.userId;
            $scope.user = _.find($scope.users, function (i) {
                return i.id === $scope.user_id;
            });

            // edit user
            $scope.saveUser = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/users/' + id, data);
            };

            // remove user
            $scope.removeUser = function (index, id) {
                $http.delete('/api/users/' + id);
                $scope.users.splice(index, 1);
            };

            // add user
            $scope.addUser = function () {
                $scope.inserted = {
                    id: $scope.users.length + 1,
                    username: null,
                    abr: null,
                    email: null,
                    role: null,
                    loc_id: null,
                    manager_id: null,
                    is_admin: false,
                    is_approver: false,
                    is_manager: false
                };
                $scope.users.push($scope.inserted);
                $state.go('admin.users.edit', {userId: $scope.inserted.id});
            };
        } // end function
})();