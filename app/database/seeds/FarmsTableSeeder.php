<?php

class FarmsTableSeeder extends Seeder
{

    public function run()
    {
        Farm::create([
            'loan_id' => 2,
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
            'loan_id' => 2,
            'county_id' => 1317,
            'fsn' => '560',
            'owner' => 'N Gohlier',
            'share_rent' => 0,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 36
        ]);

        Farm::create([
            'loan_id' => 2,
            'county_id' => 1317,
            'fsn' => '568',
            'owner' => 'Lee',
            'share_rent' => 20,
            'cash_rent' => 60000,
            'waived' => 40000,
            'when_due' => '33% 4/1/15',
            'fsa_paid' => 12000,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 20
        ]);

        Farm::create([
            'loan_id' => 2,
            'county_id' => 1317,
            'fsn' => '2088',
            'owner' => 'Cobb',
            'share_rent' => 20,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 100000,
            'percent_irrigated' => 20,
            'irr' => 200,
            'ni' => 124
        ]);

        Farm::create([
            'loan_id' => 2,
            'county_id' => 1337,
            'fsn' => '3097',
            'owner' => 'Vallery',
            'share_rent' => 0,
            'cash_rent' => 5000,
            'waived' => 0,
            'when_due' => '100% July 1',
            'fsa_paid' => 7500,
            'percent_irrigated' => 100,
            'irr' => 22.3,
            'ni' => 0
        ]);

        Farm::create([
            'loan_id' => 2,
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
            'loan_id' => 2,
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

        ////NEW LOAN #1
        Farm::create([
            'loan_id' => 1,
            'county_id' => 1317,
            'fsn' => '123',
            'owner' => 'John Doe',
            'share_rent' => 20,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 2350
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1310,
            'fsn' => '456',
            'owner' => 'Jim Smith',
            'share_rent' => 0,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 0,
            'irr' => 0,
            'ni' => 1050
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1310,
            'fsn' => '567',
            'owner' => 'Elroy Tate',
            'share_rent' => 20,
            'cash_rent' => 0,
            'waived' => 0,
            'when_due' => '',
            'fsa_paid' => 0,
            'percent_irrigated' => 100,
            'irr' => 200,
            'ni' => 0
        ]);

        Farm::create([
            'loan_id' => 1,
            'county_id' => 1310,
            'fsn' => '789',
            'owner' => 'Elroy Tate',
            'share_rent' => 0,
            'cash_rent' => 60000,
            'waived' => 40000,
            'when_due' => '33% 4/1/15',
            'fsa_paid' => 30000,
            'percent_irrigated' => 100,
            'irr' => 400,
            'ni' => 0
        ]);

    }
}