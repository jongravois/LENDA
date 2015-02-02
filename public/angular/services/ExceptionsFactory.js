(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('ExceptionsFactory', function ExceptionsFactory(
      $http, $q, API_URL, $stateParams,
      AppFactory, LoansFactory
    ) {

      //PUBLIC API
      return {
        balanceSheetLessArm: balanceSheetLessArm,
        balanceSheetNetWorth: balanceSheetNetWorth,
        bankruptcyHistory: bankruptcyHistory,
        bankruptcyOrder: bankruptcyOrder,
        bookedCrops: bookedCrops,
        cashOutlayProvisions: cashOutlayProvisions,
        cashRentWaivers: cashRentWaivers,
        contractualObligations: contractualObligations,
        createExceptions: createExceptions,
        cropBreakEven: cropBreakEven,
        cropInsuranceShare: cropInsuranceShare,
        crossCollateralized: crossCollateralized,
        controlledDisbursment: controlledDisbursment,
        deleteException: deleteException,
        differingInterestRates: differingInterestRates,
        equipmentCollateral: equipmentCollateral,
        equipmentObligations: equipmentObligations,
        farmerHistory: farmerHistory,
        firstTimeFarmer: firstTimeFarmer,
        fmaGoodStanding: fmaGoodStanding,
        fsaGoodStanding: fsaGoodStanding,
        harvestOwn: harvestOwn,
        insufficientValueARM: insufficientValueARM,
        insufficientValueTotal: insufficientValueTotal,
        insuranceClaimCollateral: insuranceClaimCollateral,
        isDefendant: isDefendant,
        loanTypeDistributor: loanTypeDistributor,
        loantypeNoDistributor: loantypeNoDistributor,
        negativeCashFlow: negativeCashFlow,
        noGuarantors: noGuarantors,
        nonRPInsurance: nonRPInsurance,
        nonstandardArmInterest: nonstandardArmInterest,
        nonstandardClaimsDiscount: nonstandardClaimsDiscount,
        nonstandardCropDiscount: nonstandardCropDiscount,
        nonstandardCropInsuranceDiscount: nonstandardCropInsuranceDiscount,
        nonstandardDueDate: nonstandardDueDate,
        nonstandardEquipmentDiscount: nonstandardEquipmentDiscount,
        nonstandardFsaAssignment: nonstandardFsaAssignment,
        nonstandardProcessingFee: nonstandardProcessingFee,
        nonstandardRealEstateDiscount: nonstandardRealEstateDiscount,
        nonstandardServiceFee: nonstandardServiceFee,
        notGradeA: notGradeA,
        outstandingJudgement: outstandingJudgement,
        outstandingLiens: outstandingLiens,
        outstandingLoan: outstandingLoan,
        pastDuePremiums: pastDuePremiums,
        plantOwn: plantOwn,
        previousAddendum: previousAddendum,
        processingFeeNotOnTotal: processingFeeNotOnTotal,
        producesPeanuts: producesPeanuts,
        producesSugarCane: producesSugarCane,
        realEstateCollateral: realEstateCollateral,
        rentExpenses: rentExpenses,
        riskMargin: riskMargin,
        serviceFeeNotOnTotal: serviceFeeNotOnTotal,
        thirdPartyCredit: thirdPartyCredit,
        variableHarvesting: variableHarvesting,
        wholeFarmExpenses: wholeFarmExpenses,
        yieldHistory: yieldHistory
      };

      function createExceptions(o) {
        if (!o.quests) {
          LoansFactory.getQuests($stateParams.loanID)
            .then(function success(rsp) {
              o.quests = rsp.data.data[0];
              console.log(o);
            });
        } else {
          console.log(o);
        }

        balanceSheetLessArm(o.id);
        balanceSheetNetWorth(o.id);
        bankruptcyHistory(o.id);
        bankruptcyOrder(o.id);
        bookedCrops(o.id);
        cashOutlayProvisions(o.id);
        cashRentWaivers(o.id);
        contractualObligations(o.id);
        createExceptions(o.id);
        cropBreakEven(o.id);
        cropInsuranceShare(o.id);
        crossCollateralized(o.id);
        controlledDisbursment(o.id);
        deleteException(o.id);
        differingInterestRates(o.id);
        equipmentCollateral(o.id);
        equipmentObligations(o.id);
        farmerHistory(o.id);
        firstTimeFarmer(o.id);
        fmaGoodStanding(o.id);
        fsaGoodStanding(o.id);
        harvestOwn(o.id);
        insufficientValueARM(o.id);
        insufficientValueTotal(o.id);
        insuranceClaimCollateral(o.id);
        isDefendant(o.id);
        loanTypeDistributor(o.id);
        loantypeNoDistributor(o.id);
        negativeCashFlow(o.id);
        noGuarantors(o.id);
        nonRPInsurance(o.id);
        nonstandardArmInterest(o.id);
        nonstandardClaimsDiscount(o.id);
        nonstandardCropDiscount(o.id);
        nonstandardCropInsuranceDiscount(o.id);
        nonstandardDueDate(o.id);
        nonstandardEquipmentDiscount(o.id);
        nonstandardFsaAssignment(o.id);
        nonstandardProcessingFee(o.id);
        nonstandardRealEstateDiscount(o.id);
        nonstandardServiceFee(o.id);
        notGradeA(o.id);
        outstandingJudgement(o.id);
        outstandingLiens(o.id);
        outstandingLoan(o.id);
        pastDuePremiums(o.id);
        plantOwn(o.id);
        previousAddendum(o.id);
        processingFeeNotOnTotal(o.id);
        producesPeanuts(o.id);
        producesSugarCane(o.id);
        realEstateCollateral(o.id);
        rentExpenses(o.id);
        riskMargin(o.id);
        serviceFeeNotOnTotal(o.id);
        thirdPartyCredit(o.id);
        variableHarvesting(o.id);
        wholeFarmExpenses(o.id);
        yieldHistory(o.id);
      }

      function balanceSheetLessArm(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 49,
          msg: "The balance sheet shows less Net Worth than the ARM Commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function balanceSheetNetWorth(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 50,
          msg: "The Balance Sheet shows negative net worth"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function bankruptcyHistory(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 23,
          msg: "Applicant has been previously involved in a bankruptcy"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function bankruptcyOrder(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 24,
          msg: "This loan requires a Bankruptcy Order to incur debt"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function bookedCrops(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 34,
          msg: "More crop was booked than was insured (acres x APH x level) - corn…"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function cashOutlayProvisions(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 17,
          msg: "Applicant has not made provisions for all cash outlays"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function cashRentWaivers(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 10,
          msg: "Cash Rent waivers were utilized"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function contractualObligations(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 26,
          msg: "There are outstanding contractual obligations"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function controlledDisbursment(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 9,
          msg: "This is a controlled disbursements loan"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function cropBreakEven(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 45,
          msg: "Applicant has yield history that is less than break-even for corn…"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function cropInsuranceShare(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 33,
          msg: "Crop Insurance share used is greater than the applicants share of operation: corn…"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function crossCollateralized(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 8,
          msg: "This is a cross-collateralized loan"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function deleteException(id) {
        $http.delete(API_URL + '/loanexceptions/' + id);
      }

      function differingInterestRates(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 56,
          msg: "ARM Interest Rate and Distributor Interest Rate are not the same"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function equipmentCollateral(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 35,
          msg: "This loan relies upon equipment as collateral"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function equipmentObligations(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 16,
          msg: "Applicant does not have all equipment obligations met"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function farmerHistory(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 13,
          msg: "Applicant has less than 3 years of farming history"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function firstTimeFarmer(loanID) {
        var ins = {
          loan_id: loanID,
          exception_id: 4,
          msg: "Applicant is a first-time customer"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function fmaGoodStanding(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 19,
          msg: "Applicant is not in good standing with Federal Crop Insurance (RMA)"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function fsaGoodStanding(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 18,
          msg: "Applicant is not in good standing with FSA"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function harvestOwn(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 15,
          msg: "Applicant does not harvest his own crop"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function insufficientValueARM(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 48,
          msg: "The crop insurance forecast plus FSA payments do not exceed the value of ARM Commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function insufficientValueTotal(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 47,
          msg: "The crop insurance forecast plus FSA payments do not exceed the value of Total Commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function insuranceClaimCollateral(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 37,
          msg: "This loan relies upon outstanding Crop Insurance Claims as collateral"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function isDefendant(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 21,
          msg: "Applicant is defendant in legal actions"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function loanTypeDistributor(loanID, loan_type, distributor) {
        var ins = {
          loan_id: loanID,
          exception_id: '2',
          msg: "This is an " + loan_type + " loan type where ARM and " + distributor + " are partnering on the total commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function loantypeNoDistributor(loanID, loan_type) {
        var ins = {
          loan_id: loanID,
          exception_id: 1,
          msg: "This is an " + loan_type + " loan type where ARM is assuming the total commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function negativeCashFlow(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 44,
          msg: "Loan has negative cash flow"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function noGuarantors(loanID) {
        var ins = {
          loan_id: loanID,
          exception_id: 7,
          msg: "No personal guarantees were utilized in this loan"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonRPInsurance(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 32,
          msg: "Crop Insurance other than RP is being used"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardArmInterest(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 55,
          msg: "ARM Interest Rate is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardClaimsDiscount(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 43,
          msg: "Claims discount rate used is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardCropDiscount(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 38,
          msg: "Projected crops discount rate used is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardCropInsuranceDiscount(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 40,
          msg: "Crop Insurance discount rate used is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardDueDate(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 57,
          msg: "Due Date is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardEquipmentDiscount(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 41,
          msg: "Equipment discount rate used is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardFsaAssignment(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 39,
          msg: "FSA assignment discount rate used is non standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardProcessingFee(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 53,
          msg: "Processing Fee is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardRealEstateDiscount(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 42,
          msg: "Real-Estate discount rate used is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function nonstandardServiceFee(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 51,
          msg: "Service Fee is non-standard"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function notGradeA(loanID, grade) {
        var ins = {
          loan_id: loanID,
          exception_id: 3,
          msg: "Applicant is rated " + grade
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function outstandingJudgement(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 22,
          msg: "Applicant has judgements outstanding"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function outstandingLiens(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 25,
          msg: "There are outstanding liens on the mortgaged crop"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function outstandingLoan(loanID) {
        var ins = {
          loan_id: loanID,
          exception_id: 5,
          msg: "Applicant has outstanding loans at ARM"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function pastDuePremiums(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 20,
          msg: "Applicant has Crop Insurance premiums past due"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function plantOwn(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 14,
          msg: "Applicant does not plant his own crops"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function previousAddendum(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 6,
          msg: "Applicant utilized loan addendums in previous year: 114%"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function processingFeeNotOnTotal(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 54,
          msg: "Processing Fee is not charged on the total commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function producesPeanuts(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 27,
          msg: "This loan includes the production of peanuts"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function producesSugarCane(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 28,
          msg: "This loan includes the production of sugar cane"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function realEstateCollateral(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 36,
          msg: "This loan relies upon real estate as collateral"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function rentExpenses(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 30,
          msg: "Certain farms have no rent expense allocated"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function riskMargin(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 46,
          msg: "Loan's Risk Margin is less than 5% or Loans Risk Margin is less than 0"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function serviceFeeNotOnTotal(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 52,
          msg: "Service Fee is not charged on the total commitment"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function thirdPartyCredit(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 11,
          msg: "Third Party Credit other than Interest was utilized"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function variableHarvesting(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 12,
          msg: "Variable harvesting expenses was utilized"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function wholeFarmExpenses(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 31,
          msg: "Whole farm expenses have been utilized and not directly allocated for each crop"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function yieldHistory(loanID){
        var ins = {
          loan_id: loanID,
          exception_id: 29,
          msg: "No actual yield history existed - T-yield was used for corn…"
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

    });
})();