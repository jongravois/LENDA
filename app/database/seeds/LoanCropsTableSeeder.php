<?php

class LoanCropsTableSeeder extends Seeder {
	public function run()
	{
		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 1,
			'name' => 'corn',
			'acres' => 347.4,
			'tea' => 750,
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
			'name' => 'soybeans',
			'acres' => 580.3,
			'tea' => 450,
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
			'crop_id' => 3,
			'name' => 'sorghum',
			'tea' => 375
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 4,
			'name' => 'wheat',
			'tea' => 360
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 5,
			'name' => 'cotton',
			'tea' => 540
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 6,
			'name' => 'rice',
			'tea' => 750
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 7,
			'name' => 'peanuts',
			'tea' => 750
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 8,
			'name' => 'sugarcane',
			'tea' => 750
		]);

	}
}