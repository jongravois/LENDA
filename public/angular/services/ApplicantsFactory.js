(function(){
  'use strict';
  angular.module('ARM')
    .factory('ApplicantsFactory', function ApplicantsFactory($http, API_URL){
      /*TODO: is_repeat | loans_outstanding | previous_addendum | previous_addendum_amount */
      return {
        getApplicant: getApplicant,
        getApplicants: getApplicants,
        getCorporations: getCorporations,
        getJointVentures: getJointVentures,
        getPartners: getPartners,
        updateApplicant: updateApplicant,
        updatePartner: updatePartner,
        updateVenture: updateVenture,
        updateCorporation: updateCorporation
      };

      function getApplicant(id){
        return $http.get(API_URL + '/applicants/' + id);
      }

      function getApplicants(){
        return $http.get(API_URL + '/applicants');
      }

      function getCorporations(id){
        return $http.get(API_URL + '/loans/' + id + '/corporations');
      }

      function getJointVentures(id){
        return $http.get(API_URL + '/loans/' + id + '/jointventures');
      }

      function getPartners(id){
        return $http.get(API_URL + '/loans/' + id + '/partners');
      }

      function updateApplicant(o){}

      function updateCorporation(o){}

      function updateVenture(o){}

      function updatePartner(o){}
    });
})();