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
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	0,
      'acres'				=>	28,
      'irr'				=>	0,
      'ni'				=>	0,
      'facirr'			=>  0,
      'facni'    			=>	28
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
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	0,
      'irr'				=>	0,
      'ni'				=>	0,
      'facirr'			=>  0,
      'facni'    			=>	20,
      'acres'				=>	20
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
			'fsa_paid'			=> 	12000,
			'percent_irrigated'	=>	0,
      'irr'				=>	0,
      'ni'				=>	0,
      'facirr'			=>  0,
      'facni'    			=>	20,
      'acres'				=>	20
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
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	20,
      'irr'				=>	200,
      'ni'				=>	0,
      'facirr'			=>  0,
      'facni'    			=>	124,
      'acres'				=>	324
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
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	100,
      'irr'				=>	0,
      'ni'				=>	0,
      'facirr'			=>  22.3,
      'facni'    			=>	0,
      'acres'				=>	22.3
		]);

		Farm::create([
			'loan_id'		=>	1,
			'county_id'			=>	1337,
			'fsn'				=>	'3098',
			'owner'				=>	'B Gwin',
			'share_rent'		=>	0,
			'cash_rent'			=>	0,
			'waived'			=>	0,
			'when_due'			=>	'',
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	50,
      'irr'				=>	24.2,
      'ni'				=>	0,
      'facirr'			=>  0,
      'facni'    			=>	24.2,
      'acres'				=>	48.4
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
			'fsa_paid'			=> 	0,
			'percent_irrigated'	=>	20,
      'irr'				=>	53,
      'ni'				=>	0,
      'facirr'			=>  0,
      'facni'    			=>	412,
      'acres'				=>	465
		]);
	}
}