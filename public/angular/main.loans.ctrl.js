(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('MainLoansController', MainLoansController);
    
        MainLoansController.$inject = ['$scope', 'toastr', 'AppFactory', 'LoansProcessor', 'Logger', 'UsersFactory'];
    
        function MainLoansController($scope, toastr, AppFactory, LoansProcessor, Logger, UsersFactory){

            //SCOPE FUNCTIONS
            $scope.clkITS = AppFactory.clickITS;
            $scope.clkFSA = AppFactory.clickFSA;
            $scope.clkLIEN = AppFactory.clickLIEN;
            $scope.clkLEASE = AppFactory.clickLEASE;
            $scope.clkBORCVD = AppFactory.clickBORCVD;
            $scope.clk3PC = AppFactory.click3PC;
            $scope.clkREC = AppFactory.clickREC;
            $scope.clkARMAPP = AppFactory.clickARMAPP;
            $scope.clkDISTAPP = AppFactory.clickDISTAPP;
            $scope.clkCLOSE = AppFactory.clickCLOSE;
            $scope.clkADDLAND = AppFactory.clickADDLAND;
            $scope.clkARMUCC = AppFactory.clickARMUCC;
            $scope.clkDISTUCC = AppFactory.clickDISTUCC;
            $scope.clkAOI = AppFactory.clickAOI;
            $scope.clkCCC = AppFactory.clickCCC;
            $scope.clkREBA = AppFactory.clickREBA;
            $scope.clkCROPINS = AppFactory.clickCROPINS;
            $scope.clkPERINS = AppFactory.clickPERINS;

        } // end function
})();