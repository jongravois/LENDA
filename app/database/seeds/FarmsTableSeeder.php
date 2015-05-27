<?php

class FarmsTableSeeder extends Seeder
{

    public function run()
    {
        Farm::create([
            'loan_id' => 1,
            'county_id' => 1317,
            'fsn' => '409',
            'owner' => 'B Goliher',
            'share_rent' => 0,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 28
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1317,
            'fsn' => '560',
            'owner' => 'N Gohlier',
            'share_rent' => 0,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 0,
            'irr' => 0
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1317,
            'fsn' => '568',
            'owner' => 'Lee',
            'share_rent' => 20,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 12000,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 20
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1317,
            'fsn' => '2088',
            'owner' => 'Cobb',
            'share_rent' => 20,
            'cash_rent' => 0,
            'waived' => 500.50,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 20,
            'irr' => 200,
            'ni' => 124
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1337,
            'fsn' => '3097',
            'owner' => 'Vallery',
            'share_rent' => 0,
            'cash_rent' => 5000,
            'waived' => 0,
            'when_due' => 'July 1',
            'fsa_paid' => 0,
            'percent_irrigated' => 100,
            'irr' => 22.3,
            'ni' => 0
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1337,
            'fsn' => '3098',
            'owner' => 'B Gwin',
            'share_rent' => 0,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 50,
            'irr' => 24.2,
            'ni' => 24.2
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1337,
            'fsn' => '4719',
            'owner' => 'D Gwin',
            'share_rent' => 0,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 20,
            'irr' => 53,
            'ni' => 412
        ]);

        Farm::create([
            'loan_id' => 9,
            'county_id' => 1317,
            'fsn' => '123',
            'owner' => 'Matt Murdoch',
            'share_rent' => 20,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 2000
        ]);
    }
}