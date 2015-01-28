(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('EditAppController', function(
      $scope, $state, $stateParams, $filter,
      $timeout, toastr,
      Loan, AppFactory, ApplicantsFactory, FarmersFactory,
      LoansFactory, InsuranceFactory
    ) {
        $scope.loan = Loan.data.data[0];
        $scope.loan.season_full = AppFactory.getFullSeason($scope.loan.season);
        $scope.newapplication = false;

        //FINS
        LoansFactory.getFinancials($stateParams.loanID)
          .then(function success(response) {
            $scope.loan.fins = response.data.data[0];
          });

        //FARMER
        FarmersFactory.getFarmer($scope.loan.farmer_id)
          .then(function success(response) {
            $scope.farmer = response.data.data;
          });

        //APPLICANT, PARTNERS, JOINTS & CORPORATION
        ApplicantsFactory.getApplicant($scope.loan.applicant_id)
          .then(function success(response) {
            $scope.applicant = response.data.data;
            ApplicantsFactory.getPartners($stateParams.loanID)
              .then(function success(response) {
                $scope.partners = response.data.data;
              });
            ApplicantsFactory.getJointVentures($stateParams.loanID)
              .then(function success(response) {
                $scope.joints = response.data.data;
              });
            ApplicantsFactory.getCorporations($stateParams.loanID)
              .then(function success(response) {
                $scope.corps = response.data.data;
              });
          });

        //QUESTS
        LoansFactory.getQuests($stateParams.loanID)
          .then(function success(response) {
            $scope.quests = response.data.data[0];
          });

        //PRIOR LIENS
        LoansFactory.getPriorLiens($stateParams.loanID)
          .then(function success(response) {
            $scope.prior_lien = response.data.data[0];
          });
      
        // GUARANTORS
        LoansFactory.getGuarantors($stateParams.loanID)
          .then(function success(rsp){
              $scope.loan.guarantors = rsp.data.data;
          });

        //CONDITIONS
        LoansFactory.getConditions($stateParams.loanID)
          .then(function success(rsp){
            $scope.loanConditions = rsp.data.data;
          });

        //COMMENTS
        LoansFactory.getComments($stateParams.loanID)
          .then(function success(response) {
            $scope.comments = response.data.data;
          });

        //PREREQUISITES
        LoansFactory.getPrerequisites($stateParams.loanID)
          .then(function success(rsp){
              $scope.docs = rsp.data.data;
          });

        //LOANCROPS & PERCENT IRRIGATED
        LoansFactory.getLoanCrops($stateParams.loanID)
          .then(function success(response) {
            $scope.loanCrops = response.data.data;
            $scope.getCropsPercentIrrigated = function(id) {
              var lcIrrPer = '';
              for(var c=0;c<$scope.loanCrops.length; c++){
                if(parseInt($scope.loanCrops[c].acres) != 0){
                  lcIrrPer += $scope.loanCrops[c].name + ': ' + $scope.loanCrops[c].percent_irrigated + '% | ';
                } //end if
              } // end for

              return lcIrrPer.slice(0, -2);
            };

            LoansFactory.getTotalAcres($scope.loan.id)
              .then(function (res) {
                $scope.loan.total_acres = parseFloat(res);
              });

            LoansFactory.getAttachments($stateParams.loanID)
              .then(function success(rsp){
                var data = rsp.data;
                if( data && data.length != 0){
                  $scope.loan.attachments = true;
                } else {
                  $scope.loan.attachments = false;
                } // end if
              });
          });

        //FARM EXPENSES
        LoansFactory.getFarmExpenses($stateParams.loanID)
          .then(function success(response) {
            $scope.farmExpenses = response.data.data;
          });

        $scope.total_expenses = {
          fertilizer: {
            arm: 0,
            dist: 72688,
            other: 0,
            total: 72688
          },
          seed: {
            arm: 0,
            dist: 0,
            other: 74769,
            total: 74769
          },
          fungicide: {
            arm: 0,
            dist: 7254,
            other: 0,
            total: 7254
          },
          herbicide: {
            arm: 0,
            dist: 23084,
            other: 0,
            total: 23084
          },
          insecticide: {
            arm: 0,
            dist: 6192,
            other: 0,
            total: 6192
          },
          custom: {
            arm: 19020,
            dist: 0,
            other: 0,
            total: 19020
          },
          fuel: {
            arm: 31305,
            dist: 0,
            other: 0,
            total: 31305
          },
          labor: {
            arm: 18554,
            dist: 0,
            other: 0,
            total: 18554
          },
          repairs: {
            arm: 12751,
            dist: 0,
            other: 0,
            total: 12751
          },
          insurance: {
            arm: 0,
            dist: 0,
            other: 12454,
            total: 12454
          },
          harvesting: {
            arm: 0,
            dist: 0,
            other: 0,
            total: 0
          },
          misc_acres: {
            arm: 18554,
            dist: 0,
            other: 0,
            total: 18554
          },
          living_expenses: {
            arm: 50000,
            dist: 0,
            other: 0,
            total: 50000
          },
          fees_and_others: {
            arm: 5815,
            dist: 0,
            other: 0,
            total: 5815
          },
          total_expenses: {
            arm: 155999,
            dist: 36530,
            other: 87223,
            total: 279752
          },
          estimated_interest: {
            arm: 4360,
            dist: 3686,
            other: 2944,
            total: 10990
          },
          deficit: {
            arm: 0,
            dist: 0,
            other: 0,
            total: 22718
          }
        };

        $scope.uomChanged = function (id, uom) {
          alert('Crop ID: ' + id + ' has been changed to ' + uom);
        };
        $scope.addGuarantor = function () {
          $scope.guarantors.push($scope.newGuarantor);
          $scope.newGuarantor = {};
        };
        $scope.getAverage = function (arr) {
          var cnt = 0;
          var tot = 0;
          //console.log(arr);
          for (var a = 0; a < arr.length; a++) {
            if (!_.isNaN(parseFloat(arr[a]))) {
              tot = tot + parseFloat(arr[a]);
              cnt = cnt + 1;
            } // end if
          } // end for
          return tot / cnt;
        };

    });

})();