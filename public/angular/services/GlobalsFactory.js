(function(){
    'use strict';
    angular
      .module('ARM')
        .factory('GlobalsFactory', GlobalsFactory);

        GlobalsFactory.$inject = ['$http', 'API_URL'];

        /* @ngInject */
        function GlobalsFactory($http, API_URL){
          return {
            getAdminGrader: getAdminGrader,
            getCropYears: getCropYears,
            getGlobals: getGlobals
          };

          function getAdminGrader(){
            return $http.get(API_URL + '/admingrader/');
          }

          function getCropYears(){
              var obj = [];
              return $http.get(API_URL + '/globals')
                .success(function(data) {
                  angular.forEach(data, function (obj, index) {
                    obj[0].CY = parseInt(obj[0].crop_year);
                    obj[0].PY6 = obj[0].CY - 6;
                    obj[0].PY5 = obj[0].CY - 5;
                    obj[0].PY4 = obj[0].CY - 4;
                    obj[0].PY3 = obj[0].CY - 3;
                    obj[0].PY2 = obj[0].CY - 2;
                    obj[0].PY1 = obj[0].CY - 1;
                  });
                  return obj;
                });
            }

          function getGlobals(){
            var obj = [];
            return $http.get(API_URL + '/globals')
              .success(function(data){
                angular.forEach(data, function(obj, index){
                  obj[0].today = moment().format("MM/DD/YYYY");
                  obj[0].forward3Days = moment().add(72, 'hours').format("MM/DD/YYYY");
                  obj[0].forward14Days = moment().add(14, 'days').format("MM/DD/YYYY");
                  obj[0].CY = parseInt(obj[0].crop_year);
                  obj[0].PY1 = obj[0].CY - 1;
                  obj[0].PY2 = obj[0].CY - 2;
                  obj[0].PY3 = obj[0].CY - 3;
                  obj[0].PY4 = obj[0].CY - 4;
                  obj[0].PY5 = obj[0].CY - 5;
                  obj[0].PY6 = obj[0].CY - 6;
                });
                return obj;
            });
          }
        } // end factory
})();