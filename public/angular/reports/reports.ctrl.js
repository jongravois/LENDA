(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ReportsController', ReportsController);

    ReportsController.$inject = ['$scope', '$http', 'ReportsFactory'];

    function ReportsController ($scope, $http, ReportsFactory) {
    }

})();
