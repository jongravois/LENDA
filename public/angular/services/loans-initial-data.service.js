(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('LoansInitialDataService', LoansInitialDataService);

  LoansInitialDataService.$inject = ['$q', 'AppFactory', 'LoansFactory'];

  /* @ngInject */
  function LoansInitialDataService(
    $q, AppFactory, LoansFactory
  ) {
    var service = { getData: getData };

    return service;

    //////////
    function getData(loanID){
      return $q.all([
        //eliteApi.getTeams(leagueId),
        //eliteApi.getGames(leagueId),
        //eliteApi.getLocations()
      ]).then(function(results){
        return {
          //loan: results[0],
          //fins: results[1],
          //farmer: results[2], <-- needs loan.farmer_id
          //applicant: results[3], <-- needs loan.applicant_id
          //partners: results[4],
          //joints: results[5],
          //corps: results[6],
          //quests: results[7],
          //prior_lien: results[8],
          //guarantors: results[9],
          //loanConditions: results[10],
          //loanExceptions: results[11],
          //comments: results[12],
          //docs: results[13],
          //loanCrops: results[14],
          //getCropsPercentIrrigated: results[15],
          //attachments: results[16],
          //farmExpenses: results[17],
          //total_expenses: results[18],
          //storage: results[19]
        };
      });
    }
  }
})();