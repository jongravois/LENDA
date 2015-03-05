(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('PdfAppsController', PdfAppsController);

    PdfAppsController.$inject = ['$scope', 'InitialData'];

    function PdfAppsController($scope, InitialData) {
        $scope.pdfApps = InitialData;
    } // end function
})();
