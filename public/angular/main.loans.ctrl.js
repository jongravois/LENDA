(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('MainLoansController', MainLoansController);
    
        MainLoansController.$inject = ['$scope', '$stateParams', 'toastr', 'AppFactory', 'LoansProcessor', 'Logger', 'UsersFactory'];
    
        function MainLoansController($scope, $stateParams, toastr, AppFactory, LoansProcessor, Logger, UsersFactory){
            $scope.XColView = false;

            $scope.objectKeys = function(obj) {
                return Object.keys(obj);
            };


        } // end function
})();