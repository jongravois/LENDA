(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminDistributorsController', AdminDistributorsController);

        AdminDistributorsController.$inject = ['$scope', '$http', '$state', '$stateParams', 'AppFactory'];

        function AdminDistributorsController($scope, $http, $state, $stateParams, AppFactory){
            $scope.distributor_id = $stateParams.distributorId;
            $scope.distributor = _.find($scope.distributors, function (i) {
                return i.id === $scope.distributor_id;
            });

            // edit distributor
            $scope.updateDistributor = function (o) {
                AppFactory.putIt('/distributors/', o.id, o).then(function success(response) {
                });
            };

            // remove distributor
            $scope.removeDistributor = function (index, id) {
                $http.delete('/api/distributors/' + id);
                $scope.distributors.splice(index, 1);
            };

            // add distributor
            $scope.addDistributor = function () {
                $scope.inserted = {
                    id: $scope.distributors.length + 1,
                    distributor: null,
                    path: null,
                    is_required: false
                };
                $scope.distributors.push($scope.inserted);
                $state.go('admin.distributors.edit', {distributorId: $scope.inserted.id});
            };
        } // end function
})();