<?php

class CroppracticesTableSeeder extends Seeder{

	public function run()
	{
		Croppractice::create([
			'crop_id' => 1,
			'croppractice' => 'Corn IR',
			'crop' => 'corn',
			'practice' =>	'IR',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 1,
			'croppractice' => 'Corn NI',
			'crop' => 'corn',
			'practice' =>	'NI',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 2,
			'croppractice' => 'Soybeans IR',
			'crop' => 'soybeans',
			'practice' =>	'IR',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 2,
			'croppractice' => 'Soybeans NI',
			'crop' => 'soybeans',
			'practice' => 'NI',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 3,
			'croppractice' =>	'FAC Beans IR',
			'crop' => 'fac beans',
			'practice' =>	'IR',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 3,
			'croppractice' => 'FAC Beans NI',
			'crop' => 'fac beans',
			'practice' => 'NI',
			'measurement' => 'bu',
			'rebate_measurement' =>	'bu'
		]);

		Croppractice::create([
			'crop_id' => 3,
			'croppractice' => 'Sorghum IR',
			'crop' => 'sorghum',
			'practice' => 'IR',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 3,
			'croppractice' => 'Sorghum NI',
			'crop' => 'sorghum',
			'practice' => 'NI',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 4,
			'croppractice' => 'Wheat IR',
			'crop' => 'wheat',
			'practice' => 'IR',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 4,
			'croppractice' => 'Wheat NI',
			'crop' =>  'wheat',
			'practice' => 'NI',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 5,
			'croppractice' =>	'Cotton IR',
			'crop' => 'cotton',
			'practice' => 'IR',
			'measurement' => 'lb',
			'rebate_measurement' => 'lb'
		]);

		Croppractice::create([
			'crop_id' => 5,
			'croppractice' => 'Cotton NI',
			'crop' => 'cotton',
			'practice' => 'NI',
			'measurement' => 'lb',
			'rebate_measurement' => 'lb'
		]);

		Croppractice::create([
			'crop_id' => 6,
			'croppractice' => 'Rice IR',
			'crop' => 'rice',
			'practice' => 'IR',
			'measurement' => 'lb',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 6,
			'croppractice' => 'Rice NI',
			'crop' => 'rice',
			'practice' => 'NI',
			'measurement' => 'lb',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 7,
			'croppractice' => 'Peanuts IR',
			'crop' => 'peanuts',
			'practice' => 'IR',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' =>  7,
			'croppractice' =>	'Peanuts NI',
			'crop' => 'peanuts',
			'practice' => 'NI',
			'measurement' => 'bu',
			'rebate_measurement' => 'bu'
		]);

		Croppractice::create([
			'crop_id' => 8,
			'croppractice' =>	'Sugarcane IR',
			'crop' =>  'sugarcane',
			'practice' =>	'IR',
			'measurement' => 'ton',
			'rebate_measurement' => 'ton'
		]);

		Croppractice::create([
			'crop_id' => 8,
			'croppractice' => 'Sugarcane NI',
			'crop' => 'sugarcane',
			'practice' => 'NI',
			'measurement' => 'ton',
			'rebate_measurement' => 'ton'
		]);
	}

}