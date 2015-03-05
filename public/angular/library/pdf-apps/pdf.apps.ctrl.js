(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('PdfAppsController', PdfAppsController);

    PdfAppsController.$inject = ['$scope', 'LibraryFactory'];

    function PdfAppsController($scope, LibraryFactory) {
        LibraryFactory.getPdfApps()
            .then(function success(rsp) {
                // console.log(rsp);
                $scope.pdfApps = rsp.data.data;
            });
    } // end function
})();
