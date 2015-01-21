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