<?php

class SupplementalinsuranceTableSeeder extends Seeder {
    public function run()
    {
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 1,
            'county_id' => 1317,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'aph' => 180,
            'level' => 75,
            'price' => 4.00,
            'loss_trigger' => 86,
            'desired_range' => 0,
            'range' => 11,
            'protection_factor' => 0,
            'expected_yield' => 163,
            'expected_revenue' => 652,
            'max_indemnity' => 79.20,
            'acres' => 347.4,
            'share' => 100
        ]);
    }
}
