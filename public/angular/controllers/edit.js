(function(){
    'use strict';
    angular
      .module('ARM')
    .controller('EditAppController', function(
      $scope, $state, $stateParams, $filter,
      $timeout, toastr,
      AppFactory, ApplicantsFactory, FarmersFactory, LoansFactory
    ){
      $scope.loan_id = $stateParams.id;
      $scope.loan = $scope.loan || {};
      $scope.newapplication = false;

      //TODO: Verify that existing objects should be kept
      $scope.farmer = $scope.farmer || {};
      $scope.applicant = $scope.applicant || {};
      $scope.partners = $scope.partners || {};
      $scope.joints = $scope.joints || {};
      $scope.corps = $scope.corps || {};
        
      LoansFactory.getLoan($stateParams.id)
        .then(function success(response){
          $scope.loan = response.data.data;
          LoansFactory.getFinancials($stateParams.id).then(function success(response){
            $scope.loan.fins = response.data.data[0];
          });
          FarmersFactory.getFarmer($scope.loan.farmer_id).then(function success(response){
            $scope.farmer = response.data.data;
          });
          ApplicantsFactory.getApplicant($scope.loan.applicant_id).then(function success(response){
            $scope.applicant = response.data.data;
            ApplicantsFactory.getPartners($scope.loan_id).then(function success(response){
              $scope.partners = response.data.data;
            });
            ApplicantsFactory.getJointVentures($scope.loan_id).then(function success(response){
              $scope.joints = response.data.data;
            });
            ApplicantsFactory.getCorporations($scope.loan_id).then(function success(response){
              $scope.corps = response.data.data;
            });
          });
      });

      LoansFactory.getAffiliates($scope.loan_id).then(function success(response){
        $scope.affiliates = response.data.data;
      });
      LoansFactory.getComments($scope.loan_id).then(function success(response){
        $scope.comments = response.data.data;
      });
      LoansFactory.getCommittee($scope.loan_id).then(function success(response){
        $scope.committee = response.data.data;
      });
      LoansFactory.getCropExpenses($scope.loan_id).then(function success(response){
          $scope.cropExpenses = response.data.data;
        });
      LoansFactory.getDistributor($scope.loan_id).then(function success(response){
        $scope.distributor = response.data.data[0];
      });
        LoansFactory.getFarmExpenses($scope.loan_id).then(function success(response){
          $scope.farmExpenses = response.data.data;
        });
      LoansFactory.getFarmPractices($scope.loan_id).then(function success(response){
              $scope.farmPractices = response.data.data;
            });
      LoansFactory.getFarms($scope.loan_id).then(function success(response){
        $scope.farms = response.data.data;
      });
      LoansFactory.getGuarantors($scope.loan_id).then(function success(response){
          $scope.loan.guarantors = response.data.data;
          if($scope.loan.guarantors.length > 0){
            $scope.loan.conditions_pg = true;
          }
        });
      LoansFactory.getGrader($scope.loan_id).then(function success(response){
          $scope.loan.grader = response.data[0];
        });

      LoansFactory.getInsurancePolicies($scope.loan_id)
        .then(function success(rsp){
          var pols = rsp.data.data;
          //TODO: Refactor
          /*if(pols){
            angular.forEach(pols, function(value, key){
              this.push('guaranty:' + AppFactory.calcInsuranceGuaranty(this));
            });
          }*/
        $scope.insurance = pols;
      });
      LoansFactory.getLoanCounties($scope.loan_id).then(function success(response){
        $scope.loanCounties = response.data.data;
      });
      LoansFactory.getLoanCrops($scope.loan_id).then(function success(response){
        $scope.loanCrops = response.data.data;
        LoansFactory.getTotalAcres($scope.loan_id)
          .then(function(res){
            $scope.loan.total_acres = parseFloat(res);
          });
      });
        LoansFactory.getPriorLiens($scope.loan_id).then(function success(response){
          if(response.data.data.length < 1){
            $scope.prior_lien = {
              projected_crops: 0,
              ins_over_discount: 0,
              fsa_payments: 0,
              claims: 0,
              other: 0,
              total: 0
            };
          } else {
            $scope.prior_lien = response.data.data;
          }
        });
      LoansFactory.getPrerequisites($scope.loan_id).then(function success(response){
        $scope.docs = response.data.data;
      });
      LoansFactory.getQuests($scope.loan_id).then(function success(response){
        $scope.quests = response.data.data[0];
      });
        LoansFactory.getReferences($scope.loan_id).then(function success(response){
        $scope.references = response.data.data;
      });
      LoansFactory.getSelectedCrops($scope.loan_id).then(function success(response){
              $scope.loan.selectedCrops = response.data[0];
            });
      LoansFactory.getSystemics($scope.loan_id).then(function success(response){
      $scope.systemics = response.data.data;
    });

      $scope.uomChanged = function(id, uom){
        alert('Crop ID: ' + id + ' has been changed to ' + uom);
      };
      $scope.addGuarantor = function() {
        $scope.guarantors.push($scope.newGuarantor);
        $scope.newGuarantor = {};
      };
      $scope.getAverage = function(arr){
        var cnt = 0;
        var tot = 0;
        //console.log(arr);
        for(var a=0;a<arr.length;a++){
          if( !_.isNaN(parseFloat(arr[a]))){
            tot = tot + parseFloat(arr[a]);
            cnt = cnt + 1;
          } // end if
        } // end for
        return tot/cnt;
      };
      $scope.getCropsPercentIrrigated = function(id){
        switch(id){
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

      $scope.updateFarmer = function(obj) {
        var mdob = moment(obj.dob, "MM/DD/YYYY");
        obj.dob = mdob.format("YYYY-MM-DD");
        return FarmersFactory.updateFarmer(obj)
          .then(function (res) {
            toastr.success('Farmer Updated.', 'Success')
          });
      };
      $scope.updateApplicant = function(obj){
        return ApplicantsFactory.updateApplicant(obj)
          .then(function(res){
            console.log(res);
        });
      };
      $scope.updateCorporation = function(obj){
        return ApplicantsFactory.updateCorporation(obj)
          .then(function(res){
            console.log(res);
          });
      };
      $scope.updateVenture = function(obj){
          return ApplicantsFactory.updateVenture(obj)
            .then(function(res){
              console.log(res);
            });
        };
      $scope.updatePartner = function(obj){
        return ApplicantsFactory.updatePartner(obj)
          .then(function(res){
            console.log(res);
        });
      };

      // TODO: Factor in changing from RP ins_type
      // TODO: Check value and guaranty calculation
      $scope.calcGuaranty = function($arr){
          return (($arr['aph'] * ($arr['level']/100) * $arr['price']) - $arr['premium']) * ($arr['acres'] * ($arr['share']/100));
        };
      $scope.calcValue = function($guaranty, $arr) {
        return ($guaranty - $arr['premium']) * ($arr['share'] / 100) * $arr['acres'];
      };
      //  TODO: Create calcTotalValue Function
      $scope.calcTotalValue = function(){
        return 39549017.29;
      };

      });
})();