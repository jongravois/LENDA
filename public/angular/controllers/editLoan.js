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
        $scope.loan = Loan.data.data;
        $scope.newapplication = false;

        LoansFactory.getFinancials($scope.loan.id)
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
            ApplicantsFactory.getPartners($scope.loan.id)
              .then(function success(response) {
                $scope.partners = response.data.data;
              });
            ApplicantsFactory.getJointVentures($scope.loan.id)
              .then(function success(response) {
                $scope.joints = response.data.data;
              });
            ApplicantsFactory.getCorporations($scope.loan.id)
              .then(function success(response) {
                $scope.corps = response.data.data;
              });
          });

        LoansFactory.getQuests($scope.loan.id)
          .then(function success(response) {
            $scope.quests = response.data.data[0];
          });

        LoansFactory.getComments($scope.loan.id)
          .then(function success(response) {
            $scope.comments = response.data.data;
          });

        LoansFactory.getLoanCrops($scope.loan.id)
          .then(function success(response) {
            $scope.loanCrops = response.data.data;
            LoansFactory.getTotalAcres($scope.loan.id)
              .then(function (res) {
                $scope.loan.total_acres = parseFloat(res);
              });
          });

        LoansFactory.getFarmExpenses($scope.loan.id)
          .then(function success(response) {
            $scope.farmExpenses = response.data.data;
          });


        $scope.getCropsPercentIrrigated = function (id) {
          //TODO: HARDCODED!!!
          switch (id) {
            case '1':
              return "Corn: 90.5%, Soybeans: 92.3%";
              break;
            case '2':
              return "Sorghum: 52.7%, Sugar Cane: 0%";
              break;
            default:
              return "Percent not determined.";
              break;
          } // end switch
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