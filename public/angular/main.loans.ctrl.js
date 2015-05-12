(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('MainLoansController', MainLoansController);
    
        MainLoansController.$inject = ['$scope', '$stateParams', 'toastr', 'AppFactory', 'LoansProcessor', 'Logger', 'UsersFactory'];
    
        function MainLoansController($scope, $stateParams, toastr, AppFactory, LoansProcessor, Logger, UsersFactory){
            $scope.XColView = false;

            if($stateParams.loanID && !$scope.loan){
                $scope.loan = _.find($scope.loans, function(i) {
                    return i.id == $stateParams.loanID;
                });
            }

            $scope.objectKeys = function(obj) {
                return Object.keys(obj);
            };
        } // end function
})();