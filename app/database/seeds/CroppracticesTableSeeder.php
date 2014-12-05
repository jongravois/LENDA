<?php

class CroppracticesTableSeeder extends Seeder{

	public function run()
	{
		Croppractice::create([
			'crop_id'  				=>  1,
			'croppractice'			=>	'Corn Irr',
			'crop'  				=>  'corn',
			'practice'				=>	'Irr',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  1,
			'croppractice'			=>	'Corn NI',
			'crop'  				=>  'corn',
			'practice'				=>	'NI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  2,
			'croppractice'			=>	'Soybeans Irr',
			'crop'  				=>  'soybeans',
			'practice'				=>	'Irr',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  2,
			'croppractice'			=>	'Soybeans NI',
			'crop'  				=>  'soybeans',
			'practice'				=>	'NI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  2,
			'croppractice'			=>	'Soybeans FACI',
			'crop'  				=>  'soybeans',
			'practice'				=>	'FACI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  2,
			'croppractice'			=>	'Soybeans FACNI',
			'crop'  				=>  'soybeans',
			'practice'				=>	'FACNI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  3,
			'croppractice'			=>	'Sorghum Irr',
			'crop'  				=>  'sorghum',
			'practice'				=>	'Irr',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  3,
			'croppractice'			=>	'Sorghum NI',
			'crop'  				=>  'sorghum',
			'practice'				=>	'NI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  4,
			'croppractice'			=>	'Wheat Irr',
			'crop'  				=>  'wheat',
			'practice'				=>	'Irr',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  4,
			'croppractice'			=>	'Wheat NI',
			'crop'  				=>  'wheat',
			'practice'				=>	'NI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  5,
			'croppractice'			=>	'Cotton Irr',
			'crop'  				=>  'cotton',
			'practice'				=>	'Irr',
			'measurement'			=>	'lb',
			'rebate_measurement'	=>	'lb'
		]);

		Croppractice::create([
			'crop_id'  				=>  5,
			'croppractice'			=>	'Cotton NI',
			'crop'  				=>  'cotton',
			'practice'				=>	'NI',
			'measurement'			=>	'lb',
			'rebate_measurement'	=>	'lb'
		]);

		Croppractice::create([
			'crop_id'  				=>  6,
			'croppractice'			=>	'Rice Irr',
			'crop'  				=>  'rice',
			'practice'				=>	'Irr',
			'measurement'			=>	'lb',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  6,
			'croppractice'			=>	'Rice NI',
			'crop'  				=>  'rice',
			'practice'				=>	'NI',
			'measurement'			=>	'lb',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  7,
			'croppractice'			=>	'Peanuts Irr',
			'crop'  				=>  'peanuts',
			'practice'				=>	'Irr',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  7,
			'croppractice'			=>	'Peanuts NI',
			'crop'  				=>  'peanuts',
			'practice'				=>	'NI',
			'measurement'			=>	'bu',
			'rebate_measurement'	=>	'bu'
		]);

		Croppractice::create([
			'crop_id'  				=>  8,
			'croppractice'			=>	'Sugarcane Irr',
			'crop'  				=>  'sugarcane',
			'practice'				=>	'Irr',
			'measurement'			=>	'ton',
			'rebate_measurement'	=>	'ton'
		]);

		Croppractice::create([
			'crop_id'  				=>  8,
			'croppractice'			=>	'Sugarcane NI',
			'crop'  				=>  'sugarcane',
			'practice'				=>	'NI',
			'measurement'			=>	'ton',
			'rebate_measurement'	=>	'ton'
		]);
	}

}