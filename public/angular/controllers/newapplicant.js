(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewApplicantController', function(
        $scope,
        $stateParams,
        toastr,
        AppFactory,
        ApplicantsFactory
      ){
        $scope.applicant = {};
        $scope.applicant.entity_type_id = '2';
        $scope.partners = [];
        $scope.newPartner = {};
        $scope.joints = [];
        $scope.newJoint = {};
        $scope.corps = [];
        $scope.newCorp = {};

        $scope.createApplicant = function() {
          //Have to create a corporation, if applicable
          if($scope.loan.entity_type_id == 1){
            $scope.corps.loan_id = $scope.loan.id;
            ApplicantsFactory.createCorporation($scope.corps);
          }

          $scope.applicant.loc_id = $scope.user.loc_id;
          $scope.applicant.farmer_id = $scope.farmer.id;
          $scope.applicant.loan_id = $scope.loan.id;
          ApplicantsFactory.createApplicant($scope.applicant)
            .then(function(res){
              toastr.success('Applicant has been created successfully.', 'Success: Applicant Created');
              if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
                $scope.screens[$scope.currentScreen + 1].status = 1;
                AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
                $scope.currentScreen++;
              } else {
                //TODO: Move to edit.summary
                console.log('End of Screens');
              }
            });
        };

        $scope.createPartner = function(){
          $scope.newPartner.loan_id = $scope.loan.id;
          ApplicantsFactory.createPartner($scope.newPartner);
          $scope.partners.push($scope.newPartner);
          $scope.newPartner = {};
        };

        $scope.createVenture = function(){
          $scope.newVenture.loan_id = $scope.loan.id;
          ApplicantsFactory.createVenture($scope.newVenture);
          $scope.joints.push($scope.newVenture);
          $scope.newVenture = {};
        };
      });
})();