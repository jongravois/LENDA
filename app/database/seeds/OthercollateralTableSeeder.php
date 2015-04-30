<?php

class OthercollateralTableSeeder extends Seeder{

    public function run()
    {
        Othercollateral::create([
            'loan_id' =>  1,
            'source' =>  'Louisiana Institute of Technology',
            'description' =>  'This is an unsusual source of funding for a farmer but the money spends all the same.',
            'amount' =>  12500
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'source' =>  'Louisiana State University',
            'description' =>  'Crop and fertilizer study allowance.',
            'amount' =>  7500
        ]);
    }
}