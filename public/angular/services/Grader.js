(function(){
    'use strict';
    angular
      .module('ARM')
      .factory('Grader', Grader);

      Grader.$inject = ['BaseModel'];

      /* @ngInject */
      function Grader(BaseModel) {
          return {
              gradeLoan: function(fins, grader) {
                  var grade = 'F';
                  fins.debt2asset_adj = fins.debt2asset_adj || 0;
                  fins.ratioCurrent_adj = fins.ratioCurrent_adj || 0;
                  fins.capWork_adj = fins.capWork_adj || 0;
                  fins.capBorrow_adj = fins.capBorrow_adj || 0;
                  fins.credit_score = fins.credit_score || 0;
                  fins.experience = fins.experience || 0;
                  //console.log(fins);

                  _(grader).find(function(admin) {
                      //credit_score
                      if (admin.credit_score > fins.credit_score) {
                          return false;
                      }

                      //experience
                      if (admin.yrs_farming > fins.experience) {
                          return false;
                      }

                      //cpa_financials
                      if (!fins.cpa_financials) {
                          switch(admin.grade){
                              case 'A':
                                return false;
                                break;
                              default:
                                break;
                          } // end switch
                      }

                      //bankruptcy
                      if (fins.bankruptcy) {
                          if(admin.grade != 'D' && admin.grade != 'F'){
                              return false;
                          } // end if
                      }

                      //judgements
                      if (fins.judgements) {
                          if(admin.grade != 'D' && admin.grade != 'F'){
                              return false;
                          } // end if
                      }

                      //debt to asset
                      if (admin.debt2asset < fins.debt2asset_adj) {
                          return false;
                      }

                      //current ratio
                      if (admin.currRatio > fins.ratioCurrent_adj) {
                          return false;
                      }

                      //working capital
                      if (admin.working_cap > fins.capWork_adj) {
                          return false;
                      }

                      //borrowing capital
                      if (admin.borrow_cap > fins.capBorrow_adj) {
                          return false;
                      }

                      //grade = admin.grade;
                      grade = admin;
                      return true;
                  });

                  return grade;
              }
          };
      } // end factory
})();