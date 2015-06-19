<?php

class InsuranceTableSeeder extends Seeder
{

    public function run()
    {
        //LOAN 1 - Practice #1 - Cotton NI
        Insurance::create([
            'farmpractice_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'option' => 'EU',
            'acres' => 350,
            'practice' => 'NI',
            'type' => 'RP',
            'price' => 0.6300,
            'yield' => 850,
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
            'farmpractice_id' => 2,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'option' => 'EU',
            'acres' => 1000,
            'practice' => 'IR',
            'type' => 'RP',
            'price' => 0.6300,
            'yield' => 850,
            'level' => 70,
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
            'farmpractice_id' => 3,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'option' => 'EU',
            'acres' => 1000,
            'practice' => 'NI',
            'type' => 'RP',
            'price' => 4.25,
            'yield' => 96,
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

        //[4] 123 soybeans ni
        Insurance::create([
            'farmpractice_id' => 4,
            'agent_id' => 1,
            'policy' => '2100391LA804',
            'option' => 'EU',
            'acres' => 1000,
            'practice' => 'NI',
            'type' => 'RP',
            'price' => 11.25,
            'yield' => 21,
            'level' => 75,
            'premium' => 14.35,
            'share' => 100
        ]);

        //Loan 1 - Practice #4 Beans NI
        Insurance::create([
            'farmpractice_id' => 5,
            'agent_id' => 1,
            'policy' => '2100391LA805',
            'option' => 'EU',
            'acres' => 50,
            'practice' => 'NI',
            'type' => 'RP',
            'price' => 0.6300,
            'yield' => 900,
            'level' => 75,
            'premium' => 21.00,
            'share' => 100
        ]);

        //[6] Farm 567, cotton i
        Insurance::create([
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
            'farmpractice_id' => 6,
            'agent_id' => 1,
            'policy' => '2100391LA810',
            'option' => 'EU',
            'acres' => 200,
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
            'price' => 0.6300,
            'yield' => 950,
            'level' => 75,
            'premium' => 21.00,
            'share' => 100
        ]);

        //[7] Farm 789, cotton i
        Insurance::create([
            'farmpractice_id' => 7,
            'agent_id' => 1,
            'policy' => '2100391LA820',
            'option' => 'EU',
            'acres' => 400,
            'practice' => 'NI',
            'type' => 'RP',
            'price' => 0.6300,
            'yield' => 1000,
            'level' => 75,
            'premium' => 21.00,
            'share' => 100
        ]);
    }
}