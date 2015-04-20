(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('MainLoansController', MainLoansController);
    
        MainLoansController.$inject = ['$scope', 'toastr', 'AppFactory', 'LoansProcessor', 'Logger', 'UsersFactory'];
    
        function MainLoansController($scope, toastr, AppFactory, LoansProcessor, Logger, UsersFactory){
            if(!$scope.user){
                $scope.user_id = $('#user_id').data('id');
                UsersFactory.getUser($scope.user_id)
                    .then(function success(response) {
                        $scope.user = response.data.data;
                    });
            }

            if(!$scope.loans) {
                LoansProcessor.getLoansWithExtraData()
                    .then(function (allLoans) {
                        $scope.loans = allLoans;
                        $scope.loanList = _.filter(allLoans, function (i) {
                            return (i.status_id === '1' || i.status_id === 1) && i.crop_year == $scope.globals.crop_year;
                        });
                    });
                toastr.success('Loaded all loans', 'Success!');
            }

            // Bind

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

        } // end function
})();