(function(){
    'use strict';
    angular.module('ARM')
      .controller('NewAppController', function(
        $scope,
        $http,
        $state,
        $stateParams,
        API_URL,
        AppFactory,
        FarmersFactory,
        GlobalsFactory,
        LoansFactory
      ){
        $scope.newapplication = true; //flag for screen buttons
        $scope.currentScreen = 0;
        LoansFactory.getLoan($stateParams.loanID).then(function(response) {
          $scope.loan = response.data.data;
        });

        $scope.farmer = $scope.farmer || {};

        if(!$scope.screens){
            LoansFactory.getScreens($stateParams.loantypeID).then(function success(response){
              $scope.screens = response.data.data;
              angular.forEach($scope.screens, function(obj, index){
                if(obj.screen == 'farmer'){
                  obj.status = 1;
               } else {
                  obj.status = 0;
                }
              });
            });
          } // end if

        /* SCOPE METHODS */
        $scope.onFarmerSelect = function($item,$model,$label){
          if($item){
            $scope.farmerID = $item.id;
            $scope.farmer = $item;
          }
        };

        $scope.createFarmer = function(obj) {
          if (angular.isDefined($scope.farmerID) && obj.id === $scope.farmerID) {
            AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: $scope.farmerID});
            if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
              $scope.screens[$scope.currentScreen + 1].status = 1;
              AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
            } else {
              //TODO: Move to edit.summary
              console.log('End of Screens');
            }
          } else {
            var thisYear = new Date().getFullYear();
            var exp = AppFactory.diffInDates(thisYear, parseInt(obj.first_year_farmer));
            obj.farm_exp = exp;
            return FarmersFactory.createFarmer(obj)
              .then(function(res){
                AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: res.data.message});
                if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
                  $scope.screens[$scope.currentScreen + 1].status = 1;
                  AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
                } else {
                  //TODO: Move to edit.summary
                  console.log('End of Screens');
                }
            });
          }

        };
      })
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
          if($scope.loan.entity_type_id == 1){
            $scope.corps.loan_id = $scope.loan.id;
            ApplicantsFactory.createCorporation($scope.corps);
          }
          $scope.applicant.loc_id = $scope.user.loc_id;
          $scope.applicant.farmer_id = $scope.farmer.id;
          ApplicantsFactory.createApplicant($scope.applicant)
            .then(function(res){
              AppFactory.patchIt('/loans/', $scope.loan.id, {applicant_id: res.data.message});
              toastr.success('Applicant has been created successfully.', 'Success: Applicant Created');
              //TODO: Applicant does not 'advance screen'
              if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
                $scope.screens[$scope.currentScreen + 1].status = 1;
                AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
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
      })
      .controller('NewQuestsController', function(
        $scope,
        $stateParams,
        toastr,
        AppFactory,
        LoansFactory,
        QuestsFactory
      ){
        $scope.quests = {};
        var newone = {
          loan_id: $stateParams.loanID
        }
        QuestsFactory.create(newone).then(function success(response){
          LoansFactory.getQuests($stateParams.loanID).then(function success(response){
                  $scope.quests = response.data.data[0];
                });
          
        });

        $scope.insertQuestions = function(){
          alert($scope.loan.id);
        }
        $scope.updateQuestions = function(){
          QuestsFactory.update($scope.quests.id, $scope.quests).then(function success(response){
                  toastr.success('The Loan Questions have been updated.', 'Successful Update');
                });
        }
      })
      .controller('NewAffiliatesController', function(
        $scope,
        $stateParams,
        toastr,
        AffiliatesFactory,
        AppFactory,
        LoansFactory
      ){
        $scope.moveFromAffiliates = function(){
          //TODO: Refactor like references
          //TODO: Advances to applicant - wrong!
          if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
            $scope.screens[$scope.currentScreen + 1].status = 1;
            AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
          } else {
            //TODO: Move to edit.summary
            console.log('End of Screens');
          }
        }
        $scope.newAffilate = function(){
          if(!$scope.affiliates){ $scope.affiliates = []; }
          $scope.newAffiliate.loan_id = $stateParams.loanID;
          AffiliatesFactory.create($scope.newAffiliate)
            .then(function(res){});
          $scope.affiliates.push($scope.newAffiliate);
          $scope.newAffiliate = {};
        }
      })
      .controller('NewReferencesController', function(
        $scope,
        $stateParams,
        toastr,
        ReferencesFactory,
        AppFactory,
        LoansFactory
      ){
        $scope.references = [];

        $scope.moveFromReferences = function(){
          //TODO: Advances to applicant - wrong!
          if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
            $scope.screens[$scope.currentScreen + 1].status = 1;
            AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
          } else {
            //TODO: Move to edit.summary
            console.log('End of Screens');
          }
        }
        $scope.createNewReference = function(o){
          o.loan_id = $stateParams.loanID;
          ReferencesFactory.create(o)
            .then(function(res){});
          $scope.references.push(o);
          $scope.newReference = {};
        }
      })
      .controller('NewDistributorController', function(
        $scope,
        $stateParams,
        toastr,
        AppFactory,
        LoansFactory
      ){
        $scope.distributor = {};

        $scope.insertDistributor = function(o){
          o.loan_id = $stateParams.loanID;
          LoansFactory.createDistributor(o)
            .then(function(res){
              toastr.success('Distributor added.', 'Success: Added distributor information.')
            });
          //TODO: Advances to applicant - wrong!
          if ($scope.screens[$scope.currentScreen + 1] !== undefined) {
            $scope.screens[$scope.currentScreen + 1].status = 1;
            AppFactory.moveToNextNewLoanScreen($scope.screens[$scope.currentScreen + 1].screen, $stateParams);
          } else {
            //TODO: Move to edit.summary
            console.log('End of Screens');
          }
        }
      });
})();