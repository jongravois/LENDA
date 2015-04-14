(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('MainLoansController', MainLoansController);
    
        MainLoansController.$inject = ['$scope', 'toastr', 'LoansProcessor', 'Logger'];
    
        function MainLoansController($scope, toastr, LoansProcessor, Logger){
            LoansProcessor.getLoansWithExtraData()
             .then(function (allLoans) {
                $scope.loans = allLoans;
                $scope.loanList = _.filter(allLoans, function (i) {
                    return (i.status_id === '1' || i.status_id === 1) && i.crop_year == $scope.globals.crop_year;
                });
             });
            toastr.success('Loaded all loans', 'Success!');

            //SCOPE FUNCTIONS
            $scope.clkITS = function(loan){
                alert(loan.id);
                Logger.newSystemic(loan.id, $scope.user.username, 'Created test systemic by clicking ITS');
            };
            $scope.clkFSA = function(loan){
                alert(loan.id);
            };
            $scope.clkLIEN = function(loan){
                alert(loan.id);
            };
            $scope.clkLEASE = function(loan){
                alert(loan.id);
            };
            $scope.clkBORCVD = function(loan){
                alert(loan.id);
            };
            $scope.clk3PC = function(loan){
                alert(loan.id);
            };
            $scope.clkREC = function(loan){
                alert(loan.id);
            };
            $scope.clkARMAPP = function(loan){
                alert(loan.id);
            };
            $scope.clkDISTAPP = function(loan){
                alert(loan.id);
            };
            $scope.clkCLOSE = function(loan){
                alert(loan.id);
            };
            $scope.clkADDLAND = function(loan){
                alert(loan.id);
            };
            $scope.clkARMUCC = function(loan){
                alert(loan.id);
            };
            $scope.clkDISTUCC = function(loan){
                alert(loan.id);
            };
            $scope.clkAOI = function(loan){
                alert(loan.id);
            };
            $scope.clkCCC = function(loan){
                alert(loan.id);
            };
            $scope.clkREBA = function(loan){
                alert(loan.id);
            };
            $scope.clkCROPINS = function(loan){
                alert(loan.id);
            };

        } // end function
})();