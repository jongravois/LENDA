(function(){
    'use strict';
    angular.module('ARM')
      .factory('LoanProcessor', function LoanProcessor(
        $q,
        LoansFactory
      ){
          function getLoanWithExtraData(id){
              return LoansFactory.getLoan(id).then(updateLoanData);
          }

          function getTotalInsValue(loan){
              return LoansFactory.getInsuranceTotal(loan.id)
                .then(function(response){
                    return response.data;
                });
          }

          function updateLoanData(loan){
              return $q.all({
                  total_ins_value: getTotalInsValue(loan)
              })
                .then(function(updatedData){
                    angular.extend(loan,updatedData);
                    return loan;
                })
          }

          function updateLoanData(response){
              var oneLoan = response.data.data;
              return $q.all(oneLoan.map(updateLoanData));
          }

          //PUBLIC API
          return {
              getLoanWithExtraData: getLoanWithExtraData
          }

      });
})();