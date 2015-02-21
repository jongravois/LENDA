(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('LoanProcessor', LoanProcessor);

    LoanProcessor.$inject = ['$q', 'LoansFactory'];

    function LoanProcessor(
      $q,
      LoansFactory
    ){

      //PUBLIC API
      return {
        getLoanWithExtraData: getLoanWithExtraData
      }

      function getLoanWithExtraData(id){
        return LoansFactory.getLoan(id).then(updateLoanData);
      }

      function getPendingComments(loan){
        return LoansFactory.getPendingComments(loan.id)
          .then(function(response){
            return (response.data.data.length !== 0);
          });
      }

      function getPendingVotes(loan){
        return LoansFactory.getPendingVotes(loan.id)
          .then(function(response){
            return (response.data.data.length === 0);
          });
      }

      function getTotalInsValue(loan){
        return LoansFactory.getInsuranceTotal(loan.id)
          .then(function(response){
            return response.data;
          });
      }

      function updateLoanData(loan){
        return $q.all({
          need_vote: getPendingVotes(loan),
          has_comment: getPendingComments(loan),
          total_ins_value: getTotalInsValue(loan)
        })
          .then(function(updatedData){
            angular.extend(loan,updatedData);
            return loan;
          })
      }

      function updateLoanData(response){
        var loanPlus = response.data.data;
        return $q.all(loanPlus.map(updateLoanData));
      }

    }
})();