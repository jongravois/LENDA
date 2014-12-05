<?php

class CropsTableSeeder extends Seeder{

	public function run()
	{
		Crop::create([
			'crop'  				=>  'corn',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Crop::create([
			'crop'  				=>  'soybeans',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Crop::create([
			'crop'  				=>  'sorghum',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Crop::create([
			'crop'  				=>  'wheat',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Crop::create([
			'crop'  				=>  'cotton',
			'measurement'			=>	'lb',
			'rebate_measurement'	=>	'lb'
		]);

		Crop::create([
			'crop'  				=>  'rice',
			'measurement'			=>	'lb',
			'rebate_measurement'	=>	'bu'
		]);

		Crop::create([
			'crop'  				=>  'peanuts',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Crop::create([
			'crop'  				=>  'sugar cane',
			'measurement'			=>	'ton',
			'rebate_measurement'	=>	'ton'
		]);
	}

}