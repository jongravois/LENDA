(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ReportsController', ReportsController);

    ReportsController.$inject = ['$scope'];

    function ReportsController($scope) {
        /*
        $scope.crop_mix
        {
            region: "W",
            location: "JON",
            status: "",
            corn: 10000,
            soybeans: 10000,
            soybeansFAC: 5000,
            sorghum: 5000,
            cotton: 10000,
            ricn: 10000,
            peanuts: 500,
            cane: 0,
            wheat: 5000,
            other: 500,
            total : corn + soybeans + soybeansFAC + sorghum + cotton + rice + peanuts + cane + wheat + other
        };
        */
    } // end controller
})();