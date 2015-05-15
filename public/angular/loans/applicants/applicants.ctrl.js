(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ApplicantsController', ApplicantsController);

    ApplicantsController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'ApplicantsFactory'];

    function ApplicantsController($scope, $state, $stateParams, AppFactory, ApplicantsFactory) {
        activate();

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
        }

        if (!$scope.loan.applicant_id) {
            $scope.applicant = {entity_type_id: '2'};
        } // end if

        $scope.newPartner = $scope.newPartner || {};
        $scope.newJoint = $scope.newJoint || {};
        $scope.newCorp = $scope.newCorp || {};

        $scope.createApplicant = function () {
            //Have to create a corporation, if applicable
            if ($scope.loan.entity_type_id === 1) {
                $scope.corporations.loan_id = $scope.loan.id;
                ApplicantsFactory.createCorporation($scope.corporations);
            }

            $scope.applicant.loc_id = $scope.user.loc_id;
            $scope.applicant.farmer_id = $scope.loan.farmer.id;
            $scope.applicant.loan_id = $scope.loan.id;

            ApplicantsFactory.createApplicant($scope.applicant)
                .then(function (rsp) {
                    AppFactory.patchIt('/loans/', $stateParams.loanID, {applicant_id: rsp.data.message});
                    AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
                });
        };

        $scope.createPartner = function () {
            $scope.newPartner.loan_id = $scope.loan.id;
            ApplicantsFactory.createPartner($scope.newPartner);
            $scope.loan.partners.push($scope.newPartner);
            $scope.newPartner = {};
        };

        $scope.createVenture = function () {
            $scope.newVenture.loan_id = $scope.loan.id;
            ApplicantsFactory.createVenture($scope.newVenture);
            $scope.loan.ventures.push($scope.newVenture);
            $scope.newVenture = {};
        };

        $scope.onApplicantSelect = function ($item, $model, $label) {
            if ($item) {
                $scope.applicantID = $item.id;
                $scope.loan.applicant = $item;
            }
        };
    }
})();
