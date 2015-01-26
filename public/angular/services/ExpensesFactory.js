(function() {
  angular
    .module('ARM')
    .factory('ExpensesFactory', function ExpensesFactory($http, $q, $stateParams, API_URL) {

      return {
        getExpenses: getExpenses
      };

      function getExpenses(id){
        return $http.get(API_URL + '/loans/' + id + '/budget');
      }

    }); // end factory
})();