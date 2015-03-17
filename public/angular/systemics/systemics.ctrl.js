(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('SystemicsController', SystemicsController);
    
        SystemicsController.$inject = ['$scope', '$state', '$stateParams', 'LoansFactory'];
    
        function SystemicsController($scope, $state, $stateParams, LoansFactory){
            LoansFactory.getSystemics($stateParams.loanID)
                .then(function success(rsp){
                    $scope.systemics = rsp.data.data;
                });
        } // end function
})();