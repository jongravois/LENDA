(function(){
    'use strict';
    angular.module('ARM')
        .factory('CommentsFactory', function CommentsFactory(
          $http,
          API_URL
        ){
            return {
              getUserByLoan: getUserByLoan
            };

            //TODO: create getUserByLoan function
            function getUserByLoan(loanId, UserId){
              return false;
            }
          });
})();