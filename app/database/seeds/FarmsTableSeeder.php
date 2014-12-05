<?php

class FarmsTableSeeder extends Seeder {

	public function run()
	{
		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1317,
			'fsn'				=>	'409',
			'owner'				=>	'B Goliher',
			'share_rent'		=>	0,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'acres'				=>	28,
			'irr'				=>	0,
			'ni'				=>	1,
			'facirr'			=>  0,
			'facni'    			=>	1,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	0
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1317,
			'fsn'				=>	'560',
			'owner'				=>	'N Gohlier',
			'share_rent'		=>	0,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'acres'				=>	20,
			'irr'				=>	0,
			'ni'				=>	0,
			'facirr'			=>  0,
			'facni'    			=>	1,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	0
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1317,
			'fsn'				=>	'568',
			'owner'				=>	'Lee',
			'share_rent'		=>	20,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'acres'				=>	20,
			'irr'				=>	0,
			'ni'				=>	1,
			'facirr'			=>  0,
			'facni'    			=>	1,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	0
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1317,
			'fsn'				=>	'2088',
			'owner'				=>	'Cobb',
			'share_rent'		=>	20,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'acres'				=>	324,
			'irr'				=>	1,
			'ni'				=>	0,
			'facirr'			=>  0,
			'facni'    			=>	1,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	20
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1337,
			'fsn'				=>	'3097',
			'owner'				=>	'Vallery',
			'share_rent'		=>	20,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'acres'				=>	22.3,
			'irr'				=>	1,
			'ni'				=>	0,
			'facirr'			=>  1,
			'facni'    			=>	0,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	100
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1337,
			'fsn'				=>	'3098',
			'owner'				=>	'B Gwin',
			'share_rent'		=>	0,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'acres'				=>	48.4,
			'when_due'			=>	'',
			'irr'				=>	1,
			'ni'				=>	0,
			'facirr'			=>  0,
			'facni'    			=>	1,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	50
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1337,
			'fsn'				=>	'4719',
			'owner'				=>	'D Gwin',
			'share_rent'		=>	0,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'acres'				=>	465,
			'irr'				=>	1,
			'ni'				=>	0,
			'facirr'			=>  0,
			'facni'    			=>	1,
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	20
		]);
	}
}