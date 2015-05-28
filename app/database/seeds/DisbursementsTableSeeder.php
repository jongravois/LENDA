<?php

class DisbursementsTableSeeder extends Seeder {

    public function run()
    {
        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 1,
            'expense' => 'Fertilizer',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 2,
            'expense' => 'Seed',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 3,
            'expense' => 'Fungicide',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 4,
            'expense' => 'Herbicide',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 5,
            'expense' => 'Insecticide',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 6,
            'expense' => 'Custom',
            'arm_budget' => 19020,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 7,
            'expense' => 'Fuel',
            'arm_budget' => 31305,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 8,
            'expense' => 'Labor',
            'arm_budget' => 18554,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 9,
            'expense' => 'Repairs',
            'arm_budget' => 12751,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 10,
            'expense' => 'Insurance',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 11,
            'expense' => 'Harvesting',
            'arm_budget' => 0,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 12,
            'expense' => 'Misc_Acres',
            'arm_budget' => 18554,
            'spent' => 0,
            'requested' => 0
        ]);

        Disbursement::create([
            'loan_id' => 1,
            'crop_year' => '2015',
            'cat_id' => 13,
            'expense' => 'Living Expenses',
            'arm_budget' => 45797,
            'spent' => 0,
            'requested' => 0
        ]);
    }

}