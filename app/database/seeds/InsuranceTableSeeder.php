<?php

class InsuranceTableSeeder extends Seeder
{

    public function run()
    {
        //LOAN 1 - Practice #1 - Cotton NI
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '123',
            'loancounty_id' => 1317,
            'farmpractice_id' => 1,
            'loancrop_id' => 6,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 350,
            'yield' => 850,
            'price' => 0.6300,
            'level' => 70,
            'premium' => 19.82,
            'share' => 80
        ]);

        //LOAN 1 - Practice #2 - Cotton I
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '123',
            'loancounty_id' => 1317,
            'farmpractice_id' => 2,
            'loancrop_id' => 6,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 1000,
            'yield' => 925,
            'price' => 0.6300,
            'level' => 75,
            'premium' => 19.82,
            'share' => 80
        ]);

        //LOAN 1 - Practice #3 - Corn NI
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '123',
            'loancounty_id' => 1317,
            'farmpractice_id' => 3,
            'loancrop_id' => 1,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 1000,
            'yield' => 200,
            'price' => 4.25,
            'level' => 75,
            'premium' => 11.88,
            'share' => 100
        ]);

        //Loan 1 - Practice #4 Beans NI
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA805',
            'fsn' => '123',
            'loancounty_id' => 1317,
            'farmpractice_id' => 4,
            'loancrop_id' => 2,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 1000,
            'yield' => 50,
            'price' => 11.25,
            'level' => 70,
            'premium' => 14.35,
            'share' => 80,
            'guaranty' => 2875.40,
            'value' => 45776.80
        ]);

        //Loan 1 - Practice #5 Cotton NI
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '456',
            'loancounty_id' => 1337,
            'farmpractice_id' => 5,
            'loancrop_id' => 6,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 50,
            'yield' => 900,
            'price' => 0.6300,
            'level' => 75,
            'premium' => 21.00,
            'share' => 100
        ]);

        //Loan 1 - Practice #6 Cotton IR
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '567',
            'loancounty_id' => 1337,
            'farmpractice_id' => 6,
            'loancrop_id' => 6,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 200,
            'yield' => 950,
            'price' => 0.6300,
            'level' => 75,
            'premium' => 21.00,
            'share' => 80
        ]);

        //Loan 1 - Practice #7 Cotton IR
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '789',
            'loancounty_id' => 1337,
            'farmpractice_id' => 7,
            'loancrop_id' => 6,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 400,
            'yield' => 1000,
            'price' => 0.6300,
            'level' => 75,
            'premium' => 21.00,
            'share' => 100
        ]);

        // Richland 568 Beans NI
        Insurance::create([
            'loan_id' => 9,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA805',
            'fsn' => '568',
            'loancounty_id' => 1337,
            'loancrop_id' => 2,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 20,
            'yield' => 23,
            'price' => 11.25,
            'level' => 75,
            'premium' => 14.35,
            'share' => 80,
            'guaranty' => 2875.40,
            'value' => 45776.80
        ]);

        // Richland 2088 Beans Irr
        Insurance::create([
            'loan_id' => 9,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA806',
            'fsn' => '2088',
            'loancounty_id' => 1337,
            'loancrop_id' => 2,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 234,
            'yield' => 33,
            'price' => 11.25,
            'level' => 75,
            'premium' => 14.35,
            'share' => 80,
            'guaranty' => 49437.18,
            'value' => 9251953.78
        ]);

        // W Carroll 3097 Beans FACI
        Insurance::create([
            'loan_id' => 9,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA807',
            'fsn' => '3097',
            'loancounty_id' => 1337,
            'loancrop_id' => 3,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 22.3,
            'yield' => 26,
            'price' => 11.25,
            'level' => 75,
            'premium' => 14.35,
            'share' => 80,
            'guaranty' => 3657.65,
            'value' => 64996.40
        ]);

        // Richland 568 Corn NI
        Insurance::create([
            'loan_id' => 9,
            'agency_id' => 2,
            'agent_id' => 5,
            'policy' => '4993002',
            'fsn' => '123',
            'loancounty_id' => 1337,
            'loancrop_id' => 1,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 1000,
            'yield' => 200,
            'price' => 4.05,
            'level' => 80,
            'premium' => 20,
            'share' => 80,
            'guaranty' => 648,
            'value' => 502400
        ]);

        // Richland 2088 Beans NI
        Insurance::create([
            'loan_id' => 9,
            'agency_id' => 2,
            'agent_id' => 5,
            'policy' => '4993003',
            'fsn' => '123',
            'loancounty_id' => 1337,
            'loancrop_id' => 2,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 1000,
            'yield' => 50,
            'price' => 9.62,
            'level' => 80,
            'premium' => 20,
            'share' => 80,
            'guaranty' => 384.80,
            'value' => 291840
        ]);
    }
}