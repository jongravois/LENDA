(function(){
  'use strict';
  angular.module('ARM')
    .factory('LoansFactory', function LoansFactory($http, API_URL){
      return {
        getAdminGrader: getAdminGrader,
        getComments: getComments,
        getCommittee: getCommittee,
        getCropExpenses: getCropExpenses,
        getDistributor: getDistributor,
        getFarmPractices: getFarmPractices,
        getFarms: getFarms,
        getFinancials: getFinancials,
        getGrader: getGrader,
        getInsurancePolicies: getInsurancePolicies,
        getLoan: getLoan,
        getLoanCounties: getLoanCounties,
        getLoanCrops: getLoanCrops,
        getLoans: getLoans,
        getPrerequisites: getPrerequisites,
        getQuests: getQuests,
        getScreens: getScreens,
        getSelectedCrops: getSelectedCrops,
        getSystemics: getSystemics
      };

      function getAdminGrader(){
        return $http.get(API_URL + '/admingrader/');
      }

      function getComments(id){
        return $http.get(API_URL + '/loans/' + id + '/comments');
      }

      function getCommittee(id){
        return $http.get(API_URL + '/loans/' + id + '/committee');
      }

      function getCropExpenses(id){
        return $http.get(API_URL + '/loans/' + id + '/cropexpenses');
      }

      function getDistributor(id){
        return $http.get(API_URL + '/loans/' + id + '/distributor');
      }

      function getFarmPractices(id){
        return $http.get(API_URL + '/loans/' + id + '/farmpractices');
      }

      function getFarms(id){
        return $http.get(API_URL + '/loans/' + id + '/farms');
      }

      function getFinancials(id){
        return $http.get(API_URL + '/loans/' + id + '/financials');
      }

      function getGrader(id){
        // TODO: create loan.selectedCrops from crops and acres
        return $http.get('angular/json/grader.json');
      }

      function getInsurancePolicies(id){
        return $http.get(API_URL + '/loans/' + id + '/insurance');
      }

      function getLoan(id){
        return $http.get(API_URL + '/loans/' + id);
      }

      function getLoanCounties(id){
        return $http.get(API_URL + '/loans/' + id + '/counties');
      }

      function getLoanCrops(id){
        return $http.get(API_URL + '/loans/' + id + '/loancrops');
      }

      function getLoans(){
        return $http.get(API_URL + '/loans');
      }

      function getPrerequisites(id){
        return $http.get(API_URL + '/loans/' + id + '/prerequisites');
      }

      function getQuests(id){
        return $http.get(API_URL + '/loans/' + id + '/quests');
      }

      function getScreens(type){
        return $http.get(API_URL + '/loantypes/' + type + '/screens');
      }

      function getSelectedCrops(id){
        // TODO: create loan.selectedCrops from crops and acres
        return $http.get('angular/json/selectedCrops.json');
      }

      function getSystemics(id){
        return $http.get(API_URL + '/loans/' + id + '/systemics');
      }
    });
})();