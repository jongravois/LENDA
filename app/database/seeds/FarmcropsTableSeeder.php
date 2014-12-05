<?php

class FarmcropsTableSeeder extends Seeder {

	public function run()
	{
		// corn
		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	1,
			'crop_id'           =>	1,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	4.2500,
			'ins_yield'         =>	96.0,
			'ins_premium'       =>	11.88,
			'acres'             =>	28,
			'prod_yield'        =>	152.3,
			'prod_price'        =>	4.2000,
			'percent_irrigated' =>	0
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	4,
			'crop_id'           =>	1,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	4.4000,
			'ins_yield'         =>	130.0,
			'ins_premium'       =>	11.88,
			'ins_share'			=>	80,
			'prod_share'		=>	80,
			'acres'             =>	90,
			'prod_yield'        =>	152.3,
			'prod_price'        =>	4.2000,
			'percent_irrigated' =>	100
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	6,
			'crop_id'           =>	1,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	4.2500,
			'ins_yield'         =>	149.0,
			'ins_premium'       =>	11.88,
			'acres'             =>	48.4,
			'prod_yield'        =>	152.3,
			'prod_price'        =>	4.2000,
			'percent_irrigated' =>	100
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	7,
			'crop_id'           =>	1,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	4.4000,
			'ins_yield'         =>	141.0,
			'ins_premium'       =>	11.88,
			'ins_share'			=>	80,
			'prod_share'		=>	80,
			'acres'             =>	181.0,
			'prod_yield'        =>	152.3,
			'prod_price'        =>	4.2000,
			'percent_irrigated' =>	100
		]);

		// soybeans
		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	2,
			'crop_id'           =>	2,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	11.2500,
			'ins_yield'         =>	21.0,
			'ins_premium'       =>	14.35,
			'acres'             =>	20.0,
			'prod_yield'        =>	36.7,
			'prod_price'        =>	10.0000,
			'percent_irrigated' =>	0
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	3,
			'crop_id'           =>	2,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	11.2500,
			'ins_yield'         =>	23.0,
			'ins_premium'       =>	14.35,
			'ins_share'			=>	80,
			'prod_share'		=>	80,
			'acres'             =>	20.0,
			'prod_yield'        =>	36.7,
			'prod_price'        =>	10.0000,
			'percent_irrigated' =>	0
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	4,
			'crop_id'           =>	2,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	11.2500,
			'ins_yield'         =>	33.0,
			'ins_premium'       =>	14.35,
			'ins_share'			=>	80,
			'prod_share'		=>	80,
			'acres'             =>	234.0,
			'prod_yield'        =>	36.7,
			'prod_price'        =>	10.0000,
			'percent_irrigated' =>	100
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	5,
			'crop_id'           =>	2,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	11.2500,
			'ins_yield'         =>	26.0,
			'ins_premium'       =>	14.35,
			'ins_share'			=>	80,
			'prod_share'		=>	80,
			'acres'             =>	22.3,
			'prod_yield'        =>	36.7,
			'prod_price'        =>	10.0000,
			'percent_irrigated' =>	100
		]);

		Farmcrops::create([
			'crop_year'         =>	2015,
			'loan_id'           =>	1,
			'farm_id'           =>	7,
			'crop_id'           =>	2,
			'towhom_market' => 'CropsRUs',
			'ins_price'         =>	11.2500,
			'ins_yield'         =>	42.0,
			'ins_premium'       =>	14.35,
			'ins_share'			=>	80,
			'prod_share'		=>	80,
			'acres'             =>	284.0,
			'prod_yield'        =>	36.7,
			'prod_price'        =>	10.0000,
			'percent_irrigated' =>	100
		]);
	}
}
