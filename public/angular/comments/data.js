(function(){
    'use strict';
  angular
    .module('ARM')
    .factory('CommentsData', CommentsData);

  CommentsData.$inject = ['$http', 'API_URL'];

  /* @ngInject */
  function CommentsData($http, API_URL) {
    return {
      load: _load
    };

    function _load(loan_id){
      return $http.get(API_URL + '/loans/' + loan_id + '/comments')
        .then(parseResponse);
    }

    function parseResponse(res){
      return res.data.data;
    }
  }
})();