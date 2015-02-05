(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('LoansProcessor', function LoansProcessor(
      $q,
      LoansFactory
    ){

      //PUBLIC API
      return {
        getLoansWithExtraData: getLoansWithExtraData
      }

      function getLoansWithExtraData(){
        return LoansFactory.getLoans().then(updateLoansData);
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
            //TODO: return this to ===
              return (response.data.data.length !== 0);
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

      function updateLoansData(response){
        var allLoans = response.data.data;
        return $q.all(allLoans.map(updateLoanData));
      }

    });
})();