<?php

class LoanconditionsTableSeeder extends Seeder {

	public function run()
	{
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	1,
			'condition'	=>	'Agricultural Security Agreement on Crops and Equipment'
		]);
		Loanconditions::create([
			'crop_year'	=>	'2015',
			'loan_id'	=>	'1',
			'condition_id'	=>	2,
			'condition'	=>	'Assignment of Crop Insurance'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	4,
			'condition'	=>	'Approval by Participating Distributor - JSI'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	5,
			'condition'	=>	'Personal Guarantee by Bo Gwin'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	5,
			'condition'	=>	'Personal Guarantee by Sharon Gwin'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	9,
			'condition'	=>	'Assignment of FSA Direct and LDP Payment'
		]);
		Loanconditions::create([
			'crop_year'	=>	2015,
			'loan_id'	=>	1,
			'condition_id'	=>	7,
			'condition'	=>	'PHI Credit Limit of 82K Verified'
		]);
	}
}