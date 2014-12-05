<?php

class AdmingraderTableSeeder extends Seeder {

	public function run()
	{
		Admingrader::create([
			'grade' => 'A',
			'debt2asset' => 50,
			'current_ratio' => 150,
			'working_capital' => 20,
			'borrowing_capacity' => 50,
			'years_farming' => 5,
			'credit_score' => 740,
			'cpa_financials' => 1,
			'bankruptcy' => 0,
			'judgement' => 0,
			'all_max_loan' => 10000000,
			'ag_pro_max_loan' => 1000000,
			'capital_bridge_max_loan' => 1000000,
			'ag_vest_max_loan' => 1000000,
			'ag_pro_max_rate' => 50,
			'capital_bridge_max_rate' => 35,
			'ag_vest_max_rate' => 35
		]);

		Admingrader::create([
			'grade' => 'B',
			'debt2asset' => 67,
			'current_ratio' => 100,
			'working_capital' => 0,
			'borrowing_capacity' => 20,
			'years_farming' => 5,
			'credit_score' => 700,
			'cpa_financials' => 0,
			'bankruptcy' => 0,
			'judgement' => 0,
			'all_max_loan' => 5000000,
			'ag_pro_max_loan' => 500000,
			'capital_bridge_max_loan' => 500000,
			'ag_vest_max_loan' => 500000,
			'ag_pro_max_rate' => 50,
			'capital_bridge_max_rate' => 30,
			'ag_vest_max_rate' => 30
		]);

		Admingrader::create([
			'grade' => 'C',
			'debt2asset' => 80,
			'current_ratio' => 67,
			'working_capital' => -20,
			'borrowing_capacity' => 10,
			'years_farming' => 3,
			'credit_score' => 680,
			'cpa_financials' => '',
			'bankruptcy' => 0,
			'judgement' => 0,
			'all_max_loan' => 1000000,
			'ag_pro_max_loan' => 0,
			'capital_bridge_max_loan' => 0,
			'ag_vest_max_loan' => 0,
			'ag_pro_max_rate' => 0,
			'capital_bridge_max_rate' => 25,
			'ag_vest_max_rate' => 25
		]);

		Admingrader::create([
			'grade' => 'D',
			'debt2asset' => 100,
			'current_ratio' => 50,
			'working_capital' => -50,
			'borrowing_capacity' => 0,
			'years_farming' => 2,
			'credit_score' => 600,
			'cpa_financials' => '',
			'bankruptcy' => 1,
			'judgement' => 1,
			'all_max_loan' => 0,
			'ag_pro_max_loan' => 0,
			'capital_bridge_max_loan' => 0,
			'ag_vest_max_loan' => 0,
			'ag_pro_max_rate' => 0,
			'capital_bridge_max_rate' => 0,
			'ag_vest_max_rate' => 0
		]);
	}

}