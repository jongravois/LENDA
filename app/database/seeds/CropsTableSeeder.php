<?php

class CropsTableSeeder extends Seeder{

	public function run()
	{
		Crop::create([
			'crop' => 'corn',
			'tea' => 750,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Crop::create([
			'crop' => 'soybeans',
			'tea' => 450,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Crop::create([
			'crop' => 'sorghum',
			'tea' => 375,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Crop::create([
			'crop' => 'wheat',
			'tea' => 360,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Crop::create([
			'crop' => 'cotton',
			'tea' => 540,
			'measurement' => 'lb',
			'rebate_measurement' => 'lb'
		]);

		Crop::create([
			'crop' => 'rice',
			'tea' => 750,
			'measurement' => 'lb',
			'rebate_measurement' => 'bu'
		]);

		Crop::create([
			'crop' => 'peanuts',
			'tea' => 750,
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Crop::create([
			'crop' => 'sugar cane',
			'tea' => 750,
			'measurement' => 'ton',
			'rebate_measurement' => 'ton'
		]);
	}

}