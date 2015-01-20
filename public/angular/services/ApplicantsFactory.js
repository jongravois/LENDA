(function(){
  'use strict';
  angular.module('ARM')
    .factory('ApplicantsFactory', function ApplicantsFactory(
      $http,
      API_URL
    ){
      /*TODO: is_repeat | loans_outstanding | previous_addendum | previous_addendum_amount */
      return {
        createApplicant: createApplicant,
        createCorporation: createCorporation,
        createPartner: createPartner,
        createVenture: createVenture,
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

      function createApplicant(o) {
        return $http.post(API_URL + '/applicants', o);
      }

      function createCorporation(o){
        return $http.post(API_URL + '/corporations', o);
      }

      function createPartner(o){
        return $http.post(API_URL + '/partners', o);
      }

      function createVenture(o){
        return $http.post(API_URL + '/jointventures', o);
      }

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

      function updateApplicant(o){
        return $http.put(API_URL + '/applicants', o);
      }

      function updateCorporation(o){}

      function updateVenture(o){}

      function updatePartner(o){}
    });
})();