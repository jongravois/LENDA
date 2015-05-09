(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ClosingController', ClosingController);

    ClosingController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'InsuranceFactory'];

    function ClosingController($scope, $state, $stateParams, AppFactory, LoansFactory, InsuranceFactory) {

    } // end function
})();
