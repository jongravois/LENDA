<?php

class SupplementalinsuranceTableSeeder extends Seeder {
    public function run()
    {
        //123 NI Cotton STAX
        Supplementalinsurance::create([
            'insurance_id' => 1,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 1050
        ]);

        //123 NI Cotton SCO
        Supplementalinsurance::create([
            'insurance_id' => 1,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 86,
            'expected_yield' => 1050
        ]);

        //123 NI Corn SCO
        Supplementalinsurance::create([
            'insurance_id' => 3,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 86,
            'expected_yield' => 1050
        ]);

        //123 NI Beans SCO
        Supplementalinsurance::create([
            'insurance_id' => 4,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 86,
            'expected_yield' => 1050
        ]);

        //123 I Cotton STAX
        Supplementalinsurance::create([
            'insurance_id' => 2,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 925
        ]);

        //456 NI Cotton SCO
        Supplementalinsurance::create([
            'insurance_id' => 5,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 90,
            'expected_yield' => 900
        ]);

        //567 I Cotton SCO
        Supplementalinsurance::create([
            'insurance_id' => 1,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 90,
            'expected_yield' => 950
        ]);

        //789 I Cotton STAX
        Supplementalinsurance::create([
            'insurance_id' => 7,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 1000
        ]);

        //789 I Cotton SCO
        Supplementalinsurance::create([
            'insurance_id' => 7,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'loss_trigger' => 90,
            'expected_yield' => 1000
        ]);
    }
}
