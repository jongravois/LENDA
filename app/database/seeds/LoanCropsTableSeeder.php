<?php

class LoanCropsTableSeeder extends Seeder {
	public function run()
	{
		// LOAN #1
		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 1,
			'acres' => 347.4,
			'is_active' => 1,
			'markettowhom' => 'CropsRUs',
			'prod_price' => 4.20,
			'prod_yield' => 152.3,
			'prod_share' => 84.4,
			'bkqty' => 0,
			'bkprice' => 0,
			'gin_mill' => null,
			'harvest' => 0,
			'rebates' => 0,
			'fsa_payment' => 0,
			'percent_irrigated' => 90.5,
			'break_even' => 102.8,
			//'uom' => 'bu',
			//'uom_rebate' => 'bu',
			'p1_yield' => 151.0,
			'p2_yield' => 176.0,
			'p3_yield' => 130.0,
			'p4_yield' => 121.0,
			'p5_yield' => 153.7,
			'p6_yield' => 124.5
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 2,
			'acres' => 580.3,
			'is_active' => 1,
			'markettowhom' => 'CropsRUs',
			'prod_price' => 10.0,
			'prod_yield' => 36.7,
			'prod_share' => 80.69,
			'bkqty' => 0,
			'bkprice' => 0,
			'gin_mill' => null,
			'harvest' => 0,
			'rebates' => 0,
			'fsa_payment' => 0,
			'percent_irrigated' => 92.3,
			'break_even' => 26.1,
			'p1_yield' => 31.0,
			'p2_yield' => 36.0,
			'p3_yield' => 43.0,
			'p4_yield' => 21.0,
			'p5_yield' => 26.0
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 3
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 4
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 5
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 6
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 7
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 8
		]);

		//LOAN #2
		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 1
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 2
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 3,
			'is_active' => 1,
			'acres' => 435
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 4
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 5
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 6
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 7
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 8,
			'is_active' => 1,
			'acres' => 4500
		]);

	}
}