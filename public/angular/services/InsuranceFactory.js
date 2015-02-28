(function(){
    'use strict';
    angular
      .module('ARM')
      .factory('InsuranceFactory', InsuranceFactory);

      InsuranceFactory.$inject = ['$http', '$q', '$stateParams', 'API_URL'];

      /* @ngInject */
      function InsuranceFactory($http, $q, $stateParams, API_URL) {

        // TODO: Factor in changing from RP ins_type
        var factObj = {
          getPolicies: getPolicies,
          data: {}
        };

        factObj.getPolicies();

        return factObj;

        //////////
        function getPolicies() {
          var policies, crops;

          var policiesPromise = $http.get(API_URL + '/loans/' + $stateParams.loanID + '/insurance');
          var cropsPromise = $http.get(API_URL + '/crops');

          var allDataLoaded = $q.all([policiesPromise, cropsPromise]);

          // Just get the policies data
          policiesPromise.then(function (rsp) {
            policies = rsp.data.data;
          });
          // Just get the crops data
          cropsPromise.then(function (rsp) {
            crops = rsp.data.crop;
          });

          return allDataLoaded.then(function () {
            var tmpData = {};
            tmpData.total_acres = 0;
            tmpData.total_value = 0;
            var cropAcres = {};
            var cropGuars = {};
            var cropTotals = {};

            var agencies = _.uniq(policies, 'agent_id');
            agencies[0].isOpen = 1;
            tmpData.agencies = agencies;

            angular.forEach(policies, function (obj) {
              if (!cropAcres[obj.crop]) {
                cropAcres[obj.crop] = 0;
              }
              cropAcres[obj.crop] += obj.acres;
            });

            angular.forEach(policies, function (obj) {
              obj.guarantee = (obj.level / 100) * obj.price * obj.yield * (obj.acres / cropAcres[obj.crop]);
              obj.value = ((obj.yield * (obj.level / 100) * obj.price) - obj.premium) * (obj.acres * (obj.share / 100));
            });

            var grouped = _.groupBy(policies, function (policy) {
              //console.log(policy.crop); //Corn 4|Beans 5 (should be Corn 3| Beans 5)
              return policy.crop;
            });

            _.forOwn(grouped, function (val, key) {
              cropGuars[key] = _.reduce(grouped[key], function (per, obj) {
                return per + obj.guarantee;
              }, 0);
              cropTotals[key] = _.reduce(grouped[key], function (per, obj) {
                return per + obj.value;
              }, 0);
            });

            tmpData.total_acres = _.reduce(policies, function (per, obj) {
              return per + obj.acres;
            }, 0);

            tmpData.total_value = _.reduce(policies, function (per, obj) {
              return per + obj.value;
            }, 0);

            tmpData.policies = policies;

            angular.copy(tmpData, factObj.data);
            factObj.data.cropAcres = cropAcres;
            factObj.data.cropGuars = cropGuars;
            factObj.data.cropTotals = cropTotals;

            return factObj.data;
          });
        }
      }// end factory
})();