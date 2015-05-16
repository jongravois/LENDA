<?php

class CropexpensesTableSeeder extends Seeder {

	public function run()
	{
		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 1,
			'expense' => 'Fertilizer',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 164.97,
			'dist_adj' => 164.97,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 2,
			'expense' => 'Seed',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 115,
			'other_adj' => 115
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 3,
			'expense' => 'Fungicide',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 4,
			'expense' => 'Herbicide',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 32.94,
			'dist_adj' => 32.94,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 5,
			'expense' => 'Insecticide',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 6,
			'expense' => 'Custom',
			'arm' => 18,
			'arm_adj' => 18,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 7,
			'expense' => 'Fuel',
			'arm' => 40,
			'arm_adj' => 40,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 8,
			'expense' => 'Labor',
			'arm' => 20,
			'arm_adj' => 20,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 9,
			'expense' => 'Repairs',
			'arm' => 20,
			'arm_adj' => 20,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 10,
			'expense' => 'Insurance',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 11,
			'expense' => 'Harvesting',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 1,
			'loancrop_id' => 1,
			'cat_id' => 12,
			'expense' => 'Misc Acre',
			'arm' => 20,
			'arm_adj' => 20,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 13,
            'expense' => 'Living Expenses',
            'arm' => 60,
            'arm_adj' => 60,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        // SOYBEANS
        Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 1,
			'expense' => 'Fertilizer',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 26.50,
			'dist_adj' => 26.50,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 2,
			'expense' => 'Seed',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 60,
			'other_adj' => 60
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 3,
			'expense' => 'Fungicide',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 12.50,
			'dist_adj' => 12.50,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 4,
			'expense' => 'Herbicide',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 20.06,
			'dist_adj' => 20.06,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 5,
			'expense' => 'Insecticide',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 10.67,
			'dist_adj' => 10.67,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 6,
			'expense' => 'Custom',
			'arm' => 22,
			'arm_adj' => 22,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 7,
			'expense' => 'Fuel',
			'arm' => 30,
			'arm_adj' => 30,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 8,
			'expense' => 'Labor',
			'arm' => 20,
			'arm_adj' => 20,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 9,
			'expense' => 'Repairs',
			'arm' => 10,
			'arm_adj' => 10,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 10,
			'expense' => 'Insurance',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 14.35,
			'other_adj' => 14.35
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 11,
			'expense' => 'Harvesting',
			'arm' => 0,
			'arm_adj' => 0,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 12,
			'expense' => 'Misc Acre',
			'arm' => 20,
			'arm_adj' => 20,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

		Cropexpenses::create([
			'loan_id' => 1,
			'crop_id' => 2,
			'loancrop_id' => 2,
			'cat_id' => 13,
			'expense' => 'Living Expenses',
			'arm' => 43,
			'arm_adj' => 43,
			'dist' => 0,
			'dist_adj' => 0,
			'other' => 0,
			'other_adj' => 0
		]);

        // BEANSFAC
        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 1,
            'expense' => 'Fertilizer',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 26.50,
            'dist_adj' => 26.50,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 2,
            'expense' => 'Seed',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 60,
            'other_adj' => 60
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 3,
            'expense' => 'Fungicide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 12.50,
            'dist_adj' => 12.50,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 4,
            'expense' => 'Herbicide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 20.06,
            'dist_adj' => 20.06,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 5,
            'expense' => 'Insecticide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 10.67,
            'dist_adj' => 10.67,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 6,
            'expense' => 'Custom',
            'arm' => 22,
            'arm_adj' => 22,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 7,
            'expense' => 'Fuel',
            'arm' => 30,
            'arm_adj' => 30,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 8,
            'expense' => 'Labor',
            'arm' => 20,
            'arm_adj' => 20,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 9,
            'expense' => 'Repairs',
            'arm' => 10,
            'arm_adj' => 10,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 10,
            'expense' => 'Insurance',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 14.35,
            'other_adj' => 14.35
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 11,
            'expense' => 'Harvesting',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 12,
            'expense' => 'Misc Acre',
            'arm' => 20,
            'arm_adj' => 20,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 1,
            'crop_id' => 3,
            'loancrop_id' => 3,
            'cat_id' => 13,
            'expense' => 'Living Expenses',
            'arm' => 43,
            'arm_adj' => 43,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

		//LOAN #9
        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 1,
            'expense' => 'Fertilizer',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 162.27,
            'dist_adj' => 162.27,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 2,
            'expense' => 'Seed',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 126,
            'dist_adj' => 126,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 3,
            'expense' => 'Fungicide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 4,
            'expense' => 'Herbicide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 47.19,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 5,
            'expense' => 'Insecticide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 7.20,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 6,
            'expense' => 'Custom',
            'arm' => 20.50,
            'arm_adj' => 20.50,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 7,
            'expense' => 'Fuel',
            'arm' => 30,
            'arm_adj' => 30,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 8,
            'expense' => 'Labor',
            'arm' => 10,
            'arm_adj' => 10,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 9,
            'expense' => 'Repairs',
            'arm' => 10,
            'arm_adj' => 10,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 10,
            'expense' => 'Insurance',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 20,
            'other_adj' => 20
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 11,
            'expense' => 'Harvesting',
            'arm' => 35,
            'arm_adj' => 35,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 1,
            'loancrop_id' => 1,
            'cat_id' => 12,
            'expense' => 'Misc_Acres',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 1,
            'expense' => 'Fertilizer',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 24.25,
            'dist_adj' => 24.25,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 2,
            'expense' => 'Seed',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 60.50,
            'dist_adj' => 60.50,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 3,
            'expense' => 'Fungicide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 16.56,
            'dist_adj' => 16.56,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 4,
            'expense' => 'Herbicide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 36.17,
            'dist_adj' => 36.17,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 5,
            'expense' => 'Insecticide',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 23.28,
            'dist_adj' => 23.28,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 6,
            'expense' => 'Custom',
            'arm' => 26,
            'arm_adj' => 26,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 7,
            'expense' => 'Fuel',
            'arm' => 30,
            'arm_adj' => 30,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 8,
            'expense' => 'Labor',
            'arm' => 10,
            'arm_adj' => 10,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 9,
            'expense' => 'Repairs',
            'arm' => 10,
            'arm_adj' => 10,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 10,
            'expense' => 'Insurance',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 20,
            'other_adj' => 20
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 11,
            'expense' => 'Harvesting',
            'arm' => 35,
            'arm_adj' => 35,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);

        Cropexpenses::create([
            'loan_id' => 9,
            'crop_id' => 2,
            'loancrop_id' => 2,
            'cat_id' => 12,
            'expense' => 'Misc_Acres',
            'arm' => 0,
            'arm_adj' => 0,
            'dist' => 0,
            'dist_adj' => 0,
            'other' => 0,
            'other_adj' => 0
        ]);
	}

}
