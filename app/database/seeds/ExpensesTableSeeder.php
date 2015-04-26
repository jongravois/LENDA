<?php

class ExpensesTableSeeder extends Seeder {

	public function run()
	{
		Expenses::create([
			'crop_id'	=>	1,
			'loancrop_id'	=>	1,
			"crop_acres" =>	347.4,
			'fertilizer_dist_acre'	=>	164.97,
			'seed_other_acre'	=>	115,
			'herbicide_dist_acre'	=>	32.94,
			'custom_arm_acre'	=>	18,
			'fuel_arm_acre'	=>	40,
			'labor_arm_acre'	=>	20,
			'repairs_arm_acre'	=>	20,
			'insurance_other_acre'	=>	11.88,
			'misc_acre_arm_acre'	=>	20
		]);

		Expenses::create([
			'crop_id'	=>	2,
			'loancrop_id'	=>	2,
			'crop_acres' => 558,
			'fertilizer_dist_acre'	=>	26.50,
			'seed_other_acre'	=>	60,
			'fungicide_dist_acre'	=>	12.50,
			'insecticide_dist_acre' => 10.67,
			'herbicide_dist_acre'	=>	20.06,
			'custom_arm_acre'	=>	22,
			'fuel_arm_acre'	=>	30,
			'labor_arm_acre'	=>	20,
			'repairs_arm_acre'	=>	10,
			'insurance_other_acre'	=>	14.35,
			'misc_acre_arm_acre'	=>	20
		]);

        Expenses::create([
            'crop_id'	=>	3,
            'loancrop_id'	=>	3,
            'crop_acres' => 22.3,
            'fertilizer_dist_acre'	=>	26.50,
            'seed_other_acre'	=>	60,
            'fungicide_dist_acre'	=>	12.50,
            'insecticide_dist_acre' => 10.67,
            'herbicide_dist_acre'	=>	20.06,
            'custom_arm_acre'	=>	22,
            'fuel_arm_acre'	=>	30,
            'labor_arm_acre'	=>	20,
            'repairs_arm_acre'	=>	10,
            'insurance_other_acre'	=>	14.35,
            'misc_acre_arm_acre'	=>	20
        ]);
	}

}
