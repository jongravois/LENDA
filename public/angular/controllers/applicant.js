(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ApplicantController', ApplicantController);

    ApplicantController.$inject = ['$scope', '$state', '$stateParams', 'InitialData', 'AppFactory', 'ApplicantsFactory'];

    function ApplicantController($scope, $state, $stateParams, InitialData,
                                 AppFactory, ApplicantsFactory) {
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

        $scope.loan = InitialData.data.data[0];

        if ($scope.loan.applicant_id) {
            ApplicantsFactory.getApplicant($scope.loan.applicant_id)
                .then(function success(rsp) {
                    $scope.applicant = rsp.data.data;
                    $scope.applicant.entity_type_id = '2';
                });
        } else {
            $scope.applicant = {entity_type_id: '2'};
        } // end if

        $scope.partners = $scope.partners || [];
        $scope.newPartner = $scope.newPartner || {};
        $scope.joints = $scope.joints || [];
        $scope.newJoint = $scope.newJoint || {};
        $scope.corps = $scope.corps || [];
        $scope.newCorp = $scope.newCorp || {};

        $scope.createApplicant = function () {
            //Have to create a corporation, if applicable
            if ($scope.loan.entity_type_id === 1) {
                $scope.corps.loan_id = $scope.loan.id;
                ApplicantsFactory.createCorporation($scope.corps);
            }

            $scope.applicant.loc_id = $scope.user.loc_id;
            $scope.applicant.farmer_id = $scope.farmer.id;
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
            $scope.partners.push($scope.newPartner);
            $scope.newPartner = {};
        };

        $scope.createVenture = function () {
            $scope.newVenture.loan_id = $scope.loan.id;
            ApplicantsFactory.createVenture($scope.newVenture);
            $scope.joints.push($scope.newVenture);
            $scope.newVenture = {};
        };
    }
})();
