<?php

class FarmcropsTableSeeder extends Seeder {

	public function run()
	{
		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'farm_id' => 1,
			'crop_id' => 1,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 4.2500,
			'ins_yield' => 96.0,
			'ins_premium' => 11.88,
			'irr' => 0,
			'ni' => 28,
			'prod_yield' =>	152.3,
			'prod_price' =>	4.2000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'farm_id' => 4,
			'crop_id' => 1,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 4.4000,
			'ins_yield' => 130.0,
			'ins_premium' => 11.88,
			'ins_share' => 80,
			'prod_share' =>	80,
			'irr' => 90,
			'ni' => 0,
			'prod_yield' =>	152.3,
			'prod_price' =>	4.2000
		]);

		Farmcrops::create([
			'crop_year' =>	2015,
			'loan_id' =>	2,
			'farm_id' =>	6,
			'crop_id' =>	1,
			'towhom_market' => 'CropsRUs',
			'ins_price' =>	4.2500,
			'ins_yield' =>	149.0,
			'ins_premium' => 11.88,
			'irr' => 48.4,
			'ni' =>	0,
			'prod_yield' =>	152.3,
			'prod_price' =>	4.2000
		]);

		Farmcrops::create([
			'crop_year'  =>	2015,
			'loan_id' => 2,
			'farm_id' => 7,
			'crop_id' => 1,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 4.4000,
			'ins_yield' => 141.0,
			'ins_premium' => 11.88,
			'ins_share' => 80,
			'prod_share' =>	80,
			'irr' => 181.0,
			'ni' => 0,
			'prod_yield' =>	152.3,
			'prod_price' =>	4.2000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'farm_id' => 2,
			'crop_id' => 2,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 11.2500,
			'ins_yield' => 21.0,
			'ins_premium' => 14.35,
			'irr' => 0,
			'ni' => 20.0,
			'prod_yield' =>	36.7,
			'prod_price' =>	10.0000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'farm_id' => 3,
			'crop_id' => 2,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 11.2500,
			'ins_yield' => 23.0,
			'ins_premium' => 14.35,
			'ins_share' => 80,
			'prod_share' =>	80,
			'irr' => 0,
			'ni' =>	20.0,
			'prod_yield' =>	36.7,
			'prod_price' =>	10.0000
		]);

		Farmcrops::create([
			'crop_year' =>	2015,
			'loan_id' => 2,
			'farm_id' => 4,
			'crop_id' => 2,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 11.2500,
			'ins_yield' => 33.0,
			'ins_premium' => 14.35,
			'ins_share' => 80,
			'prod_share' =>	80,
			'irr' => 234.0,
			'ni' =>	0,
			'prod_yield' =>	36.7,
			'prod_price' =>	10.0000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'farm_id' => 5,
			'crop_id' => 3,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 11.0200,
			'ins_yield' => 19.0,
			'ins_premium' => 16.35,
			'ins_share' => 80,
			'prod_share' =>	80,
			'irr' => 22.3,
			'ni' => 0,
			'prod_yield' =>	36.7,
			'prod_price' =>	10.0000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 2,
			'farm_id' => 7,
			'crop_id' => 2,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 11.2500,
			'ins_yield' => 42.0,
			'ins_premium' => 14.35,
			'ins_share' => 80,
			'prod_share' =>	80,
			'irr' => 284.0,
			'ni' =>	0,
			'prod_yield' =>	36.7,
			'prod_price' =>	10.0000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'farm_id' => 8,
			'crop_id' => 1,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 4.0500,
			'ins_yield' => 200.0,
			'ins_premium' => 20.00,
			'irr' => 0,
			'ni' => 1000,
			'prod_yield' =>	200,
			'prod_price' =>	4.0000
		]);

		Farmcrops::create([
			'crop_year' => 2015,
			'loan_id' => 9,
			'farm_id' => 8,
			'crop_id' => 2,
			'towhom_market' => 'CropsRUs',
			'ins_price' => 9.6200,
			'ins_yield' => 50.0,
			'ins_premium' => 20.00,
			'irr' => 0,
			'ni' => 1000,
			'prod_yield' =>	50,
			'prod_price' =>	9.2500
		]);

		//NEW LOAN #1
        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 9,
            'crop_id' => 5,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 0.6300,
            'ins_yield' => 850,
            'ins_premium' => 19.82,
            'ins_level' => 70,
            'irr' => 0,
            'ni' => 350,
            'prod_yield' =>	1050,
            'prod_price' =>	0.60
        ]);

        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 9,
            'crop_id' => 1,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 4.25,
            'ins_yield' => 200,
            'ins_premium' => 11.88,
            'ins_level' => 70,
            'irr' => 0,
            'ni' => 1000,
            'prod_yield' =>	96,
            'prod_price' =>	4.50
        ]);

        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 9,
            'crop_id' => 2,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 11.25,
            'ins_yield' => 42,
            'ins_level' => 70,
            'ins_premium' => 14.35,
            'irr' => 0,
            'ni' => 1000,
            'prod_yield' =>	50,
            'prod_price' =>	12.25
        ]);

        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 10,
            'crop_id' => 5,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 0.6300,
            'ins_yield' => 900,
            'ins_premium' => 19.82,
            'irr' => 0,
            'ni' => 50,
            'prod_yield' =>	1050,
            'prod_price' =>	.60
        ]);

        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 10,
            'crop_id' => 1,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 4.2500,
            'ins_yield' => 96.0,
            'ins_premium' => 11.88,
            'irr' => 0,
            'ni' => 1000,
            'prod_yield' =>	100,
            'prod_price' =>	4.25
        ]);

        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 11,
            'crop_id' => 5,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 0.6300,
            'ins_yield' => 950,
            'ins_premium' => 21.00,
            'irr' => 200,
            'ni' => 0,
            'prod_yield' =>	1050,
            'prod_price' =>	.60
        ]);

        Farmcrops::create([
            'crop_year' => 2015,
            'loan_id' => 1,
            'farm_id' => 12,
            'crop_id' => 5,
            'towhom_market' => 'CropsRUs',
            'ins_price' => 0.6300,
            'ins_yield' => 1000,
            'ins_premium' => 21,
            'irr' => 400,
            'ni' => 0,
            'prod_yield' =>	1050,
            'prod_price' =>	.60
        ]);



    }
}
