(function(){
    'use strict';
    angular.module('ARM')
        .factory('LendaFactory', function LendaFactory(
          $http,
          API_URL,
          toastr
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

          });
})();