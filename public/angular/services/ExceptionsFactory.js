(function(){
  'use strict';
  angular
    .module('ARM')
    .factory('ExceptionsFactory', function ExceptionsFactory(
      $http, $q, API_URL, $stateParams,
      AppFactory, FarmersFactory, GlobalsFactory, InsuranceFactory, LoansFactory
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

      function createExceptions(){
        return LoansFactory.getLoan($stateParams.loanID)
          .then(updateLoanData);
      }
      
      function getCrops(){
        return LoansFactory.getLoanCrops($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data;
          });
      }

      function getFarmer(id){
        return FarmersFactory.getFarmer(id)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data;
          });
      }

      function getFarms(){
        return LoansFactory.getFarms($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data;
          });
      }
      
      function getFinancials(){
        return LoansFactory.getFinancials($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data[0];
          });
      }

      function getGlobals(){
        return GlobalsFactory.getGlobals()
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data[0];
          });
      }

      function getLoansByFarmer(id){
        return FarmersFactory.loansByFarmer(id)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data;
          });
      }

      function getPriorLiens(id){
        return LoansFactory.getPriorLiens(id)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data[0];
          });
      }
      
      function getQuests(){
        return LoansFactory.getQuests($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data.data[0];
          });
      }

      function getPolicies(){
        return InsuranceFactory.getPolicies($stateParams.loanID)
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.policies;
          });
      }

      function newLoanExceptions(o){
        var loan = o.data.data[0];

        if(loan.is_cross_collateralized){ crossCollateralized(loan.id); }
        if(loan.controlled_disbursement){ controlledDisbursment(loan.id); }

        if(o.quests.bankruptcy){ bankruptcyHistory(loan.id); }
        if(o.quests.bankruptcyOrder){ bankruptcyOrder(loan.id); }
        if(!o.quests.other_cash){ cashOutlayProvisions(loan.id); }
        if(!o.quests.future_liabilities){ contractualObligations(loan.id); }
        if(!o.quests.equip_obligations){ equipmentObligations(loan.id); }
        if(!o.quests.fci_good){ fmaGoodStanding(loan.id); }
        if(!o.quests.fsa_good){ fsaGoodStanding(loan.id); }
        if(!o.quests.harvest_own){ harvestOwn(loan.id); }
        if(o.quests.legal_defendant){ isDefendant(loan.id); }
        if(o.quests.judgements){ outstandingJudgement(loan.id); }
        if(o.quests.liens){ outstandingLiens(loan.id); }
        if(!o.quests.premiums_past){ pastDuePremiums(loan.id); }
        if(!o.quests.plant_own){ plantOwn(loan.id); }
        if(o.quests.credit_3p_available){ thirdPartyCredit(loan.id); }

        if(o.fins.int_percent_arm != o.globals.int_percent_dist){ differingInterestRates(loan.id); }
        if(1 * o.fins.equipmentCollateral > 0){ equipmentCollateral(loan.id); }
        if(1 * o.fins.total_claims > 0){ insuranceClaimCollateral(loan.id); }
        if(1 * o.fins.cash_flow < 0){ negativeCashFlow(loan.id); }
        if(1 * o.fins.int_percent_arm != 1 * o.globals.int_percent_arm){
          nonstandardArmInterest(loan.id);
        }
        if(1 * o.fins.claims_percent != 1 * o.globals.claims_discount_rate){
          nonstandardClaimsDiscount(loan.id);
        }
        if(1 * o.fins.disc_ins_percent != 1 * o.globals.projected_crops_discount_rate){
          nonstandardCropDiscount(loan.id);
        }
        if(1 * o.fins.disc_prod_percent != 1 * o.globals.ins_discount_rate){
          nonstandardCropInsuranceDiscount(loan.id);
        }
        if(1 * o.fins.equipment_percent != 1 * o.globals.equipment_discount_rate){
          nonstandardEquipmentDiscount(loan.id);
        }
        if(1 * o.fins.fsa_assignment_percent != 1 * o.globals.fsa_assignment_discount_rate){
          nonstandardFsaAssignment(loan.id);
        }
        if(1 * o.fins.fee_processing_percent != 1 * o.globals.proc_fee_rate){
          nonstandardProcessingFee(loan.id);
        }
        if(1 * o.fins.fee_service_percent != 1 * o.globals.svc_fee_rate){
          nonstandardServiceFee(loan.id);
        }
        if(1 * o.fins.realestate_percent != 1 * o.globals.realestate_discount_rate){
          nonstandardRealEstateDiscount(loan.id);
        }
        if(o.fins.grade != 'A'){ notGradeA(loan.id, o.fins.grade); }
        if(!o.fins.fee_processing_onTotal){ processingFeeNotOnTotal(loan.id); }
        if(1 * o.fins.realEstateCollateral > 0) { realEstateCollateral(loan.id); }
        if(1 * o.fins.riskMargin < 0){ riskMargin(loan.id); }
        if(!o.fins.fee_service_onTotal){ serviceFeeNotOnTotal(loan.id); }

        if(o.loansByFarmer.length > 1){ outstandingLoan(loan.id); }

        if(1 * o.farmer.farm_exp < 2){
          firstTimeFarmer(loan.id);
        } else if(1 * o.farmer.farm_exp < 4){
          farmerHistory(loan.id);
        } // end if

        var net_worth = ((o.fins.current_assets * ((100 - o.fins.current_assets_factor) / 100)) - o.fins.current_assets_liability) + ((o.fins.intermediate_assets * ((100 - o.fins.intermediate_assets_factor) / 100)) - o.fins.intermediate_assets_liability) + ((o.fins.fixed_assets * ((100 - o.fins.fixed_assets_factor) / 100)) - o.fins.fixed_assets_liability);
        if(net_worth < 1 * o.fins.principal_arm){ balanceSheetLessArm(loan.id); }

        if(net_worth < 0){ balanceSheetNetWorth(loan.id); }

        if(1 * o.crops[6].acres > 0){
          producesPeanuts(loan.id);
        }

        if(1 * o.crops[7].acres > 0){
          producesSugarCane(loan.id);
        }

        var nonrp = _.filter(o.policies, function(i){ return i.type != 'RP'});
        if(nonrp.length > 0){ nonRPInsurance(loan.id); }

        var wave = o.farms.reduce(function(tot,farm){return tot + farm.waived}, 0);
        if(wave > 0){
          cashRentWaivers(loan.id);
        }

        var rent_expense = _.any(o.farms,function(farm){ return farm.cash_rent == 0 && farm.share == 0; });
        if(rent_expense){
          rentExpenses(loan.id);
        }

        var varhar = o.crops.reduce(function(tot,crop){return tot + crop.harvest}, 0);
        if(varhar > 0){
          variableHarvesting(loan.id);
        }

        var nsf = (((o.fins.total_fsa_payment * 1) * (1 - (o.fins.disc_ins_percent / 100 * 1))) - (o.prior_lien.fsa_payments * 1)) + ((o.fins.collateral_equipment * 1) * (1 - (o.fins.equipment_percent / 100 * 1))) - (o.prior_lien.equipment * 1);
        if(nsf > o.fins.commit_arm){ insufficientValueARM(loan.id); }
        if(nsf > o.fins.commit_total){ insufficientValueTotal(loan.id); }

        //Loopers by loanCrop
        o.crops.forEach(function(crop){
          if(crop.bkqty > crop.ins_share){
            bookedCrops($stateParams.loanID, crop.name);
          }
        });

        o.crops.forEach(function(crop){
          if(crop.prod_yield > crop.break_even){
            cropBreakEven($stateParams.loanID, crop.name);
          }
        });

        o.crops.forEach(function(crop){
          if(crop.ins_share > crop.prod_share){
            cropInsuranceShare($stateParams.loanID, crop.name);
          }
        });

        o.crops.forEach(function(crop){
          var yee = _.compact([crop.p1_yield, crop.p2_yield, crop.p3_yield, crop.p4_yield, crop.p5_yield, crop.p6_yield]);
          if(yee.length == 0){
            yieldHistory($stateParams.loanID, crop.name);
          }
        });

        //TODO: Previous Addendum? -- previousAddendum(loan.id);
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

      function bookedCrops(loanID, crop){
        var ins = {
          loan_id: loanID,
          exception_id: 34,
          msg: "More crop was booked than was insured - " + crop
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

      function cropBreakEven(loanID, crop){
        var ins = {
          loan_id: loanID,
          exception_id: 45,
          msg: "Applicant has yield history that is less than break-even for " + crop
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function cropInsuranceShare(loanID, crop){
        var ins = {
          loan_id: loanID,
          exception_id: 33,
          msg: "Crop Insurance share used is greater than the applicants share of operation: " + crop
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
          msg: "Applicant has a year or less of farming history"
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
          msg: "Applicant is rated '" + grade + "'"
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

      function yieldHistory(loanID, crop){
        var ins = {
          loan_id: loanID,
          exception_id: 29,
          msg: "No actual yield history existed - T-yield was used for " + crop
        };
        AppFactory.postIt('/loanexceptions', ins);
      }

      function updateLoanData(loan){
        //console.log(loan);
        return $q.all({
          crops: getCrops(),
          farmer: getFarmer(loan.data.data[0].farmer_id),
          farms: getFarms(),
          fins: getFinancials(),
          globals: getGlobals(),
          loansByFarmer: getLoansByFarmer(loan.data.data[0].farmer_id),
          quests: getQuests(),
          prior_lien: getPriorLiens(loan.data.data[0].id),
          policies: getPolicies()
        })
          .then(function(updatedData){
            angular.extend(loan, updatedData);
            //console.log(loan);
            newLoanExceptions(loan);
          });
      }

    });
})();