<?php

class LoansTableSeeder extends Seeder {

	public function run()
	{
		// Tony Stark (1) @ Glass Towers (2) | Partnership (4) -- Ag-Input
		Loan::create([
			'app_date' => '2014-01-01',
			'due_date' => '2014-12-15',
			'loan_type_id' => 2,
			'status_id' => 1,
			'crop_year' => '2015',
			'season' => 'S',
			'loc_id' => 4,
			'region_id' => 3,
			'user_id' => 2,
      'farmer_id' => 1,
			'applicant_id' => 1,
			'is_cross_collateralized' => 0,
			'is_fast_tracked' => 0,
			'has_distributor' => 1,
			'distributor_id' => 6,
			'has_addendum' => 0,
			'bankruptcy_history' => 0,
			'required_3party' => 0,
			'added_land' => 0,
			'controlled_disbursement' => 0,
			'attachments' => 1,
			'its_list' => 1,
			'fsa_compliant' => 1,
			'prev_lien_verified' => 2,
			'leases_valid' => 1,
			'bankruptcy_order_received' => 0,
			'received_3party' => 0,
			'recommended' => 0,
			'arm_approved' => 0,
			'dist_approved' => 0,
			'loan_closed' => 0,
			'added_land_verified' => 0,
			'arm_ucc_received' => 0,
			'dist_ucc_received' => 0,
			'aoi_received' => 0,
			'ccc_received' => 0,
			'rebate_assignment' => 0,
			'limit_warning' => 0,
			'crop_inspection' => 0,
			'reconcilliation' => 0
		]);

		// Bruce Wayne (2) @ Secret Cave (3) | Joint Venture (1) - Ag-Pro Fasttrack
		Loan::create([
			'applicant_id' =>  3,
			'app_date' => '2014-10-19',
			'due_date' => '2014-12-15',
			'loc_id' =>	4,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' =>	4,
      'farmer_id' => 2,
		]);

		// Steve Rogers (12) @ Shielded Farms (4) | Corporation
		Loan::create([
			'applicant_id' => 4,
			'app_date' => '2014-10-21',
			'due_date' => '2014-12-15',
			'loc_id' => 4,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' => 6,
      'farmer_id' => 12
		]);

		// Clint Barton (5) @ Nested Row (2) | Spousal Ag-Pro
		Loan::create([
			'applicant_id' => 2,
			'app_date' => '2014-10-19',
			'due_date' => '2014-12-15',
			'loc_id' =>	4,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' =>	3,
      'farmer_id' => 5
		]);

		// Jack Murdoch (9) @ Dark World (5) | Individual -- All-in
		Loan::create([
			'applicant_id' => 5,
			'app_date' => '2014-10-22',
			'due_date' => '2014-12-15',
			'loc_id' =>	4,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' =>	1,
      'farmer_id' => 9
		]);

    // Blake Donald (10) @ Rainbow Bridge (6) | Individual -- Capital Bridge
    Loan::create([
      'applicant_id' => 6,
      'app_date' => '2014-09-22',
      'due_date' => '2014-12-15',
      'loc_id' =>	4,
      'user_id' => 2,
      'region_id' => 3,
      'crop_year' => '2015',
      'season' =>	'S',
      'loan_type_id' =>	5,
      'farmer_id' => 10
    ]);

    // Diana Prince (7) @ Kingdom Plains (7) | Spousal -- Grain Storage
    Loan::create([
      'applicant_id' => 7,
      'app_date' => '2014-02-14',
      'due_date' => '2014-12-15',
      'loc_id' =>	4,
      'user_id' => 2,
      'region_id' => 3,
      'crop_year' => '2015',
      'season' =>	'S',
      'loan_type_id' =>	7,
      'farmer_id' => 7
    ]);
/*
		// Tony Stark (1) @ Glass Towers (1) | Partnership (4)
		Loan::create([
			'app_date' => '2013-01-01',
			'due_date' => '2013-12-15',
			'loan_type_id' => 2,
			'status_id' => 2,
			'crop_year' => '2014',
			'season' => 'S',
			'loc_id' => 4,
			'region_id' => 3,
			'user_id' => 2,
      'farmer_id' => 1,
			'applicant_id' => 2,
      'is_active' => 0,
			'is_cross_collateralized' => 0,
			'is_fast_tracked' => 0,
			'has_distributor' => 1,
			'distributor_id' => 6
		]);
*/
	}
}