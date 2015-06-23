<?php

class OptimizerviewoptionsTableSeeder extends Seeder {

    public function run()
    {
        Optimizerviewoption::create([
            'user_id' => 2,
//            'rent_per_acre_ARM' => 0,
//            'rent_per_acre_dist' => 0,
//            'rent_per_acre_other' => 0
        ]);

        Optimizerviewoption::create([
            'user_id' => 3
        ]);

        Optimizerviewoption::create([
            'user_id' => 4
        ]);

        Optimizerviewoption::create([
            'user_id' => 5
        ]);

        Optimizerviewoption::create([
            'user_id' => 6
        ]);

        Optimizerviewoption::create([
            'user_id' => 7
        ]);

        Optimizerviewoption::create([
            'user_id' => 8
        ]);

        Optimizerviewoption::create([
            'user_id' => 9
        ]);

        Optimizerviewoption::create([
            'user_id' => 10
        ]);
    }

}