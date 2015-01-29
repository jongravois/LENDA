(function(){
    'use strict';
    angular.module('ARM')
      .factory('ConditionsFactory', function ConditionsFactory(
        $http, $q, API_URL, AppFactory, LoansFactory
      ){
          return {
            createConditions: createConditions,
            modifyConditions: modifyConditions,
            createAgreement_ASA: createAgreement_ASA,
            deleteAgreement_ASA: deleteAgreement_ASA
          };

        function createConditions(o){
          console.log(o);
          /**
           * //LOAN CONDITIONS
           if($scope.chosenLT_id == '1' ||
           $scope.chosenLT_id == '2' ||
           $scope.chosenLT_id == '3' ||
           $scope.chosenLT_id == '4'){
                obj.conditions_asa = 1;
                obj.conditions_areb = 1;
                obj.conditions_afsa = 1;
                obj.conditions_aci = 1;
            }

           if($scope.chosenLT_id == '2' || $scope.chosenLT_id == '6'){
              obj.conditions_adis = 1;
            }

           */
          switch(o.loan_type_id){} // end switch
        }

        function modifyConditions(o){}

        function createAgreement_ASA(o){
          var agar = {
            crop_year: 'o.crop_year',
            loan_id: 'o.id',
            condition_id: '1',
            condition: "Agricultural Security Agreement on Crops and Equipment"
          };
          $http.post(API_URL + '/loanconditions', agar);
        }

        function deleteAgreement_ASA(id){
          //TODO: delete loanCondition
          //TODO: create LENDA comment and Loan Exception
        }

        });
})();