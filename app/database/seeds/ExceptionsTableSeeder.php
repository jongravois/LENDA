<?php

class ExceptionsTableSeeder extends Seeder {

	public function run()
	{
		Exceptions::create([
			'title' => 'firstTimeFarmer',
			'message'	=>	'Applicant has a year or less of farming history'
		]);

		Exceptions::create([
			'title' => 'farmerHistory',
			'message'	=>	'Applicant has less than 3 years of farming history.'
		]);

		Exceptions::create([
			'title' => 'outstandingLoan',
			'message'	=>	'Applicant has outstanding loans at ARM.'
		]);

		Exceptions::create([
			'title' => 'previousAddendum',
			'message'	=>	'Applicant utilized loan addendums in previous year:'
		]);

		Exceptions::create([
			'title' => 'plantOwn',
			'message'	=>	'Applicant does not plant his own crops.'
		]);

		Exceptions::create([
			'title' => 'harvestOwn',
			'message'	=>	'Applicant does not harvest his own crop.'
		]);

		Exceptions::create([
			'title' => 'equipmentObligations',
			'message'	=>	'Applicant does not have all equipment obligations met.'
		]);

		Exceptions::create([
			'title' => 'cashOutlayProvisions',
			'message'	=>	'Applicant has not made provisions for all cash outlays.'
		]);

		Exceptions::create([
			'title' => 'fsaGoodStanding',
			'message'	=>	'Applicant is not in good standing with FSA.'
		]);

		Exceptions::create([
			'title' => 'fmaGoodStanding',
			'message'	=>	'Applicant is not in good standing with Federal Crop Insurance (RMA).'
		]);

		Exceptions::create([
			'title' => 'pastDuePremiums',
			'message'	=>	'Applicant has Crop Insurance premiums past due.'
		]);

		Exceptions::create([
			'title' => 'isDefendant',
			'message'	=>	'Applicant is defendant in legal actions.'
		]);

		Exceptions::create([
			'title' => 'outstandingJudgement',
			'message'	=>	'Applicant has judgements outstanding.'
		]);

		Exceptions::create([
			'title' => 'bankruptcyHistory',
			'message'	=>	'Applicant has been previously involved in a bankruptcy.'
		]);

		Exceptions::create([
			'title' => 'bankruptcyOrder',
			'message'	=>	'This loan requires a Banruptcy Order to incur debt.'
		]);

		Exceptions::create([
			'title' => 'outstandingLiens',
			'message'	=>	'There are outstanding liens on the mortgaged crop.'
		]);

		Exceptions::create([
			'title' => 'contractualObligations',
			'message'	=>	'There are outstanding contractual obligations.'
		]);

		Exceptions::create([
			'title' => 'notGradeA',
			'message'	=>	"Applicant is rated less than as an 'A'"
		]);

		Exceptions::create([
			'title' => 'thirdPartyCredit',
			'message'	=>	'Third Party Credit other than Interest was utilized.'
		]);

		Exceptions::create([
			'title' => 'bookedCrops',
			'message'	=>	'More crop was booked than was insured (acres x APH x level)'
		]);

		Exceptions::create([
			'title' => 'producesPeanuts',
			'message'	=>	'This loan includes the production of peanuts.'
		]);

		Exceptions::create([
			'title' => 'producesSugarCane',
			'message'	=>	'This loan includes the production of sugar cane.'
		]);

		Exceptions::create([
			'title' => 'yieldHistory',
			'message'	=>	'No actual yield history existed - T-yield was used'
		]);

		Exceptions::create([
			'title' => 'cashRentWaivers',
			'message'	=>	'Cash Rent waivers were utilized.'
		]);

		Exceptions::create([
			'title' => 'variableHarvesting',
			'message'	=>	'Variable harvesting expenses was utilized.'
		]);

		Exceptions::create([
			'title' => 'rentExpenses',
			'message'	=>	'Certain farms have no rent expense allocated.'
		]);

		Exceptions::create([
			'title' => 'cropBreakEven',
			'message'	=>	'Applicant has yield history that is less than break-even'
		]);

		Exceptions::create([
			'title' => 'nonstandardDueDate',
			'message'	=>	'Due Date is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardCropDiscount',
			'message'	=>	'Projected crops discount rate used is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardFsaAssignment',
			'message'	=>	'FSA assignment discount rate used is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardCropInsuranceDiscount',
			'message'	=>	'Crop Insurance discount rate used is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardEquipmentDiscount',
			'message'	=>	'Equipment discount rate used is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardRealEstateDiscount',
			'message'	=>	'Real-Estate discount rate used is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardClaimsDiscount',
			'message'	=>	'Claims discount rate used is non-standard.'
		]);

		Exceptions::create([
			'title' => 'nonstandardServiceFee',
			'message'	=>	'Service Fee is non-standard'
		]);

		Exceptions::create([
			'title' => 'serviceFeeNotOnTotal',
			'message'	=>	'Service Fee is not charged on the total commitment.'
		]);

		Exceptions::create([
			'title' => 'nonstandardProcessingFee',
			'message'	=>	'Processing Fee is non-standard'
		]);

		Exceptions::create([
			'title' => 'processingFeeNotOnTotal',
			'message'	=>	'Processing Fee is not charged on the total commitment'
		]);

		Exceptions::create([
			'title' => 'nonstandardArmInterest',
			'message'	=>	'ARM Interest Rate is non-standard.'
		]);

		Exceptions::create([
			'title' => 'differingInterestRates',
			'message'	=>	'ARM Interest Rate and Distributor Interest Rate are not the same.'
		]);

		Exceptions::create([
			'title' => 'nonRPInsurance',
			'message'	=>	'Crop Insurance other than RP is being used.'
		]);

		Exceptions::create([
			'title' => 'cropInsuranceShare',
			'message'	=>	'Crop Insurance share used is greater than the applicants share of operation'
		]);

		Exceptions::create([
			'title' => 'wholeFarmExpenses',
			'message'	=>	'Whole farm expenses have been utilized and not directly allocated for each crop.'
		]);

		Exceptions::create([
			'title' => 'noGuarantors',
			'message'	=>	'Personal Guarantees are being relied upon by this loan.'
		]);

		Exceptions::create([
			'title' => 'equipmentCollateral',
			'message'	=>	'This loan relies upon equipment as collateral.'
		]);

		Exceptions::create([
			'title' => 'realEstateCollateral',
			'message'	=>	'This loan relies upon real estate as collateral.'
		]);

		Exceptions::create([
			'title' => 'insuranceClaimCollateral',
			'message'	=>	'This loan relies upon outstanding Crop Insurance Claims as collateral.'
		]);

		Exceptions::create([
			'title' => 'negativeCashFlow',
			'message'	=>	'Loan has negative cash flow.'
		]);

		Exceptions::create([
			'title' => 'riskMargin',
			'message'	=>	"Loan's Risk Margin is less than 5% or Loans Risk Margin is less than 0."
		]);

		Exceptions::create([
			'title' => 'insufficientValueARM',
			'message'	=>	'The crop insurance forecaset plus FSA payments do not exceed the value of ARM Commitment.'
		]);

		Exceptions::create([
			'title' => 'insufficientValueTotal',
			'message'	=>	'The crop insurance forecast plus FSA payments do not exceed the value of Total Commitment'
		]);

		Exceptions::create([
			'title' => 'balanceSheetLessArm',
			'message'	=>	"The balance sheet shows less Net Worth than the ARM Commitment"
		]);

		Exceptions::create([
			'title' => 'balanceSheetNetWorth',
			'message'	=>	"The Balance Sheet shows negative net worth."
		]);

		Exceptions::create([
			'title' => 'crossCollateralized',
			'message'	=>	'This is a cross-collateralized loan.'
		]);

		Exceptions::create([
			'title' => 'controlledDisbursment',
			'message'	=>	'This is a controlled disbursement loan.'
		]);
	}
}