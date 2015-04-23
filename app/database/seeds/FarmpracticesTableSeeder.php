<?php

class FarmpracticesTableSeeder extends Seeder {
	public function run()
	{
		// 409 Corn i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 1,
			'practice' => 'irr',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 96.0,
			'ins_premium' => 11.88,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// *409 Corn ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 1,
			'practice' => 'ni',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 96.0,
			'ins_premium' => 11.88,
			'acres' => 28,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// 560 Beans i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 2,
			'practice' => 'irr',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 21.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *560 Beans ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 2,
			'practice' => 'ni',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 21.0,
			'ins_premium' => 14.35,
			'acres' => 20,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *560 Beans faci
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 2,
			'practice' => 'irr',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 21.0,
			'ins_premium' => 14.35,
			'acres' => 20,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 560 Beans facni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 2,
			'practice' => 'ni',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 21.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 568 Beans i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 3,
			'practice' => 'irr',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 22.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *568 Beans ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 3,
			'practice' => 'ni',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 23.0,
			'ins_premium' => 14.35,
			'acres' => 20,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 568 Beans faci
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 3,
			'practice' => 'irr',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 23.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *568 Beans facni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 3,
			'practice' => 'ni',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 23.0,
			'ins_premium' => 14.35,
			'acres' => 20,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *2088 Corn i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 4,
			'practice' => 'irr',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 130.0,
			'ins_premium' => 11.88,
			'acres' => 90,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// 2088 Corn ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 4,
			'practice' => 'ni',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 130.0,
			'ins_premium' => 11.88,
			'acres' => 90,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// *2088 Beans i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 4,
			'practice' => 'irr',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 33.0,
			'ins_premium' => 14.35,
			'acres' => 234,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 2088 Beans ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 4,
			'practice' => 'ni',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 33.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 2088 Beans faci
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 4,
			'practice' => 'irr',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 33.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *2088 Beans facni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 4,
			'practice' => 'ni',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 33.0,
			'ins_premium' => 14.35,
			'acres' => 234.0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *3097 Beans i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 5,
			'practice' => 'irr',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 26.0,
			'ins_premium' => 14.35,
			'acres' => 22.3,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 3097 Beans ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 5,
			'practice' => 'ni',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 26.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *3097 Beans faci
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 5,
			'practice' => 'irr',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 26.0,
			'ins_premium' => 14.35,
			'acres' => 22.3,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 3097 Beans facni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 5,
			'practice' => 'ni',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 26.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *3098 Corn i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 6,
			'practice' => 'irr',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 149.0,
			'ins_premium' => 11.88,
			'acres' => 48.4,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// 3098 Corn ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 6,
			'practice' => 'ni',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 149.0,
			'ins_premium' => 11.88,
			'acres' => 0,
			'ins_share' => 100,
			'prod_share' => 100,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// *4719 Corn i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 7,
			'practice' => 'irr',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 141.0,
			'ins_premium' => 11.88,
			'acres' => 181,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// 4719 Corn ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 7,
			'practice' => 'ni',
			'crop_id' => 1,
			'ins_price' => 4.25,
			'aph' => 141.0,
			'ins_premium' => 11.88,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 152.3,
			'prod_price' => 4.2000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 102.8,
			'margin' => 353.67,
			'risk' => -33.84
		]);

		// *4719 Beans i
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 7,
			'practice' => 'irr',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 42.0,
			'ins_premium' => 14.35,
			'acres' => 284,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 4719 Beans ni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 7,
			'practice' => 'ni',
			'crop_id' => 2,
			'ins_price' => 11.25,
			'aph' => 42.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// 4719 Beans faci
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 7,
			'practice' => 'irr',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 42.0,
			'ins_premium' => 14.35,
			'acres' => 0,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 100,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);

		// *4719 Beans facni
		Farmpractices::create([
			'loan_id' => 1,
			'farm_id' => 7,
			'practice' => 'ni',
			'crop_id' => 3,
			'ins_price' => 11.25,
			'aph' => 42.0,
			'ins_premium' => 14.35,
			'acres' => 284,
			'ins_share' => 80,
			'prod_share' => 80,
			'prod_yield' => 36.7,
			'prod_price' => 10.0000,
			'disc_non_rp' => 0,
			'percent_irrigated' => 0,
			'break_even' => 26.1,
			'margin' => 214.55,
			'risk' => -31.21
		]);
	}
}