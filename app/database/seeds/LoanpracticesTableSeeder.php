<?php

class LoanpracticesTableSeeder extends Seeder {
	public function run()
	{
		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'is_active' => 1,
			'crop_id' => 1,
			'crop' => 'corn',
			'ins_type' => 'RP',
			'ins_option' => 'EU',
			'ins_price' => 4.25,
			'ins_level' => 75,
			'aph' => 135.3,
			'ins_premium' => 11.88,
			'acres' => 347.4,
			'ins_share' => 84.4,
			'guaranty' => 431.34,
			'value' => 122985.31
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'is_active' => 1,
			'crop_id' => 2,
			'crop' => 'soybeans',
			'ins_type' => 'RP',
			'ins_option' => 'EU',
			'ins_price' => 11.25,
			'ins_level' => 75,
			'aph' => 36.2,
			'ins_premium' => 14.35,
			'acres' => 580.3,
			'ins_share' => 80.7,
			'guaranty' => 305.83,
			'value' => 136480.66
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 3,
			'crop' => 'sorghum',
			'is_active' => 0,
			'ins_price' => 4.00
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 4,
			'crop' => 'wheat',
			'is_active' => 0,
			'ins_price' => 6.64
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 5,
			'crop' => 'cotton',
			'is_active' => 0,
			'ins_price' => 0.70
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 6,
			'is_active' => 0,
			'crop' => 'rice'
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 7,
			'is_active' => 0,
			'crop' => 'peanuts'
		]);

		Loanpractice::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'crop_id' => 7,
			'is_active' => 0,
			'crop' => 'sugarcane',
			'ins_price' => 0.160
		]);
	}
}