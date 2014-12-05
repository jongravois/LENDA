(function(){
    'use strict';
    angular.module('ARM')
      .factory('FeederFactory', function FeederFactory($http, API_URL){
        var data = {
          hpOpts: [
            {id: 1, abr: 'll', option: 'Loan List'},
            {id: 2, abr: 'lm', option: 'Loan Management'}
          ],
          seasons: [
            {id:1, abr: 'F', season: 'Fall'},
            {id:2, abr: 'S', season: 'Spring'}
          ],
          agencies: [],
          distributors: [],
          farmers: [],
          loantypes: [],
          locations: [],
          regions: [],
          reports: []
        };

        function getAgencies(){
          return $http.get(API_URL + '/agencies').then(function(response){
            data.agencies = response.data.data;
          });
        }

        function getDistributors(){
          return $http.get(API_URL + '/distributors').then(function(response){
            data.distributors = response.data.data;
          });
        }

        function getFarmers(){
          return $http.get(API_URL + '/farmers').then(function(response){
            data.farmers = response.data.data;
          });
        }

        function getLoanTypes(){
          return $http.get(API_URL + '/loantypes').then(function(response){
            data.loantypes = response.data.data;
          });
        }

        function getLocations(){
          return $http.get(API_URL + '/locations').then(function(response){
            data.locations = response.data.data;
          });
        }

        function getRegions(){
          return $http.get(API_URL + '/regions').then(function(response){
            data.regions = response.data.data;
          });
        }

        function getReports(){
          return $http.get(API_URL + '/reports').then(function(response){
            data.reports = response.data.data;
          });
        }

        function getObject(){
          return data;
        }

        function init(){
          // trigger http calls to get data.
          getAgencies();
          getDistributors();
          getFarmers();
          getLoanTypes();
          getLocations();
          getRegions();
          getReports();
        }

        return {
          init: init,
          getObject: getObject,
          getReports: getReports,
          getRegions: getRegions,
          getLocations: getLocations,
          getLoanTypes: getLoanTypes,
          getFarmers: getFarmers,
          getDistributors: getDistributors,
          getAgencies: getAgencies
        }
      });
})();