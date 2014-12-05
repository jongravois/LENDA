<?php

class ExceptionsTableSeeder extends Seeder {

	public function run()
	{
		Exceptions::create([
			'message'	=>	'This is an Ag-Input loan type where ARM and the destibutor are partnering on the total commitment.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant is rated as a "B."'
		]);

		Exceptions::create([
			'message'	=>	'Applicant is repeat customer.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant has outstanding loans at ARM.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant utilized loan addendums in previous year:'
		]);

		Exceptions::create([
			'message'	=>	'Personal Guarantys are being relied upon by this loan.'
		]);

		Exceptions::create([
			'message'	=>	'This is a cross-collateralized loan.'
		]);

		Exceptions::create([
			'message'	=>	'This is a controlled disbursements loan.'
		]);

		Exceptions::create([
			'message'	=>	'Cash Rent waivers were utilized.'
		]);

		Exceptions::create([
			'message'	=>	'Third Party Credit other than Interest was utilized.'
		]);

		Exceptions::create([
			'message'	=>	'Variable harvesting expenses was utilized.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant has less than 3 years of farming history.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant does not plant his own crops.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant does not harvest his own crop.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant does not have all equipment obligations met.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant has not made provisions for all cash outlays.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant is not in good standing with FSA.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant is not in good standing with Federal Crop Insurance (RMA).'
		]);

		Exceptions::create([
			'message'	=>	'Applicant has Crop Insurance premiums past due.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant is defendant in legal actions.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant has judgements outstanding.'
		]);

		Exceptions::create([
			'message'	=>	'Applicant has been previously involved in a bankruptcy.'
		]);

		Exceptions::create([
			'message'	=>	'This loan requires a Banruptcy Order to incur debt.'
		]);

		Exceptions::create([
			'message'	=>	'There are outstanding liens on the mortgaged crop.'
		]);

		Exceptions::create([
			'message'	=>	'There are outstanding contractual obligations.'
		]);

		Exceptions::create([
			'message'	=>	'This loan includes the production of peanuts.'
		]);

		Exceptions::create([
			'message'	=>	'
This loan includes the production of sugar cane.'
		]);

		Exceptions::create([
			'message'	=>	'
No actual yield history existed - T-yield was used for corn.'
		]);

		Exceptions::create([
			'message'	=>	'
Certain farms have no rent expense allocated.'
		]);

		Exceptions::create([
			'message'	=>	'
Whole farm expenses have been utilized and not directly allocated for each crop.'
		]);

		Exceptions::create([
			'message'	=>	'
Crop Insurance other than RP is being used.'
		]);

		Exceptions::create([
			'message'	=>	'
Crop Insurance share used is greater than the applicants share of operation: corn…'
		]);

		Exceptions::create([
			'message'	=>	'
More crop was booked than was insured (acres x APH x level) - corn…'
		]);

		Exceptions::create([
			'message'	=>	'
This loan relies upon equipment as collateral.'
		]);

		Exceptions::create([
			'message'	=>	'
This loan relies upon Real Estate as collateral.'
		]);

		Exceptions::create([
			'message'	=>	'
This loan relies upon outstanding Crop Insurance Claims as collateral.'
		]);

		Exceptions::create([
			'message'	=>	'
Projected crops discount rate used is non-standard.'
		]);

		Exceptions::create([
			'message'	=>	'
FSA assignment discount rate used is non standard.'
		]);

		Exceptions::create([
			'message'	=>	'
Crop Insurance discount rate used is non-standard.'
		]);

		Exceptions::create([
			'message'	=>	'
Equipment discount rate used is non-standard.'
		]);

		Exceptions::create([
			'message'	=>	'
Real-Estate discount rate used is non-standard.'
		]);

		Exceptions::create([
			'message'	=>	'
Claims discount rate used is non-standard.'
		]);

		Exceptions::create([
			'message'	=>	'
Loan has negative cash flow.'
		]);

		Exceptions::create([
			'message'	=>	'
Applicant has yield history that is less than break-even for corn….'
		]);

		Exceptions::create([
			'message'	=>	"
Loan's Risk Margin is less than 5% or Loans Risk Margin is less than 0."
		]);

		Exceptions::create([
			'message'	=>	'
The forecrasted crop insurance plus FSA payments do not exceed the value of Total Commitment or The forecrasted crop insurance plus FSA payments do not exceed the value of ARM Commitment.'
		]);

		Exceptions::create([
			'message'	=>	"
The balance sheet shows less Net Worth than the ARM Commitment or The Balance Sheet shows negative net worth."
		]);

		Exceptions::create([
			'message'	=>	'
Service Fee is non-standard (this includes rate and/or is not charged on the total commitment).'
		]);

		Exceptions::create([
			'message'	=>	'
Processing Fee is non-standard (this includes rate and/or is not charged on the total commitment).'
		]);

		Exceptions::create([
			'message'	=>	'
ARM Interest Rate is non-standard.'
		]);

		Exceptions::create([
			'message'	=>	'
ARM Interest Rate and Distributer Interest Rate are not the same.'
		]);

		Exceptions::create([
			'message'	=>	'
Due Date is non-standard.'
		]);
	}
}