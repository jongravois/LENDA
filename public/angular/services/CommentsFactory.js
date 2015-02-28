(function(){
    'use strict';
    angular
      .module('ARM')
      .factory('CommentsFactory', CommentsFactory);

      CommentsFactory.$inject = ['$http', 'API_URL'];

      /* @ngInject */
      function CommentsFactory(
        $http, API_URL
      ){
          return {
            getUserByLoan: getUserByLoan
          };

          //TODO: create getUserByLoan function
          function getUserByLoan(loanId, UserId){
            return false;
          }
      } // end controller function
})();