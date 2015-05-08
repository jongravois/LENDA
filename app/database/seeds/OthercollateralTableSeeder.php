<?php

class OthercollateralTableSeeder extends Seeder{

    public function run()
    {
        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'other',
            'source' =>  'Louisiana Institute of Technology',
            'description' =>  'This is an unsusual source of funding for a farmer but the money spends all the same.',
            'amount' =>  12500
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'other',
            'source' =>  'Louisiana State University',
            'description' =>  'Crop and fertilizer study allowance.',
            'amount' =>  7500
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'realestate',
            'source' =>  'Tony Stark',
            'description' =>  'home',
            'amount' =>  300000
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'realestate',
            'source' =>  'Pepper Potts',
            'description' =>  'summer condominium',
            'amount' =>  200000
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'equipment',
            'source' =>  'Tony Stark',
            'description' =>  'Combine',
            'amount' =>  50000
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'equipment',
            'source' =>  'Tony Stark',
            'description' =>  'Tractor',
            'amount' =>  50000
        ]);

        Othercollateral::create([
            'loan_id' =>  1,
            'type' => 'equipment',
            'source' =>  'Pepper Potts',
            'description' =>  'Cotton Gin',
            'amount' =>  200000
        ]);
    }
}