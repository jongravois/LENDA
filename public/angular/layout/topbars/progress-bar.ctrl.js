(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ProgressBarCtrl', ProgressBarCtrl);
    
        ProgressBarCtrl.$inject = ['$scope', 'ModalService', 'AppFactory'];
    
        /* @ngInject */
        function ProgressBarCtrl($scope, ModalService, AppFactory){
            /* jshint validthis: true */
            $scope.percent = '';
            $scope.files = [];

            $scope.showModal = function() {
                var data = {
                    title: 'Modal Test',
                    message: 'This is a test of the LENDA Modal Service. In the event of a real modal, instuctions will be provided.',
                    buttons: ['ok', 'cancel']
                };
                ModalService.confirm(data)
                    .then(function() {
                        alert('OK, then!');
                    }, function() {
                        alert('Dismissed!');
                    });
            };

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
            
        } // end controller
})();