(function(){
    'use strict';
    angular.module('ARM')
        .factory('LendaFactory', function LendaFactory(
          $http,
          API_URL,
          toastr
        ){
            return {
              createLenda: createLenda
            };

            function createLenda(obj){
              $http.post(API_URL + '/comments', obj)
                .then(function(res){
                  toastr.warning(obj.comment, 'LENDA');
                });
            }

          });
})();