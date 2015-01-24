(function() {
  angular
    .module('ARM')
    .factory('ExpensesFactory', function ExpensesFactory($http, $q, $stateParams, API_URL) {

      return {
        getExpenses: getExpenses
      };

      function getExpenses(loanID) {
        var uses = [
          {
            crop: 'Full Farm',
            acres: 927.7,
            expenses: [
              {expense: 'fertilizer', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:72688.53, calc_other:0, calc_total:72688.53},
              {expense: 'seed', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:74769, calc_total:74769},
              {expense: 'fungicide', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:7253.75, calc_other:0, calc_total:7253.75},
              {expense: 'herbicide', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:23084.17, calc_other:0, calc_total:23084.17},
              {expense: 'insecticide', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:6191.80, calc_other:0, calc_total:6191.80},
              {expense: 'custom', arm:0, dist:0, other:0, peracre_total:0, calc_arm:19019.80, calc_dist:0, calc_other:0, calc_total:19019.80},
              {expense: 'fuel', arm:0, dist:0, other:0, peracre_total:0, calc_arm:31305.00, calc_dist:0, calc_other:0, calc_total:31305.00},
              {expense: 'labor', arm:0, dist:0, other:0, peracre_total:0, calc_arm:18554.00, calc_dist:0, calc_other:0, calc_total:18554.00},
              {expense: 'repairs', arm:0, dist:0, other:0, peracre_total:0, calc_arm:12751.00, calc_dist:0, calc_other:0, calc_total:12751.00},
              {expense: 'insurance', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:12454.42, calc_total:12454.42},
              {expense: 'harvesting', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:0, calc_total:0},
              {expense: 'misc_acre', arm:0, dist:0, other:0, peracre_total:0, calc_arm:18554, calc_dist:0, calc_other:0, calc_total:18554}
            ],
            totals: {acre_arm:0, acre_dist:0, acre_other:0, acre_loan:0, arm:100184, dist:109219, other:87223, loan:296626 }
          },
          {
            crop: 'Corn',
            acres: 347.4,
            expenses: [
              {expense: 'fertilizer', arm:0, dist:164.97, other:0, peracre_total:164.97, calc_arm:0, calc_dist:57310.56, calc_other:0, calc_total:57310.56},
              {expense: 'seed', arm:0, dist:0, other:115, peracre_total:115, calc_arm:0, calc_dist:0, calc_other:39951, calc_total:39951},
              {expense: 'fungicide', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:0, calc_total:0},
              {expense: 'herbicide', arm:0, dist:32.94, other:0, peracre_total:32.94, calc_arm:0, calc_dist:11443.36, calc_other:0, calc_total:11443.36},
              {expense: 'insecticide', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:0, calc_total:0},
              {expense: 'custom', arm:18, dist:0, other:0, peracre_total:18, calc_arm:6253.20, calc_dist:0, calc_other:0, calc_total:6253.20},
              {expense: 'fuel', arm:40, dist:0, other:0, peracre_total:40, calc_arm:13896.00, calc_dist:0, calc_other:0, calc_total:13896.00},
              {expense: 'labor', arm:20, dist:0, other:0, peracre_total:20, calc_arm:6948.00, calc_dist:0, calc_other:0, calc_total:6948.00},
              {expense: 'repairs', arm:20, dist:0, other:0, peracre_total:20, calc_arm:6948.00, calc_dist:0, calc_other:0, calc_total:6948.00},
              {expense: 'insurance', arm:0, dist:0, other:11.88, peracre_total:11.88, calc_arm:0, calc_dist:0, calc_other:4127.11, calc_total:4127.11},
              {expense: 'harvesting', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:0, calc_total:0},
              {expense: 'misc_acre', arm:20, dist:0, other:0, peracre_total:20, calc_arm:6948.00, calc_dist:0, calc_other:0, calc_total:6948.00}
            ],
            totals: {acre_arm:118.00, acre_dist:197.91, acre_other:126.88, acre_loan:442.79, arm:40993.20, dist:68753.93, other:44078.11, loan:153825.25 }
          },
          {
            crop: 'Soybeans',
            acres: 580.3,
            expenses: [
              {expense: 'fertilizer', arm:0, dist:26.50, other:0, peracre_total:26.50, calc_arm:0, calc_dist:15377.95, calc_other:0, calc_total:15377.95},
              {expense: 'seed', arm:0, dist:0, other:115, peracre_total:115, calc_arm:0, calc_dist:0, calc_other:38951, calc_total:38951},
              {expense: 'fungicide', arm:0, dist:12.50, other:0, peracre_total:12.50, calc_arm:0, calc_dist:7253.75, calc_other:0, calc_total:7253.75},
              {expense: 'herbicide', arm:0, dist:20.06, other:0, peracre_total:20.06, calc_arm:0, calc_dist:11640.83, calc_other:0, calc_total:11640.83},
              {expense: 'insecticide', arm:0, dist:10.67, other:0, peracre_total:10.67, calc_arm:0, calc_dist:6191.80, calc_other:0, calc_total:6191.80},
              {expense: 'custom', arm:22.00, dist:0, other:0, peracre_total:22.00, calc_arm:12766.60, calc_dist:0, calc_other:0, calc_total:12766.60},
              {expense: 'fuel', arm:30, dist:0, other:0, peracre_total:30, calc_arm:17409.00, calc_dist:0, calc_other:0, calc_total:17409.00},
              {expense: 'labor', arm:20, dist:0, other:0, peracre_total:20, calc_arm:11606.00, calc_dist:0, calc_other:0, calc_total:11606.00},
              {expense: 'repairs', arm:10, dist:0, other:0, peracre_total:10, calc_arm:5803.00, calc_dist:0, calc_other:0, calc_total:5803.00},
              {expense: 'insurance', arm:0, dist:0, other:14.35, peracre_total:14.35, calc_arm:0, calc_dist:0, calc_other:8327.31, calc_total:8327.31},
              {expense: 'harvesting', arm:0, dist:0, other:0, peracre_total:0, calc_arm:0, calc_dist:0, calc_other:0, calc_total:0},
              {expense: 'misc_acre', arm:20, dist:0, other:0, peracre_total:20, calc_arm:11606, calc_dist:0, calc_other:0, calc_total:11606}
            ],
            totals: {acre_arm:102, acre_dist:69.73, acre_other:74.35, acre_loan:246.08, arm:59190.60, dist:40464.32, other:43145.31, loan:142800.22 }
          }
        ];
        return uses;
      }

    }); // end factory
})();