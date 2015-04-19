<?php

class InsuranceTableSeeder extends Seeder
{

    public function run()
    {
        // Richland 409 Corn NI
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA800',
            'fsn' => '409',
            'loancounty_id' => 1317,
            'loancrop_id' => 1,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 28,
            'yield' => 96,
            'price' => 4.25,
            'level' => 75,
            'premium' => 11.88,
            'share' => 100
        ]);

        // Richland 2088 Corn Irr
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA801',
            'fsn' => '2088',
            'loancounty_id' => 1317,
            'loancrop_id' => 1,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 90,
            'yield' => 130,
            'price' => 4.25,
            'level' => 75,
            'premium' => 11.88,
            'share' => 80
        ]);

        // W Carroll 3098 Corn Irr
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA802',
            'fsn' => '3098',
            'loancounty_id' => 1317,
            'loancrop_id' => 1,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 48.4,
            'yield' => 149,
            'price' => 4.25,
            'level' => 75,
            'premium' => 11.88,
            'share' => 100
        ]);

        // W. Carroll 4719 Corn Irr
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA803',
            'fsn' => '4719',
            'loancounty_id' => 1317,
            'loancrop_id' => 1,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 181,
            'yield' => 141,
            'price' => 4.25,
            'level' => 75,
            'premium' => 11.88,
            'share' => 80
        ]);

        // Richland 560 Beans FACNI
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA804',
            'fsn' => '560',
            'loancounty_id' => 1337,
            'loancrop_id' => 3,
            'practice' => 'NI',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 20,
            'yield' => 21,
            'price' => 11.25,
            'level' => 75,
            'premium' => 14.35,
            'share' => 100
        ]);

        // Richland 568 Beans NI
        Insurance::create([
            'loan_id' => 1,
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
            'share' => 80
        ]);

        // Richland 2088 Beans Irr
        Insurance::create([
            'loan_id' => 1,
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
            'share' => 80
        ]);

        // W Carroll 3097 Beans FACI
        Insurance::create([
            'loan_id' => 1,
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
            'share' => 80
        ]);

        // W Carroll 4719 Beans Irr
        Insurance::create([
            'loan_id' => 1,
            'agency_id' => 1,
            'agent_id' => 1,
            'policy' => '2100391LA808',
            'fsn' => '4719',
            'loancounty_id' => 1337,
            'loancrop_id' => 2,
            'practice' => 'IR',
            'type' => 'RP',
            'option' => 'EU',
            'acres' => 284,
            'yield' => 42,
            'price' => 11.25,
            'level' => 75,
            'premium' => 14.35,
            'share' => 80
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
    }
}