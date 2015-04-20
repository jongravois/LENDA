<?php

class CropsTableSeeder extends Seeder{

	public function run()
	{
		Crop::create([
			'crop' => 'corn',
			'name' => 'Corn',
			'tea' => 750,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu',
            'arm_default_price' => 5.11,
            'arm_default_ins_price' => 4.92,
            'arm_default_yield' => 139
		]);

		Crop::create([
			'crop' => 'soybeans',
			'name' => 'Soybeans',
			'tea' => 450,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu',
            'arm_default_price' => 11.00,
            'arm_default_ins_price' => 9.70,
            'arm_default_yield' => 28
		]);

        Crop::create([
            'crop' => 'beansFAC',
            'name' => 'BeansFAC',
            'tea' => 450,
            'measurement' => 'bu',
            'rebate_measurement' => 'bu',
            'arm_default_price' => 11.00,
            'arm_default_ins_price' => 9.70,
            'arm_default_yield' => 28
        ]);

        Crop::create([
			'crop' => 'sorghum',
			'name' => 'Sorghum',
			'tea' => 375,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu',
            'arm_default_price' => 4.21,
            'arm_default_ins_price' => 4.00,
            'arm_default_yield' => 55
		]);

		Crop::create([
			'crop' => 'wheat',
			'name' => 'Wheat',
			'tea' => 360,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu',
            'arm_default_price' => 6.64,
            'arm_default_ins_price' => 5.75,
            'arm_default_yield' => 48
		]);

		Crop::create([
			'crop' => 'cotton',
			'name' => 'Cotton',
			'tea' => 540,
			'measurement' => 'lb',
			'rebate_measurement' => 'lb',
            'arm_default_price' => 93,
            'arm_default_ins_price' => 90,
            'arm_default_yield' => 649
		]);

		Crop::create([
			'crop' => 'rice',
			'name' => 'Rice',
			'tea' => 750,
			'measurement' => 'lb',
			'rebate_measurement' => 'bu',
            'arm_default_price' => 0.135,
            'arm_default_ins_price' => 0.14,
            'arm_default_yield' => 5820
		]);

		Crop::create([
			'crop' => 'peanuts',
			'name' => 'Peanuts',
			'tea' => 750,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu',
            'arm_default_price' => 2.3,
            'arm_default_ins_price' => 2.8,
            'arm_default_yield' => 3000
		]);

		Crop::create([
			'crop' => 'sugarcane',
			'name' => 'Sugar Cane',
			'tea' => 750,
			'measurement' => 'ton',
			'rebate_measurement' => 'ton',
            'arm_default_price' => 0.28,
            'arm_default_ins_price' => 0.16,
            'arm_default_yield' => 5133
		]);
	}

}