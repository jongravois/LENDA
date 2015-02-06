(function(){
    'use strict';
    angular.module('ARM')
      .factory('LibraryFactory', function LibraryFactory(
        $http, $q, API_URL
      ){
          return {
            getPdfApps:getPdfApps
          };

          function getPdfApps(){
            return $http.get(API_URL + '/pdfapps');
          }
        });
})();
