(function() {
  angular
    .module('ARM')
    .factory('ExpensesFactory', function ExpensesFactory($http, $q, $stateParams, API_URL) {

      var factObj = {
        getExpenses: getExpenses,
        data: {}
      };

      factObj.getExpenses();

      return factObj;

      function getExpenses() {
        var expenses, crops, acres, cats;

        var catsPromise = $http.get(API_URL + '/spendcats');
        var cropsPromise = $http.get(API_URL + '/crops');
        var acresPromise = $http.get('angular/json/acres.json');
        var expensesPromise = $http.get(API_URL + '/loans/' + $stateParams.loanID + '/cropexpenses');

        var allDataLoaded = $q.all([catsPromise, cropsPromise, acresPromise, expensesPromise]);

        // Just get the expenses data
        catsPromise.then(function(rsp) {
          cats = rsp.data;
          //console.log(cats);
        });
        // Just get the crops data
        cropsPromise.then(function(rsp) {
          crops = rsp.data.crop;
          //console.log(crops);
        });
        // Just get the acres data
        acresPromise.then(function(rsp){
          acres = rsp.data.acres;
          //console.log(acres);
        });
        // Just get the expenses data
        expensesPromise.then(function(rsp) {
          expenses = rsp.data.data;
          //console.log(expenses);
        });

        return allDataLoaded.then(function() {
          var tmpData = {};
          tmpData.total_acres = 0;

          var expense = _.map(expenses, function(obj){
            var findAcres = _.filter(acres, function(crop){
              return crop.crop_id == obj.crop_id;
            });
            obj.acres = _.pluck(findAcres, 'acres')[0];
            obj.peracre_total = obj.arm + obj.dist + obj.other;
            obj.calc_arm = obj.arm * obj.acres;
            obj.calc_dist = obj.dist * obj.acres;
            obj.calc_other = obj.other * obj.acres;
            obj.calc_total = obj.peracre_total * obj.acres;
            return obj;
          });

          //angular.forEach(expenses, function(obj) {

          //});

          //var grouped = _.groupBy(expenses, function(expense) {
          //return expense.crop;
          //});

          //_.forOwn(grouped, function(val, key) {
          // cropCats[key] = _.reduce(grouped[key], function(per, obj) {
          //  return per + obj.category;
          //}, 0);
          //cropTotals[key] = _.reduce(grouped[key], function(per, obj) {
          //return per + obj.value;
          //}, 0);
          //});

          tmpData.total_acres = _.reduce(acres, function(per, obj) {
            return per + obj.acres;
          }, 0);

          tmpData.expenses = expenses;

          angular.copy(tmpData, factObj.data);

          //HARD CODED!
          var totals = {
            acre_arm: 1000,
            acre_dist: 2000,
            acre_other: 3000,
            acre_loan: 6000,
            arm: 10000,
            dist: 20000,
            other: 30000,
            loan: 60000
          };

          factObj.data.acres = acres;
          factObj.data.crops = crops;
          factObj.data.cats = cats;
          factObj.data.totals = totals;

          return factObj.data;
        });
      }

    }); // end factory
})();