(function(){
    'use strict';
    angular
      .module('ARM')
      .factory('Grader', function(BaseModel) {
          return {
              gradeLoan: function(fins, grader) {
                  var grade = 'F';

                  _(grader).find(function(admin) {
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

                      //credit_score
                      if (admin.credit_score > fins.credit_score) {
                          return false;
                      }

                      //experience
                      if (admin.yrs_farming > fins.experience) {
                          return false;
                      }

                      grade = admin.grade;
                      return true;
                  });

                  //cpa_financials
                  if (!fins.cpa_financials) {
                      switch(grade){
                          case 'A':
                              grade = 'B';
                              break;
                          case 'B':
                              grade = 'C';
                              break;
                          case 'C':
                              grade = 'D';
                              break;
                          default:
                              grade = 'F';
                              break;
                      } // end switch
                  }

                  //bankruptcy
                  if (fins.bankruptcy) {
                      if(grade == 'F'){
                          grade = 'F';
                      } else {
                          grade = 'D';
                      } // end if
                  }

                  //judgements
                  if (fins.judgements) {
                      if(grade == 'F'){
                          grade = 'F';
                      } else {
                          grade = 'D';
                      } // end if
                  }

                  return grade;
              }
          };
      });
})();