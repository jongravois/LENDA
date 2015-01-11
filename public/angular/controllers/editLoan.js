(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('EditAppController', function(
      $scope, $state, $stateParams, $filter,
      $timeout, toastr,
      Loan, AppFactory, ApplicantsFactory, FarmersFactory,
      LoansFactory
    ) {
        $scope.loan = Loan.data.data[0];
        $scope.loan.season_full = AppFactory.getFullSeason($scope.loan.season);
        $scope.newapplication = false;

        LoansFactory.getFinancials($stateParams.loanID)
          .then(function success(response) {
            $scope.loan.fins = response.data.data[0];
          });

        FarmersFactory.getFarmer($scope.loan.farmer_id)
          .then(function success(response) {
            $scope.farmer = response.data.data;
          });

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

        LoansFactory.getQuests($stateParams.loanID)
          .then(function success(response) {
            $scope.quests = response.data.data[0];
          });

        LoansFactory.getComments($stateParams.loanID)
          .then(function success(response) {
            $scope.comments = response.data.data;
          });

        LoansFactory.getLoanCrops($stateParams.loanID)
          .then(function success(response) {
            $scope.loanCrops = response.data.data;
            LoansFactory.getTotalAcres($scope.loan.id)
              .then(function (res) {
                $scope.loan.total_acres = parseFloat(res);
              });
          });

        LoansFactory.getFarmExpenses($stateParams.loanID)
          .then(function success(response) {
            $scope.farmExpenses = response.data.data;
          });


        $scope.getCropsPercentIrrigated = function(id) {
          var lcIrrPer = '';
          //TODO: Loop through $scope.loanCrops and if acres > 0, add name: acres% and add a pipe between if necessary
          lcIrrPer = $scope.loanCrops[0].name + ': ' + $scope.loanCrops[0].acres + '% | ' + $scope.loanCrops[1].name + ': ' + $scope.loanCrops[1].acres + '% | ' + $scope.loanCrops[2].name + ': ' + $scope.loanCrops[2].acres + '% | ' + $scope.loanCrops[3].name + ': ' + $scope.loanCrops[3].acres + '% | ' + $scope.loanCrops[4].name + ': ' + $scope.loanCrops[4].acres + '% | ' + $scope.loanCrops[5].name + ': ' + $scope.loanCrops[5].acres + '% | ' + $scope.loanCrops[6].name + ': ' + $scope.loanCrops[6].acres + '% | ' + $scope.loanCrops[7].name + ': ' + $scope.loanCrops[7].acres + '%';

          return lcIrrPer;
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

        // TODO: Factor in changing from RP ins_type
        // TODO: Check value and guaranty calculation
        $scope.calcGuaranty = function ($arr) {
          return (($arr['aph'] * ($arr['level'] / 100) * $arr['price']) - $arr['premium']) * ($arr['acres'] * ($arr['share'] / 100));
        };
        $scope.calcValue = function ($guaranty, $arr) {
          return ($guaranty - $arr['premium']) * ($arr['share'] / 100) * $arr['acres'];
        };
        //  TODO: Create calcTotalValue Function
        $scope.calcTotalValue = function () {
          return 39549017.29;
        };

    });

})();