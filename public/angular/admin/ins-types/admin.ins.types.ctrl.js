(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminInsTypeController', AdminInsTypeController);

        AdminInsTypeController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminInsTypeController($scope, $http, $state, $stateParams){
            $scope.instype_id = $stateParams.instypeId;
            $scope.instype = _.find($scope.instypes, function (i) {
                return i.id === $scope.instype_id;
            });

            // edit instype
            $scope.saveInstype = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/instypes/' + id, data);
            };

            // remove instype
            $scope.removeInstype = function (index, id) {
                $http.delete('/api/instypes/' + id);
                $scope.instypes.splice(index, 1);
            };

            // add instype
            $scope.addInstype = function () {
                $scope.inserted = {
                    id: $scope.instypes.length + 1,
                    instype: null,
                    path: null,
                    is_required: false
                };
                $scope.instypes.push($scope.inserted);
                $state.go('admin.instypes.edit', {instypeId: $scope.inserted.id});
            };
        } // end function
})();