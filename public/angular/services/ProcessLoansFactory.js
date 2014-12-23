(function(){
    'use strict';
    angular.module('ARM')
      .factory('LoanProcessor', function LoanProcessor($q, LoansFactory){
          function updateLoansData(response){
              var allLoans = response.data.data;
              return $q.all(allLoans.map(updateLoanData));
          }

          function updateLoanData(loan){
              return $q.all({
                  need_vote: getPendingVotes(loan),
                  has_comment: getPendingComments(loan)
              })
                .then(function(updatedData){
                    angular.extend(loan,updatedData);
                    return loan;
                })
          }

          function getPendingVotes(loan){
              return LoansFactory.getPendingVotes(loan.id)
                .then(function(response){
                    return (response.data.data.length === 0);
                });
          }

          function getPendingComments(loan){
              return LoansFactory.getPendingComments(loan.id)
                .then(function(response){
                    return (response.data.data.length === 0);
                });
          }

          //PUBLIC API
          return {
              getLoansWithExtraData: function(){
                  return LoansFactory.getLoans().then(updateLoansData);
              }
          }

        });
})();