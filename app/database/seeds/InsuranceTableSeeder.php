<?php

class InsuranceTableSeeder extends Seeder {

	public function run()
	{
		// Richland 409 Corn NI
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA800',
			'loancounty_id' => 1317,
			'loancrop_id' => 1,
			'croppractice_id' => 2,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 28,
			'aph' => 96,
			'price' => 4.25,
			'level' => 75,
			'premium' => 11.88,
			'share' => 100
		]);

		// Richland 2088 Corn Irr
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA801',
			'loancounty_id' => 1317,
			'loancrop_id' => 1,
			'croppractice_id' => 1,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 90,
			'aph' => 130,
			'price' => 4.25,
			'level' => 75,
			'premium' => 11.88,
			'share' => 80
		]);

		// W Carroll 3098 Corn Irr
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA802',
			'loancounty_id' => 1317,
			'loancrop_id' => 1,
			'croppractice_id' => 1,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 48.4,
			'aph' => 149,
			'price' => 4.25,
			'level' => 75,
			'premium' => 11.88,
			'share' => 100
		]);

		// W. Carroll 4719 Corn Irr
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA803',
			'loancounty_id' => 1317,
			'loancrop_id' => 1,
			'croppractice_id' => 1,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 181,
			'aph' => 141,
			'price' => 4.25,
			'level' => 75,
			'premium' => 11.88,
			'share' => 80
		]);

		// Richland 560 Beans FACNI
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA804',
			'loancounty_id' => 1337,
			'loancrop_id' => 2,
			'croppractice_id' => 6,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 20,
			'aph' => 21,
			'price' => 11.25,
			'level' => 75,
			'premium' => 14.35,
			'share' => 100
		]);

		// Richland 568 Beans NI
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA805',
			'loancounty_id' => 1337,
			'loancrop_id' => 2,
			'croppractice_id' => 4,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 20,
			'aph' => 23,
			'price' => 11.25,
			'level' => 75,
			'premium' => 14.35,
			'share' => 80
		]);

		// Richland 2088 Beans Irr
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA806',
			'loancounty_id' => 1337,
			'loancrop_id' => 2,
			'croppractice_id' => 3,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 234,
			'aph' => 33,
			'price' => 11.25,
			'level' => 75,
			'premium' => 14.35,
			'share' => 80
		]);

		// W Carroll 3097 Beans FACI
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA807',
			'loancounty_id' => 1337,
			'loancrop_id' => 2,
			'croppractice_id' => 5,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 22.3,
			'aph' => 26,
			'price' => 11.25,
			'level' => 75,
			'premium' => 14.35,
			'share' => 80
		]);

		// W Carroll 4719 Beans Irr
		Insurance::create([
			'crop_year' => 2015,
			'loan_id' => 1,
			'agency' => 'State Farm',
			'agent' => 'Bilbo Baggins',
			'agent_phone' => '3185551000',
			'agent_email' => 'bbaggins@statefarm.com',
			'policy' => '2100391LA808',
			'loancounty_id' => 1337,
			'loancrop_id' => 2,
			'croppractice_id' => 3,
			'type' => 'RP',
			'option' => 'EU',
			'acres' => 284,
			'aph' => 42,
			'price' => 11.25,
			'level' => 75,
			'premium' => 14.35,
			'share' => 80
		]);
	}
}