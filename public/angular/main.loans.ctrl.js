(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('MainLoansController', MainLoansController);
    
        MainLoansController.$inject = ['$scope', 'toastr', 'LoansProcessor'];
    
        function MainLoansController(
            $scope, toastr, LoansProcessor
        ){
            LoansProcessor.getLoansWithExtraData()
             .then(function (allLoans) {
                $scope.loans = allLoans;
                $scope.loanList = _.filter(allLoans, function (i) {
                    return (i.status_id === '1' || i.status_id === 1) && i.crop_year == $scope.globals.crop_year;
                });
             });
            toastr.success('Loaded all loans', 'Success!');

            //SCOPE FUNCTIONS


        } // end function
})();