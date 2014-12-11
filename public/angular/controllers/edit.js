(function(){
    'use strict';
    angular.module('ARM')
    .controller('EditAppController', function(
      $scope,
      $state,
      $stateParams,
      $filter,
      $timeout,
      ApplicantsFactory,
      FarmersFactory,
      LoansFactory
    ){
      $scope.loan = {};
      $scope.loan_id = $stateParams.id;
      $scope.newapplication = false;
        
      LoansFactory.getLoan($stateParams.id).then(function success(response){
        $scope.loan = response.data.data;
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
        LoansFactory.getInsurancePolicies($scope.loan_id).then(function success(response){
                $scope.loan.insurance = response.data.data;
              });
      LoansFactory.getLoanCounties($scope.loan_id).then(function success(response){
        $scope.loanCounties = response.data.data;
      });
      LoansFactory.getLoanCrops($scope.loan_id).then(function success(response){
        $scope.loanCrops = response.data.data;
      });
      LoansFactory.getPrerequisites($scope.loan_id).then(function success(response){
        $scope.docs = response.data.data;
      });
      LoansFactory.getQuests($scope.loan_id).then(function success(response){
        $scope.quests = response.data.data[0];
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
      $scope.getTotalAcres = function(){
        return 927.7;
      };
      $scope.getCropsPercentIrrigated = function(){
        return "Corn: 90.5%, Soybeans: 92.3%";
      };
      $scope.getTotalPCC_AgPro = function(){
        return 260550 + 261135;
      };
      $scope.calcIncomeConstraints =function(o){
        $scope.loan.fins.year_1_income = o.year_1_revenue - o.year_1_expenses;
        $scope.loan.fins.year_2_income = o.year_2_revenue - o.year_2_expenses;
        $scope.loan.fins.year_3_income = o.year_3_revenue - o.year_3_expenses;
        $scope.loan.fins.average_revenue = (o.year_1_revenue * 1 + o.year_2_revenue * 1 + o.year_3_revenue * 1)/3;
        $scope.loan.fins.average_expense = (o.year_1_expenses * 1 + o.year_2_expenses * 1 + o.year_3_expenses * 1)/3;
        $scope.loan.fins.total_income = $scope.loan.fins.average_revenue - $scope.loan.fins.average_expense;
      };

      $scope.updateFarmer = FarmersFactory.updateFarmer;
      $scope.updateFarmer = function(obj) {
        return FarmersFactory.updateFarmer(obj)
          .then(function (res) {
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

        $scope.clkProgIcon = function(ico, state){
          var icons = ['', 'its.list', 'fsa_compliant', 'prev_lien_verfied', 'leases_valid', 'bankruptcy_order_received', 'received_3party', 'recommended', 'arm_approved', 'dist_approved', 'loan_closed', 'added_land_verified', 'arm_ucc_received', 'dist_ucc_received', 'aoi_received', 'ccc_received', 'rebate_assignment', 'crop_inspection', 'limit_warning', 'Account reconcilliation'];

          var elem = icons[ico];

          if(state == '0'){
            $timeout(function() {
              $scope.loan[elem] = 1;
            }, 0);
            console.log($scope.loan[elem]);
          } else if(state == '1'){
            $timeout(function() {
              $scope.loan[elem] = 2;
            }, 0);
            console.log($scope.loan[elem]);
          } else if(state == '2'){
            $timeout(function() {
              $scope.loan[elem] = 1;
            }, 0);
            console.log($scope.loan[elem]);
          } else {
            console.log('dunno');
          }//end if
        };
      });
})();