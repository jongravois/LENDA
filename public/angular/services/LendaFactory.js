(function(){
    'use strict';
    angular
      .module('ARM')
      .factory('LendaFactory', LendaFactory);

      LendaFactory.$inject = ['$http', 'API_URL', 'toastr'];

      /* @ngInject */
      function LendaFactory(
        $http, API_URL, toastr
      ){
          return {
            create: create
          };

          function create(obj){
            $http.post(API_URL + '/comments', obj)
              .then(function(res){
                toastr.warning(obj.comment, 'LENDA');
              });
          }

        } // end factory
})();