<?php

class LoanquestionsTableSeeder extends Seeder {

	public function run()
	{
		Loanquestions::create([
			'loan_id' 	=> 	1,
			'amount_requested' => 75000,
			'plant_own'		=>	1,
			'harvest_own'	=>	1,
			'equip_obligations'	=>	1,
			'other_cash'	=>	1,
			'fsa_good'		=>	1,
			'fci_good'		=>	1,
			'premiums_past'	=>	1,
			'legal_defendant'	=>	0,
			'judgements'		=>	0,
			'bankruptcy'	=>	0,
			'liens'			=>	0,
			'fsa_direct_pay'	=>	0,
			'future_liabilities'	=>	1,
			'credit_3p_available'	=>	0,
			'income_percent'		=>	100,
			'distributor'		=>	'JSI',
			'agency'			=>	'State Farm of Monroe',
			'pesticide_number'	=>	'2T23765',
			'credit_score'	=>	730,
			'cpa_financials'	=>	1,
			'affiliated_entities'	=>	'Rutrum mi libero hymenaeos dolor posuere montes tristique litora cubilia.',
			'farm_supplier_creditors'	=>	'Rutrum mi libero hymenaeos dolor posuere montes tristique litora cubilia.'
		]);

		Loanquestions::create([
			'loan_id' 	=> 	2,
			'amount_requested' => 35000
		]);

	}
}