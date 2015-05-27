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
			'overbook' => 0,
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
			'acres' => 558,
			'is_active' => 1,
			'markettowhom' => 'CropsRUs',
			'prod_price' => 10.0,
			'prod_yield' => 36.7,
			'prod_share' => 80.69,
			'bkqty' => 0,
			'overbook' => 0,
			'bkprice' => 0,
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
            'acres' => 22.3,
            'is_active' => 1,
            'markettowhom' => 'CropsRUs',
            'prod_price' => 10.0,
            'prod_yield' => 36.7,
            'prod_share' => 80.69,
            'bkqty' => 0,
            'bkprice' => 0,
            'overbook' => 0,
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

        Loancrop::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'crop_id' => 9,
			'uom' => 'ton',
			'uom_harvest' => 'ton',
			'uom_rebate' => 'ton'
        ]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 10
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
			'crop_id' => 6,
			'uom' => 'lb',
			'uom_harvest' => 'lb',
			'uom_rebate' => 'lb'
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

        Loancrop::create([
            'crop_year' => 2015,
            'loan_id' => 2,
            'crop_id' => 9,
			'uom' => 'ton',
			'uom_harvest' => 'ton',
			'uom_rebate' => 'ton'
        ]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'crop_id' => 10
		]);

		// Loan #9
		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 1,
			'acres' => 1000,
			'is_active' => 1,
			'markettowhom' => 'CropsRUs',
			'prod_price' => 4.00,
			'prod_yield' => 200,
			'prod_share' => 80,
			'p1_yield' => null,
			'p2_yield' => null,
			'p3_yield' => null,
			'p4_yield' => null,
			'p5_yield' => null,
			'p6_yield' => null
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 2,
			'acres' => 1000,
			'is_active' => 1,
			'markettowhom' => 'CropsRUs',
			'prod_price' => 9.25,
			'prod_yield' => 50,
			'prod_share' => 80,
			'p1_yield' => null,
			'p2_yield' => null,
			'p3_yield' => null,
			'p4_yield' => null,
			'p5_yield' => null,
			'p6_yield' => null
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 3
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 4
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 5
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 6,
			'uom' => 'lb',
			'uom_harvest' => 'lb',
			'uom_rebate' => 'lb'
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 7
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 8
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 9,
			'uom' => 'ton',
			'uom_harvest' => 'ton',
			'uom_rebate' => 'ton'
		]);

		Loancrop::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'crop_id' => 10
		]);
    }
}