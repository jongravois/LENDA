(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('ExceptionsFactory', function ExceptionsFactory(
      $http, $q, API_URL, $stateParams,
      AppFactory, LoansFactory
    ){

      //PUBLIC API
      return {
        createExceptions: createExceptions,
        deleteException: deleteException,
        createExOne: createExOne
      };

      function createExceptions(o){
        if(!o.quests){
          LoansFactory.getQuests($stateParams.loanID)
            .then(function success(rsp){
              o.quests = rsp.data.data[0];
              console.log(o);
            });
        } else { console.log(o); }

        createExOne(o.id);

        /*<div id="Two" ng-if="loan.fins.grade && loan.fins.grade != 'A'">
          <p class="lg-text">
          Applicant is rated  "{{loan.fins.grade}}"
          </p>
        </div>*/
      }

      function deleteException(id){
        $http.delete(API_URL + '/loanexceptions/' + id);
      }

        function createExOne(loanID){
          var ins = {
            loan_id: loanID,
            exception_id: '1',
            msg: "This is an Ag-Input loan where ARM and JSI are partnering on the total commitment."
          };
          AppFactory.postIt('/loanexceptions', ins);
        }

    });
})();