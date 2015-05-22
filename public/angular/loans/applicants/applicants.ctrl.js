(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ApplicantsController', ApplicantsController);

    ApplicantsController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'AppFactory', 'LoansFactory', 'ApplicantsFactory', 'orderByFilter'];

    function ApplicantsController($scope, $rootScope, $state, $stateParams, AppFactory, LoansFactory, ApplicantsFactory, orderByFilter) {
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

        if (!$scope.loan && $stateParams.loanID == 0) {
            if($scope.newapplication){
                $scope.loan = {
                    entity_type_id: '2'
                };
            }
        } // end if

        $scope.newPartner = $scope.newPartner || {};
        $scope.newJoint = $scope.newJoint || {};
        $scope.newCorp = $scope.newCorp || {};

        $scope.createApplicant = function () {
            //Have to create a corporation, if applicable
            /*if ($scope.loan.entity_type_id === 1) {
                $scope.corporations.loan_id = $scope.loan.id;
                ApplicantsFactory.createCorporation($scope.corporations);
            }*/

            $scope.loan.applicant.loc_id = $scope.user.loc_id;
            $scope.loan.applicant.farmer_id = $rootScope.newlyCreated.farmerID;
            //$scope.loan.applicant.loan_id = $stateParams.loanID;
            var birth = $scope.loan.applicant.dob;
            $scope.loan.applicant.dob = birth.substr(0,2) + '/' + birth.substr(2,2) + '/' + birth.substr(5,4);

            ApplicantsFactory.createApplicant($scope.loan.applicant)
                .then(function (rsp) {
                    $rootScope.newlyCreated.applicantID = rsp.data.message;
                    console.log($rootScope.newlyCreated);
                    var newLoan = {
                        app_date: moment(new Date()).format('MM/DD/YYYY'),
                        default_due_date: moment(new Date(AppFactory.getDefaultDueDate($rootScope.newlyCreated.type_id, $scope.globals.crop_year))).format('MM/DD/YYYY'),
                        due_date: moment(new Date(AppFactory.getDefaultDueDate($rootScope.newlyCreated.type_id, $scope.globals.crop_year))).format('MM/DD/YYYY'),
                        loan_type_id: $rootScope.newlyCreated.type_id,
                        loan_type: $rootScope.newlyCreated.chosenLT,
                        crop_year: $scope.globals.crop_year,
                        season: $scope.globals.season,
                        loc_id: $scope.user.loc_id,
                        region_id: $scope.user.region_id,
                        user_id: $scope.user.id,
                        farmer_id: $rootScope.newlyCreated.farmerID,
                        applicant_id: $rootScope.newlyCreated.applicantID
                    };
                    LoansFactory.insertLoan(newLoan)
                        .then(function success(response) {
                            console.log('NewLoan', response);
                            $scope.loans.push(response.data.data);
                            $state.go('edit.quests', {loantypeID:  response.data.data.loan_type_id, loanID: response.data.data.id});
                        });
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
                $scope.loan.applicantID = $item.id;
                $scope.loan.applicant = $item;
            }
        };
    }
})();
