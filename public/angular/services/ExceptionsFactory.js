(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('ExceptionsFactory', function ExceptionsFactory(
      $http, $q, API_URL, $stateParams,
      AppFactory, LoansFactory
    ){
      var exception = {
          one: {
            id: 1,
            msg: "This is an {{o.loan_type}} loan type where ARM and {{o.distributor}} are partnering on the total commitment"
          },
          two: {
            id: 2,
            msg: "Applicant is rated {{o.fins.grade}}"
          },
          three: {
            id: 3,
            msg: "Applicant is a first-time customer"
          },
          four: {
            id: 4,
            msg: "Applicant has outstanding loans at ARM"
          },
          five: {
            id: 5,
            msg: "Applicant utilized loan addendums in previous year: 114%"
          },
          six: {
            id: 6,
            msg: "No personal guarantees were utilized in this loan"
          },
          seven: {
            id: 7,
            msg: "This is a cross-collateralized loan"
          },
          eight: {
            id: 8,
            msg: "This is a controlled disbursements loan"
          },
          nine: {
            id: 9,
            msg: "Cash Rent waivers were utilized"
          },
          ten: {
            id: 10,
            msg: "Third Party Credit other than Interest was utilized"
          },
          eleven: {
            id: 11,
            msg: "Variable harvesting expenses was utilized"
          },
          twelve: {
            id: 12,
            msg: "Applicant has less than 3 years of farming history"
          },
          thirteen: {
            id: 13,
            msg: "Applicant does not plant his own crops"
          },
          fourteen: {
            id: 14,
            msg: "Applicant does not harvest his own crop"
          },
          fifteen: {
            id: 15,
            msg: "Applicant does not have all equipment obligations met"
          },
          sixteen: {
            id: 16,
            msg: "Applicant has not made provisions for all cash outlays"
          },
          seventeen: {
            id: 17,
            msg: "Applicant is not in good standing with FSA"
          },
          eighteen: {
            id: 18,
            msg: "Applicant is not in good standing with Federal Crop Insurance (RMA)"
          },
          nineteen: {
            id: 19,
            msg: "Applicant has Crop Insurance premiums past due"
          },
          twenty: {
            id: 20,
            msg: "Applicant is defendant in legal actions"
          },
          twentyone: {
            id: 21,
            msg: "Applicant has judgements outstanding"
          },
          twentytwo: {
            id: 22,
            msg: "Applicant has been previously involved in a bankruptcy"
          },
          twentythree: {
            id: 23,
            msg: "This loan requires a Bankruptcy Order to incur debt"
          },
          twentyfour: {
            id: 24,
            msg: "There are outstanding liens on the mortgaged crop"
          },
          twentyfive: {
            id: 25,
            msg: "There are outstanding contractual obligations"
          },
          twentysix: {
            id: 26,
            msg: "This loan includes the production of peanuts"
          },
          twentyseven: {
            id: 27,
            msg: "This loan includes the production of sugar cane"
          },
          twentyeight: {
            id: 28,
            msg: "No actual yield history existed - T-yield was used for corn…"
          },
          twentynine: {
            id: 29,
            msg: "Certain farms have no rent expense allocated"
          },
          thirty: {
            id: 30,
            msg: "Whole farm expenses have been utilized and not directly allocated for each crop"
          },
          thirtyone: {
            id: 31,
            msg: "Crop Insurance other than RP is being used"
          },
          thirtytwo: {
            id: 32,
            msg: "Crop Insurance share used is greater than the applicants share of operation: corn…"
          },
          thirtythree:{
            id: 33,
            msg: "More crop was booked than was insured (acres x APH x level) - corn…"
          },
          thirtyfour: {
            id: 34,
            msg: "This loan relies upon equipment as collateral"
          },
          thirtyfive: {
            id: 35,
            msg: "This loan relies upon Real Estate as collateral"
          },
          thirtysix: {
            id: 36,
            msg: "This loan relies upon outstanding Crop Insurance Claims as collateral"
          },
          thirtyseven: {
            id: 37,
            msg: "Projected crops discount rate used is non-standard"
          },
          thirtyeight: {
            id: 38,
            msg: "FSA assignment discount rate used is non standard"
          },
          thirtynine: {
            id: 39,
            msg: "Crop Insurance discount rate used is non-standard"
          },
          forty: {
            id: 40,
            msg: "Equipment discount rate used is non-standard"
          },
          fortyone: {
            id: 41,
            msg: "Real-Estate discount rate used is non-standard"
          },
          fortytwo: {
            id: 42,
            msg: "Claims discount rate used is non-standard"
          },
          fortythree: {
            id: 43,
            msg: "Loan has negative cash flow"
          },
          fortyfour: {
            id: 44,
            msg: "Applicant has yield history that is less than break-even for corn…"
          },
          fortyfive: {
            id: 45,
            msg: "Loan's Risk Margin is less than 5% or Loans Risk Margin is less than 0"
          },
          fortysix: {
            id: 46,
            msg: "The forecasted crop insurance plus FSA payments do not exceed the value of Total Commitment"
          },
          fortyseven: {
            id: 47,
            msg: "The forecasted crop insurance plus FSA payments do not exceed the value of ARM Commitment"
          },
          fortyeight: {
            id: 48,
            msg: "The balance sheet shows less Net Worth than the ARM Commitment"
          },
          fortynine: {
            id: 49,
            msg: "The Balance Sheet shows negative net worth"
          },
          fifty: {
            id: 50,
            msg: "Service Fee is non-standard"
          },
          fiftyone: {
            id: 51,
            msg: "Service Fee is not charged on the total commitment"
          },
          fiftytwo: {
            id: 52,
            msg: "Processing Fee is non-standard"
          },
          fiftythree: {
            id: 53,
            msg: "Processing Fee is not charged on the total commitment"
          },
          fiftyfour: {
            id: 54,
            msg: "Processing Fee is not charged on the total commitment"
          },
          fiftyfive: {
            id: 55,
            msg: "ARM Interest Rate is non-standard"
          },
          fiftysix: {
            id: 56,
            msg: "ARM Interest Rate and Distributor Interest Rate are not the same"
          },
          fiftyseven: {
            id: 57,
            msg: "Due Date is non-standard"
          }
        };

      //PUBLIC API
      return {
        createExceptions: createExceptions,
        deleteException: deleteException,
        createExOne: createExOne,
        createExTwo: createExTwo,
        createExThree: createExThree
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
        if(o.fins.grade && o.fins.grade != 'A'){
          createExTwo(o.id, o.fins.grade);
        }
        createExThree(o.id);

      } //END Create Exceptions FUNCTION

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

      function createExTwo(loanID, grade){
        var ins = {
          loan_id: loanID,
          exception_id: '2',
          msg: "Applicant is rated '" + grade + "'."
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function createExThree(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: '3',
          msg: "Applicant is a first-time customer"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

    });
})();