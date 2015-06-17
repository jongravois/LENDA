<?php

class InsuranceTableSeeder extends Seeder
{

    public function run()
    {
        //[1] Farm 123, cotton ni
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
            'level' => 70,
            'premium' => 19.82,
            'share' => 80
        ]);

        //[2] 123, cotton i
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
            'premium' => 19.82,
            'share' => 80
        ]);

        //[3] 123 corn ni
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

        //[5] Farm 456, cotton ni
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
            'farmpractice_id' => 6,
            'agent_id' => 1,
            'policy' => '2100391LA810',
            'option' => 'EU',
            'acres' => 200,
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