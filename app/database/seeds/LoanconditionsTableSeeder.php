<?php

class LoanconditionsTableSeeder extends Seeder {

	public function run()
	{
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	1,
			'condition'	=>	'Agricultural Security Agreement on Crops and Equipment',
			'status' => 'verified',
			'action_date' => '2015-02-01'
		]);
		Loanconditions::create([
			'crop_year'	=>	'2015',
			'loan_id'	=>	'1',
			'condition_id'	=>	2,
			'condition'	=>	'Assignment of Crop Insurance',
			'status' => 'verified',
			'action_date' => '2015-02-03'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	5,
			'condition'	=>	'Approval by Participating Distributor - JSI',
			'status' => 'verified',
			'action_date' => '2015-02-05'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	6,
			'condition'	=>	'Personal Guarantee by Bo Gwin'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	6,
			'condition'	=>	'Personal Guarantee by Sharon Gwin',
			'status' => 'verified',
			'action_date' => '2015-02-01'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	4,
			'condition'	=>	'Assignment of FSA Direct and LDP Payment',
			'status' => 'verified',
			'action_date' => '2015-02-03'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	10,
			'condition'	=>	'PHI Credit Limit of 82K',
			'status' => 'verified',
			'action_date' => '2015-02-06'
		]);

		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	7,
			'condition_id'	=>	1,
			'condition'	=>	'Agricultural Security Agreement on Crops and Equipment',
			'status' => 'verified',
			'action_date' => '2015-02-01'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	7,
			'condition_id'	=>	9,
			'condition'	=>	'Grain Storage Agreement',
			'status' => 'verified',
			'action_date' => '2015-02-01'
		]);
	}
}