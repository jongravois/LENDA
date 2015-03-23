<?php

use Carbon\Carbon;
class LoansTableSeeder extends Seeder {

	public function run()
	{
		// Tony Stark(1) @ Glass Towers(2) | Partnership(4)--Ag-Input 2015
		Loan::create([
			'applicant_id' => 1,
			'app_date' => '2015-03-01',
			'distributor_approval_date' => '2015-01-14',
			'decision_date' => '2015-01-15',
			'default_due_date' => '2015-12-15',
			'due_date' => '2015-12-15',
			'loan_type_id' => 2,
			'status_id' => 1,
            'analyst_can_approve' => 1,
            'crop_year' => '2015',
			'season' => 'S',
			'loc_id' => 5,
			'region_id' => 3,
			'user_id' => 2,
            'farmer_id' => 1,
			'is_cross_collateralized' => 0,
			'is_fast_tracked' => 0,
			'has_attachments' => 1,
            'is_watched' => 1,
            'disbursement_issue' => 1,
			'has_distributor' => 1,
			'distributor_id' => 6,
			'has_addendum' => 1,
            'addendum_type' => 2,
			'bankruptcy_history' => 1,
			'required_3party' => 1,
			'added_land' => 1,
			'controlled_disbursement' => 0,
			'its_list' => 1,
			'fsa_compliant' => 1,
			'prev_lien_verified' => 1,
			'leases_valid' => 1,
			'bankruptcy_order_received' => 1,
			'received_3party' => 1,
			'recommended' => 1,
			'arm_approved' => 1,
			'dist_approved' => 1,
			'loan_closed' => 1,
			'added_land_verified' => 2,
			'arm_ucc_received' => 1,
			'dist_ucc_received' => 1,
			'aoi_received' => 0,
			'ccc_received' => 0,
			'rebate_assignment' => 0,
			'limit_warning' => 0,
			'crop_inspection' => 0,
			'reconciliation' => 0,
			'grade' => 'B',
			'conditions_asa' => 1,
			'conditions_aci' => 1,
			'conditions_areb' => 1,
			'conditions_afsa' => 1,
			'conditions_adis' => 1,
			'conditions_pg' => 1,
			'conditions_ccl' => 0,
			'conditions_cd' => 0
		]);

		// Blake Donald(10) @ Rainbow Bridge(6) | Individual--Capital Bridge 2015
		Loan::create([
			'applicant_id' => 6,
			'app_date' => Carbon::now()->subDays(1),
            'default_due_date' => '2015-12-15',
			'due_date' => '2016-06-15',
			'loc_id' =>	5,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' =>	5,
			'farmer_id' => 10,
			'analyst_can_approve' => 1,
			'grade' => 'B'
		]);

		// Bruce Wayne(2) @ Secret Cave(3) | Joint Venture (1)--Ag-Pro Fasttrack 2015
		Loan::create([
			'applicant_id' =>  3,
			'app_date' => Carbon::now()->subDays(2),
			'default_due_date' => '2015-12-15',
			'due_date' => '2015-12-15',
			'loc_id' =>	5,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' =>	4,
      'farmer_id' => 2,
			'conditions_asa' => 1,
			'conditions_aci' => 1,
			'conditions_areb' => 1,
			'conditions_afsa' => 1,
			'conditions_adis' => 1
		]);

		// Steve Rogers(12) @ Shielded Farms(4) | Corporation -- Ag-Vest 2015
		Loan::create([
			'applicant_id' => 4,
			'app_date' => Carbon::now(),
			'default_due_date' => '2015-12-15',
			'due_date' => '2015-12-15',
			'loc_id' => 5,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' => 6,
      'farmer_id' => 12
		]);

		// Clint Barton(5) @ Nested Row(2) | Spousal--Ag-Pro 2015
		Loan::create([
			'applicant_id' => 2,
			'app_date' => Carbon::now()->subDays(3),
			'default_due_date' => '2015-12-15',
			'due_date' => '2015-12-15',
			'loc_id' =>	5,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'S',
			'loan_type_id' =>	3,
      'farmer_id' => 5,
			'conditions_asa' => 1,
			'conditions_aci' => 1,
			'conditions_areb' => 1,
			'conditions_afsa' => 1,
			'conditions_adis' => 1
		]);

		// Jack Murdoch(9) @ Dark World(5) | Individual -- All-in 2015
		Loan::create([
			'applicant_id' => 5,
			'app_date' => Carbon::now()->subDays(2),
			'default_due_date' => '2015-12-15',
			'due_date' => '2015-12-15',
			'loc_id' =>	5,
			'user_id' => 2,
			'region_id' => 3,
			'crop_year' => '2015',
			'season' =>	'F',
			'loan_type_id' =>	1,
      'farmer_id' => 9,
			'conditions_asa' => 1,
			'conditions_aci' => 1,
			'conditions_areb' => 1,
			'conditions_afsa' => 1,
			'conditions_adis' => 1
		]);

    // Diana Prince(7) @ Kingdom Plains(7) | Spousal -- Grain Storage 2015
    Loan::create([
      'applicant_id' => 7,
      'app_date' => Carbon::now()->subDays(4),
      'default_due_date' => '2015-03-15',
      'due_date' => '2015-04-30',
      'loc_id' =>	5,
      'user_id' => 2,
      'region_id' => 3,
      'crop_year' => '2015',
      'season' =>	'S',
      'loan_type_id' =>	7,
      'farmer_id' => 7
		]);

		// Tony Stark(1) @ Glass Towers(1) | Partnership | Ag-Input 2014
		Loan::create([
			'app_date' => '2014-01-01',
			'default_due_date' => '2014-12-15',
			'due_date' => '2014-12-15',
			'loan_type_id' => 2,
			'status_id' => 2,
			'crop_year' => '2014',
			'season' => 'F',
			'loc_id' => 5,
			'region_id' => 3,
			'user_id' => 2,
      'farmer_id' => 1,
			'applicant_id' => 2,
      'is_active' => 0,
			'is_cross_collateralized' => 0,
			'is_fast_tracked' => 0,
			'has_distributor' => 1,
			'distributor_id' => 6,
			'conditions_asa' => 1,
			'conditions_aci' => 1,
			'conditions_areb' => 1,
			'conditions_afsa' => 1,
			'conditions_adis' => 1
		]);

	}
}