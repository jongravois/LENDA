(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('PdfAppsController', PdfAppsController);

    PdfAppsController.$inject = ['$scope', '$state', '$stateParams', '$http', 'API_URL', 'AppFactory', 'LibraryFactory'];

    function PdfAppsController($scope, $state, $stateParams, $http, API_URL, AppFactory, LibraryFactory) {
        LibraryFactory.getPdfApps()
            .then(function success(rsp) {
                // console.log(rsp);
                $scope.pdfApps = rsp.data.data;
            });

        // edit pdfapps
        $scope.savePdfApp = function (id, data) {
            angular.extend(data, {id: id});
            return $http.put('/api/pdfaps/' + id, data);
        };

        // remove pdfapps
        $scope.removePdfApp = function (index, id) {
            $http.delete('/api/pdfapps/' + id);
            $scope.pdfaps.splice(index, 1);
        };

        // add pdfapps
        $scope.addPdfApp = function () {
            $scope.inserted = {
                id: $scope.pdfaps.length + 1,
                title: null,
                description: null,
                pdfLink: null,
                pdfImg: null,
                docLink: null,
                docImg: null,
                rank: false,
                isVisible: false
            };
            $scope.pdfapps.push($scope.inserted);
            $state.go('pdfapps.edit', {pdfAppId: $scope.inserted.id});
        };
    } // end function
})();
