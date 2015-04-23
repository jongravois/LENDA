<?php

class CropdetailsTableSeeder extends Seeder {
	public function run()
	{
		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'is_active' => 1,
			'total_acres' => 347.4,
			'ni' => 1,
			'facni' => 1,
			'towhom_market' => 'CropsRUs',
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'prod_share' => 84.4,
			'break_even' => 102.8,
			'p1_yield' => 151.0,
			'p2_yield' => 176.0,
			'p3_yield' => 130.0,
			'p4_yield' => 121.0,
			'p5_yield' => 157.3,
			'p6_yield' => 124.5,
			'percent_irrigated' => 90.5
		]);

		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'is_active' => 1,
			'total_acres' => 558,
			'ni' => 1,
			'faci' => 1,
			'towhom_market' => 'CropsRUs',
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'prod_share' => 80.69,
			'break_even' => 26.1,
			'p1_yield' => 31.0,
			'p2_yield' => 36.0,
			'p3_yield' => 43.0,
			'p4_yield' => 21.0,
			'p5_yield' => 26.0,
			'percent_irrigated' => 92.3
		]);

        Cropdetails::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'is_active' => 1,
            'total_acres' => 22.3,
            'ni' => 1,
            'faci' => 1,
            'towhom_market' => 'CropsRUs',
            'prod_yield' => 21.7,
            'prod_price' => 10.0000,
            'prod_share' => 80,
            'break_even' => 26.1,
            'p1_yield' => 31.0,
            'p2_yield' => 36.0,
            'p3_yield' => 43.0,
            'p4_yield' => 21.0,
            'p5_yield' => 26.0,
            'percent_irrigated' => 100
        ]);

        Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 4
		]);

		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 5
		]);

		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 6
		]);

		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 7
		]);

		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 8
		]);

		Cropdetails::create([
			'loan_id' => 1,
			'crop_id' => 9
		]);
	}

}