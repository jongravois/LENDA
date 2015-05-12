(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('SummaryController', SummaryController);

        SummaryController.$inject = ['$scope', '$stateParams'];

        function SummaryController($scope, $stateParams){
            if(!$scope.loan){
                $scope.loan = _.find($scope.loans, function(i) {
                    return i.id == $stateParams.loanID;
                });
            }
        } // end function
})();