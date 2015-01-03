(function(){
  'use strict';
  angular
    .module('ARM')
    .controller('NewInsuranceController', function(
      $scope, $stateParams, toastr,
      AppFactory, LoansFactory
    ){
      var idLoan = $stateParams.loanID;
      if(!$scope.loan){
        LoansFactory.getLoan(idLoan)
          .then(function success(response){
            var loan = response.data.data;
            LoansFactory.getInsuranceTotal(loan.id)
              .then(function(response){
                loan.total_ins_value = response.data;
              });
            $scope.loan = loan;
          });
      }
      if(!$scope.insurance){
        LoansFactory.getInsurancePolicies(idLoan)
          .then(function success(rsp){
            $scope.insurance = rsp.data.data;
          });
      }
      $scope.newPolicy = {
        acres: 0,
        agency: '',
        agent: '',
        agent_phone: '',
        agent_email: '',
        aph: 0,
        level: 75,
        loancounty_id: '',
        option: '',
        policy: '',
        premium: 0.00,
        price: 0.00,
        share: 100,
        type: 'RP'
      };
      $scope.practiceDD = [
        {id:1, practice: 'Corn IR'},
        {id:2, practice: 'Corn NI'},
        {id:3, practice: 'Soybeans IR'},
        {id:4, practice: 'Soybeans NI'},
        {id:5, practice: 'Soybeans FACIR'},
        {id:6, practice: 'Soybeans NI'},
        {id:7, practice: 'Sorghum IR'},
        {id:8, practice: 'Sorghum NI'},
        {id:9, practice: 'Wheat IR'},
        {id:10, practice: 'Wheat NI'},
        {id:11, practice: 'Cotton IR'},
        {id:12, practice: 'Cotton IR'},
        {id:13, practice: 'Rice IR'},
        {id:14, practice: 'Rice NI'},
        {id:15, practice: 'Peanuts IR'},
        {id:16, practice: 'Peanuts NI'},
        {id:17, practice: 'Sugar Cane IR'},
        {id:18, practice: 'Sugar Cane NI'},
      ];

      $scope.onAgencySelect = function($item,$model,$label){
        if($item){
          AppFactory.agentsInAgency($item.id).then(function success(response){
            $scope.newPolicy.agency_id = $item.id;
            $scope.agencyAgents = response.data.data;
          });
        }
      }; // end onAgencySelect

      $scope.onAgentSelect = function($item,$model,$label){
        if($item){
          $scope.newPolicy.agent_id = $item.id;
          $scope.newPolicy.agent_phone = $item.agent_phone;
          $scope.newPolicy.agent_email = $item.agent_email;
        }
      }; // end onAgentSelect

      $scope.getPracticeDefaults = function(county, crop, practice){
        LoansFactory.getInsuranceDefaults(county).then(function success(response){
          var res = response.data[0];
          $scope.newPolicy.aph = res[crop][practice]['aph'];
          $scope.newPolicy.price = res[crop][practice]['ins_price'];
        });
      }; // end getPracticeDefaults

      $scope.addNewPolicy = function(obj){
        obj.loan_id = $stateParams.loanID;

      //TODO: when pushing into $scope.insurance, obj.Locale not set
      //TODO: when pushing into $scope.insurance, obj.practice not set
        if(!obj.agent_id){
          var newAgent = {
            agency_id: obj.agency_id,
            agent: obj.agent,
            agent_phone: obj.agent_phone,
            agent_email: obj.agent_email
          };
          LoansFactory.insertAgent(newAgent).then(function success(response){
            //TODO: agent_id is not set when inserting new agent
            obj.agent_id = response.data.message;
          });
        } // end if

        obj.practice = LoansFactory.getPracticeLabel(obj.loancrop_id, obj.croppractice_id);
        obj.locale = LoansFactory.localeFromCounty(obj.loancounty_id);
        obj.guaranty = AppFactory.calcInsuranceGuaranty(obj);
        obj.value = AppFactory.calcInsuranceValue(obj);

        $scope.loan.total_ins_value = $scope.loan.total_ins_value + obj.value;
        console.log(obj);

        LoansFactory.insertPolicy(obj).then(function success(response){});
        $scope.insurance.push(obj);
        $scope.newPolicy = {
          acres: 0,
          agency: '',
          agent: '',
          agent_phone: '',
          agent_email: '',
          aph: 0,
          level: 75,
          loancounty_id: '',
          option: '',
          policy: '',
          premium: 0.00,
          price: 0.00,
          share: 100,
          type: 'RP'
        };
      }; //end addNewPolicy
    });
})();