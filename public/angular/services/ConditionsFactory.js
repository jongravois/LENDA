(function(){
    'use strict';
    angular.module('ARM')
      .factory('ConditionsFactory', function ConditionsFactory(
        $http, $q, API_URL, AppFactory
      ){
          return {
            createConditions: createConditions,
            modifyConditions: modifyConditions,
            createACI: createACI,
            createADIS: createADIS,
            createAFSA: createAFSA,
            createAREB: createAREB,
            createASA: createASA,
            deleteACI: deleteACI,
            deleteADIS: deleteADIS,
            deleteAFSA: deleteAFSA,
            deleteAREB: deleteAREB,
            deleteASA: deleteASA
          };

        function createConditions(o){
          console.log(o);
          switch(o.loan_type_id){} // end switch
        }

        function modifyConditions(o){}

        function createACI(CY, ID){
          AppFactory.patchIt('/loans/', ID, {conditions_aci: 1});

          var agar = {
            crop_year: CY,
            loan_id: ID,
            condition_id: '2',
            condition: "Assignment of Crop Insurance"
          };
          $http.post(API_URL + '/loanconditions', agar);
        }
        function createADIS(CY, ID, DIST){
          AppFactory.patchIt('/loans/', ID, {conditions_aci: 1});

          var agar = {
            crop_year: CY,
            loan_id: ID,
            condition_id: '5',
            condition: "Approval by Participating Distributor - " + DIST
          };
          $http.post(API_URL + '/loanconditions', agar);
        }
        function createAFSA(CY, ID){
          AppFactory.patchIt('/loans/', ID, {conditions_afsa: 1});

          var agar = {
            crop_year: CY,
            loan_id: ID,
            condition_id: '4',
            condition: "Assignment of FSA Direct and LDP Payment"
          };
          $http.post(API_URL + '/loanconditions', agar);
        }
        function createAREB(CY, ID){
          AppFactory.patchIt('/loans/', ID, {conditions_areb: 1});

          var agar = {
            crop_year: CY,
            loan_id: ID,
            condition_id: '3',
            condition: "Assignment of Rebates"
          };
          $http.post(API_URL + '/loanconditions', agar);
        }
        function createASA(CY, ID){
          AppFactory.patchIt('/loans/', ID, {conditions_asa: 1});

          var agar = {
            crop_year: CY,
            loan_id: ID,
            condition_id: '1',
            condition: "Agricultural Security Agreement on Crops and Equipment"
          };
          $http.post(API_URL + '/loanconditions', agar);
        }

        function deleteACI(id){
          //TODO: delete loanCondition
          //TODO: create LENDA comment and Loan Exception
        }
        function deleteADIS(id){
          //TODO: delete loanCondition
          //TODO: create LENDA comment and Loan Exception
        }
        function deleteAFSA(id){
          //TODO: delete loanCondition
          //TODO: create LENDA comment and Loan Exception
        }
        function deleteAREB(id){
          //TODO: delete loanCondition
          //TODO: create LENDA comment and Loan Exception
        }
        function deleteASA(id){
          //TODO: delete loanCondition
          //TODO: create LENDA comment and Loan Exception
        }
        });
})();