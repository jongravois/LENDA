<?php

class CrosscollateralsTableSeeder extends Seeder {

    public function run()
    {
        Crosscollateral::create([
            'loan_id' => 1,
            'collateral_id' => 4
        ]);

        Crosscollateral::create([
            'loan_id' => 2,
            'collateral_id' => 4
        ]);

        Crosscollateral::create([
            'loan_id' => 1,
            'collateral_id' => 6
        ]);

        Crosscollateral::create([
            'loan_id' => 1,
            'collateral_id' => 8
        ]);

        Crosscollateral::create([
            'loan_id' => 2,
            'collateral_id' => 8
        ]);
    }

}