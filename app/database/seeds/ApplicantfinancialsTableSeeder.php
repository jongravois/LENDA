<?php

class ApplicantfinancialsTableSeeder extends Seeder {

    public function run()
    {
        //2 - Ag-Input
        Applicantfinancial::create([
            'loan_id' => 1,
            'applicant_id' => 1,
            'cpa_financials' => 1,
            'credit_score' => 730,
            'experience' => 36,
            'grade' => 'B',
            'amount_requested' => 2750000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794,
            'debt2asset_ratio' => 31,
            'debt2asset_ratio_adj' => 43,
            'ratio_current' => 379,
            'ratio_current_adj' => 322,
            'capWork' => 114,
            'capWork_adj' => 91,
            'capBorrow' => 69,
            'capBorrow_adj' => 57
        ]);

        //5 - Capital Bridge
        Applicantfinancial::create([
            'loan_id' => 2,
            'applicant_id' => 6,
            'cpa_financials' => 1,
            'credit_score' => 730,
            'experience' => 2,
            'grade' => 'D',
            'amount_requested' 	=> 25000000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794
        ]);

        //4 - Ag-Pro Fasttrack
        Applicantfinancial::create([
            'loan_id' => 3,
            'applicant_id' => 3,
            'cpa_financials' => 1,
            'credit_score' => 730,
            'experience' => 3,
            'grade' => 'C',
            'amount_requested' 	=> 25000000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794
        ]);

        //6 - Ag-Vest
        Applicantfinancial::create([
            'loan_id' => 4,
            'applicant_id' => 4,
            'cpa_financials' => 1,
            'credit_score' => 730,
            'experience' => 36,
            'grade' => 'B',
            'amount_requested' 	=> 25000000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794
        ]);

        //3 - Ag-Pro
        Applicantfinancial::create([
            'loan_id' => 5,
            'applicant_id' => 2,
            'cpa_financials' => 1,
            'credit_score' => 770,
            'experience' => 25,
            'grade' => 'A',
            'amount_requested' 	=> 25000000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794
        ]);

        //1 - All-In
        Applicantfinancial::create([
            'loan_id' => 6,
            'applicant_id' => 5,
            'cpa_financials' => 1,
            'credit_score' => 730,
            'experience' => 36,
            'grade' => 'B',
            'amount_requested' 	=> 25000000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794
        ]);

        //7 - Grain-Storage
        Applicantfinancial::create([
            'loan_id' => 7,
            'applicant_id' => 7,
            'amount_requested' => 200000
        ]);

        //2 - Ag-Input
        Applicantfinancial::create([
            'loan_id' => 8,
            'applicant_id' => 1,
            'cpa_financials' => 1,
            'credit_score' => 730,
            'experience' => 9,
            'grade' => 'D',
            'amount_requested' 	=> 25000000,
            'year_1_revenue' => 1842701,
            'year_1_expenses' => 1000000,
            'year_2_revenue' => 1937418,
            'year_2_expenses' => 900000,
            'year_3_revenue' => 2845790,
            'year_3_expenses' => 800000,
            'current_assets' => 1555079,
            'current_assets_factor' => 15,
            'current_assets_liability' => 410285,
            'intermediate_assets' => 2831750,
            'intermediate_assets_factor' => 40,
            'intermediate_assets_liability' => 776456,
            'fixed_assets' => 3590675,
            'fixed_assets_factor' => 25,
            'fixed_assets_liability' => 1246794
        ]);
    }
}