<?php

class SupplementalinsuranceTableSeeder extends Seeder {
    public function run()
    {
        //[1] 123 - Cotton NI - STAX
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 6,
            'county_id' => 1317,
            'insurance_id' => 1,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'acres' => 350,
            'aph' => 850,
            'price' => 0.6300,
            'share' => 80,
            'level' => 70,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 1050,
            'expected_revenue' => 999999,
            'max_indemnity' => 999999
        ]);

        // [1] 123 - Cotton NI - SCO
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 6,
            'county_id' => 1317,
            'insurance_id' => 1,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'acres' => 350,
            'aph' => 850,
            'price' => 0.6300,
            'share' => 80,
            'level' => 70,
            'loss_trigger' => 86,
            'expected_yield' => 1050,
            'expected_revenue' => 740,
            'max_indemnity' => 999999
        ]);

        // [3] 123 - Corn NI
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 1,
            'county_id' => 1317,
            'insurance_id' => 3,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 1,
            'acres' => 1000,
            'aph' => 200,
            'price' => 4.00,
            'share' => 80,
            'level' => 70,
            'loss_trigger' => 86,
            'expected_yield' => 200,
            'expected_revenue' => 999999,
            'max_indemnity' => 999999
        ]);

        // [4] 123 - Soybeans NI
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 2,
            'county_id' => 1317,
            'insurance_id' => 4,
            'supplement' => 'SCO',
            'harvest_price_exclusion' => 0,
            'acres' => 1000,
            'aph' => 50,
            'price' => 9.60,
            'share' => 80,
            'level' => 70,
            'loss_trigger' => 86,
            'expected_yield' => 45,
            'expected_revenue' => 999999,
            'max_indemnity' => 999999
        ]);

        //[2] 123 - Cotton IR
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 6,
            'county_id' => 1317,
            'insurance_id' => 2,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'acres' => 350,
            'aph' => 850,
            'price' => 0.6300,
            'share' => 80,
            'level' => 70,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 1050,
            'expected_revenue' => 999999,
            'max_indemnity' => 999999
        ]);

        // [5] 456 - Cotton NI
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 6,
            'county_id' => 1310,
            'insurance_id' => 5,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'acres' => 200,
            'aph' => 950,
            'price' => 0.6300,
            'share' => 80,
            'level' => 75,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 1000,
            'expected_revenue' => 999999,
            'max_indemnity' => 999999
        ]);

        // [6] 789 - Cotton IR
        Supplementalinsurance::create([
            'loan_id' => 1,
            'crop_id' => 6,
            'county_id' => 1310,
            'insurance_id' => 7,
            'supplement' => 'STAX',
            'harvest_price_exclusion' => 0,
            'acres' => 400,
            'aph' => 1000,
            'price' => 0.6300,
            'share' => 80,
            'level' => 75,
            'loss_trigger' => 90,
            'desired_range' => 20,
            'protection_factor' => 120,
            'expected_yield' => 1000,
            'expected_revenue' => 999999,
            'max_indemnity' => 999999
        ]);
    }
}
