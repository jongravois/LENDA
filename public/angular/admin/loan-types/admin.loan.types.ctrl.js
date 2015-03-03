(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('AdminLoanTypeController', AdminLoanTypeController);

        AdminLoanTypeController.$inject = ['$scope', '$http', '$state', '$stateParams'];

        function AdminLoanTypeController($scope, $http, $state, $stateParams){
            $scope.loantype_id = $stateParams.loantypeId;
            $scope.loantype = _.find($scope.loantypes, function (i) {
                return i.id === $scope.loantype_id;
            });

            // edit loantype
            $scope.saveLoantype = function (id, data) {
                angular.extend(data, {id: id});
                return $http.put('/api/loantypes/' + id, data);
            };

            // remove loantype
            $scope.removeLoantype = function (index, id) {
                $http.delete('/api/loantypes/' + id);
                $scope.loantypes.splice(index, 1);
            };

            // add loantype
            $scope.addLoantype = function () {
                $scope.inserted = {
                    id: $scope.loantypes.length + 1,
                    loantype: null,
                    path: null,
                    is_required: false
                };
                $scope.loantypes.push($scope.inserted);
                $state.go('admin.loantypes.edit', {loantypeId: $scope.inserted.id});
            };
        } // end function
})();