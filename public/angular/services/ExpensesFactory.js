(function() {
  angular
    .module('ARM')
    .factory('ExpensesFactory', ExpensesFactory);

    ExpensesFactory.$inject = ['$http', '$q', '$stateParams', 'API_URL'];

    /* @ngInject */
    function ExpensesFactory(
      $http, $q, $stateParams, API_URL
    ) {

      return {
        getBudget: getBudget
      };

      function getBudget(id){
        return $http.get(API_URL + '/loans/' + id + '/budget');
      }

    } // end factory
})();