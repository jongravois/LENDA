(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('PrerequisitesController', PrerequisitesController);

    PrerequisitesController.$inject = ['$scope', '$state', '$stateParams', '$window', 'AppFactory', 'LoansFactory', 'FILE_URL', 'ModalService'];

    function PrerequisitesController($scope, $state, $stateParams,$window, AppFactory, LoansFactory, FILE_URL, ModalService) {
        activate();

        $scope.files = [];

        LoansFactory.getPrerequisites($stateParams.loanID)
            .then(function success(rsp) {
                //console.log(rsp);
                if (rsp.data.length !== 0) {
                    $scope.docs = rsp.data.data;
                } else {
                    $scope.docs = [];
                    LoansFactory.getRequiredDocuments($stateParams.loantypeID)
                        .then(function success(rsp) {
                            var docs = rsp.data.data;
                            for (var d = 0; d < docs.length; d++) {
                                var rdoc = {
                                    'loan_id': $stateParams.loanID,
                                    'document': docs[d]['document']
                                };
                                AppFactory.postIt('/prerequisites', rdoc);
                                $scope.docs.push(rdoc);
                            } // end for
                        });
                } // end if
            });

        $scope.requestDocument = function(id) {
            ModalService
        };

        $scope.requestDocument = function(id) {
            var data = {
                title: 'Request Document from Applicant',
                message: 'I can send an email or a text message for you or just record today as when you made this request.',
                buttons: ['ok', 'cancel']
            };
            ModalService.confirm(data)
                .then(function() {
                    // EMail Button Clicked
                    // pop-up to confirm email and send
                }, function() {
                    // SMS Button Clicked
                    // pop-up to confirm phone and send;
                }, function() {
                    // None Button Clicked
                    //persist request
                });
        };

        $scope.showDocument = function(obj) {
            //console.log(obj);
            $window.open(FILE_URL + obj.path + obj.filename);
        };

        $scope.moveFromDocs = function () {
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };

        function activate() {
            var curr = $state.current.url;
            var currScreen = curr.substring(1, curr.length);
            $scope.newapplication = $state.current.data.newapplication;

            if ($scope.newapplication && $scope.screens) {
                angular.forEach($scope.screens, function (obj) {
                    if (obj.screen === currScreen) {
                        obj.status = 1;
                    }
                });
            }// end if

            $scope.txtFilter = '';
        } // end activate
    } // end controller function
})();
