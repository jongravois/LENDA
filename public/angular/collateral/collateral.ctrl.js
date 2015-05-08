(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('CollateralController', CollateralController);

        CollateralController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

        function CollateralController($scope, $state, $stateParams, AppFactory, LoansFactory){
            activate();

            function activate() {
                var curr = $state.current.url;
                var currScreen = curr.substring(1, curr.length);
                $scope.newapplication = $state.current.data.newapplication;

                if ($scope.newapplication && $scope.screens) {
                    angular.forEach($scope.screens, function (obj) {
                        if (obj.screen === currScreen) {
                            obj.status = 1;
                        }
                    });
                }// end if

            }

            $scope.createPriorLien = function() {
                alert('Creating new lien');
            };
        } // end controller
})();