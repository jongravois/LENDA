<?php namespace Acme\Transformers;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class LoanTransformer extends Transformer
{

    public function transform($arr)
    {
        //return $arr;

        $dtToday = Carbon::now();

        $appDate = $arr['app_date'];
        $defaultDueDate = $arr['default_due_date'];
        $dueDate = $arr['due_date'];
        $diff = $dueDate->diffInDays($appDate);
        $staleDiff = $appDate->diffInDays($dtToday);
        //dd($staleDiff);

        if ($arr['season'] == 'S') {
            $fullSeason = 'Spring';
        } else {
            $fullSeason = 'Fall';
        } // end if

        if (!$arr['default_due_date']) {
            $defaultDueDate = null;
        } else {
            $defaultDueDate = $arr['default_due_date']->format('m/d/Y');
        }

        if (!$arr['farmer']['dob']) {
            $farmer_dob = null;
        } else {
            $farmer_dob = $arr['farmer']['dob']->format('m/d/Y');
        }

        if (!$arr['applicant']['dob']) {
            $applicant_dob = null;
        } else {
            $applicant_dob = $arr['applicant']['dob']->format('m/d/Y');
        }

        //is_stale
        if (!$arr['decision_date']) {
            $decision = null;

            if ($staleDiff > 3 && $arr['status_id'] == 1) {
                $isStale = true;
            } else {
                $isStale = false;
            } // end if
        } else {
            $decision = $arr['decision_date']->format('m/d/Y');
            $isStale = false;
            $staleDiff = 0;
        } // end if

        if (!$arr['distributor_approval_date']) {
            $distDecision = null;
        } else {
            $distDecision = $arr['distributor_approval_date']->format('m/d/Y');
        }

        if (!$arr['loan_closed_date']) {
            $lnClosed = null;
        } else {
            $lnClosed = $arr['loan_closed_date']->format('m/d/Y');
        }

        //$agencies = DB::table('agencies')->get();
        //dd($agencies);

        return array(
            'id' => (integer) $arr['id'],
            'uniqID' => $arr['crop_year'] . $arr['season'] . $arr['id'],
            'app_date' => $arr['app_date']->format('m/d/Y'),
            'distributor_approval_date' => $distDecision,
            'decision_date' => $decision,
            'loan_closed_date' => $lnClosed,
            'due_date' => $arr['due_date']->format('m/d/Y'),
            'default_due_date' => $defaultDueDate,
            'stale_days' =>$staleDiff,
            'is_stale' => $isStale,
            'loan_days' => $diff,
            'loan_type_id' => $arr['loan_type_id'],
            'loan_type' => $arr['loantype']['loantype'],
            'crop_year' => $arr['crop_year'],
            'season' => $arr['season'],
            'season_full' => $fullSeason,
            'file_path' => $arr['crop_year'] . '-' . $arr['id'],
            'status_id' => $arr['status_id'],
            'status' => $arr['loanstatus']['status'],
            'grade' => $arr['grade'],
            'user_id' => $arr['user_id'],
            'loc_id' => $arr['loc_id'],
            'loc_abr' => $arr['location']['loc_abr'],
            'region_id' => $arr['region_id'],
            'region' => $arr['regions']['region'],
            'is_active' => (boolean)$arr['is_active'],
            'is_cross_collateralized' => (boolean)$arr['is_cross_collateralized'],
            'is_fast_tracked' => (boolean)$arr['is_fast_tracked'],
            'is_watched' => (boolean)$arr['is_watched'],
            'disbursement_issue' => (boolean)$arr['disbursement_issue'],
            'analyst_can_approve' => (boolean)$arr['analyst_can_approve'],
            'has_rebates' => (boolean)$arr['has_rebates'],
            'has_distributor' => (boolean)$arr['has_distributor'],
            'distributor_id' => $arr['distributor_id'],
            'distributor' => $arr['distributor']['distributor'],
            'has_addendum' => (boolean)$arr['has_addendum'],
            'addendum_type' => (string)$arr['addendum_type'],
            'bankruptcy_history' => (boolean)$arr['bankruptcy_history'],
            'required_3party' => (boolean)$arr['required_3party'],
            'added_land' => (boolean)$arr['added_land'],
            'controlled_disbursement' => (boolean)$arr['controlled_disbursement'],
            'attachments' => (boolean) $arr['attachments'],
            'equipment_collateral' => (boolean) $arr['equipment_collateral'],
            'realestate_collateral' => (boolean) $arr['realestate_collateral'],
            'its_list' => (integer)$arr['its_list'],
            'fsa_compliant' => (integer)$arr['fsa_compliant'],
            'prev_lien_verified' => (integer)$arr['prev_lien_verified'],
            'leases_valid' => (integer)$arr['leases_valid'],
            'bankruptcy_order_received' => (integer)$arr['bankruptcy_order_received'],
            'received_3party' => (integer)$arr['received_3party'],
            'recommended' => (integer)$arr['recommended'],
            'arm_approved' => (integer)$arr['arm_approved'],
            'dist_approved' => (integer)$arr['dist_approved'],
            'loan_closed' => (integer)$arr['loan_closed'],
            'arm_balance' => (integer)$arr['arm_balance'],
            'added_land_verified' => (integer)$arr['added_land_verified'],
            'permission_to_insure_verified' => (integer)$arr['permission_to_insure_verified'],
            'arm_ucc_received' => (integer)$arr['arm_ucc_received'],
            'dist_ucc_received' => (integer)$arr['dist_ucc_received'],
            'aoi_received' => (integer)$arr['aoi_received'],
            'ccc_received' => (integer)$arr['ccc_received'],
            'rebate_assignment' => (integer)$arr['rebate_assignment'],
            'limit_warning' => (integer)$arr['limit_warning'],
            'limit_warning_message' => $arr['limit_warning_message'],
            'crop_inspection' => (integer)$arr['crop_inspection'],
            'reconciliation' => (integer)$arr['reconciliation'],
            'account_classification' => (integer)$arr['account_classification'],
            'expenses' => $arr['cropexpenses'],
            'financials' => [
                'amount_requested' => (double)$arr['financials']['amount_requested'],
                'total_acres' => (double)getLoanTotalAcres($arr['id']),
                'claims_percent' => (double)$arr['financials']['claims_percent'],
                'supplement_insurance_discount_percent' => (double) $arr['financials']['supplement_insurance_discount_percent'],
                'fsa_assignment_percent' => (double)$arr['financials']['fsa_assignment_percent'],
                'other_discount_percent' => (double)$arr['financials']['other_discount_percent'],
                'disc_prod_percent' => (double)$arr['financials']['disc_prod_percent'],
                'equipment_percent' => (double)$arr['financials']['equipment_percent'],
                'realestate_percent' => (double)$arr['financials']['realestate_percent'],
                'non_rp_percent' => (double)$arr['financials']['non_rp_percent'],
                'int_percent_arm' => (double)$arr['financials']['int_percent_arm'],
                'fee_processing_percent' => (double)$arr['financials']['fee_processing'],
                'fee_processing_onTotal' => (boolean)$arr['financials']['fee_processing_onTotal'],
                'int_percent_dist' => (double)$arr['financials']['int_percent_dist'],
                'int_percent_other' => (double)$arr['financials']['int_percent_other'],
                'fee_service_percent' => (double)$arr['financials']['fee_service'],
                'total_fee_percent' => (double)$arr['financials']['total_fee_percent'],
                'remaining_balance' => (double)$arr['financials']['remaining_balance'],
                'disc_ins_percent' => (double)$arr['financials']['disc_ins_percent']
                // 'int_arm' => (double)$arr['financials']['int_arm'],
                // 'int_dist' => (double)$arr['financials']['int_dist'],
                // 'int_other' => (double)$arr['financials']['int_other'],
                // 'proc_fee' => (double)$arr['financials']['proc_fee'],
                // 'proc_fee_arm_only' => (double)$arr['financials']['proc_fee_arm_only'],
                // 'fee_service_onTotal' => (boolean)$arr['financials']['fee_service_onTotal'],
                // 'srvc_fee' => (double)$arr['financials']['srvc_fee'],
                // 'srvc_fee_arm_only' => (double)$arr['financials']['srvc_fee_arm_only'],
                // 'fee_total' => (double)$arr['financials']['fee_total'],
                // 'total_fsa_payment' => (double)$arr['financials']['total_fsa_payment'],
                // 'total_claims' => (double)$arr['financials']['total_claims'],
                // 'total_revenue' => (double)$arr['financials']['total_revenue'],
                // 'total_balance' => (double)$arr['financials']['total_balance'],
                // 'cash_flow' => (double)$arr['financials']['cash_flow'],
                // 'risk' => (double)$arr['financials']['risk'],
                // 'collateral_equipment' => (double)$arr['financials']['collateral_equipment'],
                // 'collateral_realestate' => (double)$arr['financials']['collateral_realestate'],
                // 'guaranty' => (double)$arr['financials']['guaranty'],
                // 'prod' => (double)$arr['financials']['prod'],
                // 'adj_prod' => (double)$arr['financials']['adj_prod'],
                // 'disc_adj_prod' => (double)$arr['financials']['disc_adj_prod'],
                // 'ins_disc_prod' => (double)$arr['financials']['ins_disc_prod'],
                // 'disc_ins' => (double)$arr['financials']['disc_ins'],
                // 'commit_arm' => (double)$arr['financials']['commit_arm'],
                // 'commit_dist' => (double)$arr['financials']['commit_dist'],
                // 'commit_other' => (double)$arr['financials']['commit_other'],
                // 'commit_total' => (double)$arr['financials']['commit_total'],
                // 'principal_arm' => (double)$arr['financials']['principal_arm'],
                // 'principal_dist' => (double)$arr['financials']['principal_dist'],
                // 'principal_other' => (double)$arr['financials']['principal_other'],
                // 'principal' => (double)$arr['financials']['principal'],
                // 'arm_and_dist' => (double)$arr['financials']['arm_and_dist'],
                // 'collateral' => (double)$arr['financials']['collateral'],
            ],
            'analyst' => [
                'id' => $arr['user']['id'],
                'nick' => $arr['user']['nick'],
                'name' => $arr['user']['username'],
                'email' => $arr['user']['email']
            ],
            'farmer' => [
                'farmer_id' => (integer) $arr['farmer_id'],
                'farmer' => $arr['farmer']['farmer'],
                'ssn' => $arr['farmer']['ssn'],
                'address' => $arr['farmer']['address'],
                'city' => $arr['farmer']['city'],
                'state_id' => $arr['farmer']['state_id'],
                'state_abr' => $arr['farmer']['state']['abr'],
                'zip' => $arr['farmer']['zip'],
                'phone' => $arr['farmer']['phone'],
                'email' => $arr['farmer']['email'],
                'dob' => $farmer_dob,
                'first_year_farmer' => $arr['farmer']['first_year_farmer'],
                'readable_exp' => Carbon::createFromDate($arr['farmer']['first_year_farmer'])->age . ' years'
            ],
            'applicant' => [
                'id' => (integer) $arr['applicant_id'],
                'applicant' => $arr['applicant']['applicant'],
                'ssn' => $arr['applicant']['ssn'],
                'address' => $arr['applicant']['address'],
                'city' => $arr['applicant']['city'],
                'state_id' => $arr['applicant']['state_id'],
                'state_abr' => $arr['applicant']['state']['abr'],
                'zip' => $arr['applicant']['zip'],
                'phone' => $arr['applicant']['phone'],
                'email' => $arr['applicant']['email'],
                'dob' => $applicant_dob,
                'spouse' => $arr['applicant']['spouse'],
                'spouse_ssn' => $arr['applicant']['spouse_ssn'],
                'spouse_phone' => $arr['applicant']['spouse_phone'],
                'spouse_email' => $arr['applicant']['spouse_email']
            ],
            'entity_type_id' => $arr['applicant']['entitytype']['id'],
            'entity_type' => $arr['applicant']['entitytype']['entitytype'],
            'partners' => $arr['partners'],
            'ventures' => $arr['ventures'],
            'corporations' => $arr['corporations'],
            'attachments' => $arr['attachments'],
            'conditions' => [
                'asa' => (boolean)$arr['conditions_asa'],
                'aci' => (boolean)$arr['conditions_aci'],
                'areb' => (boolean)$arr['conditions_areb'],
                'adis' => (boolean)$arr['conditions_adis'],
                'pg' => (boolean)$arr['conditions_pg'],
                'ccl' => (boolean)$arr['conditions_ccl'],
                'afsa' => (boolean)$arr['conditions_afsa'],
                'cd' => (boolean)$arr['conditions_cd']
            ],
            'exceptions' => $arr['exceptions'],
            'farmcrops' => $arr['farmcrops'],
            'appfins' => $arr['appfins'],
            'committee' => $arr['committee'],
            'comments' => $arr['comments'],
            'inspols' => $arr['inspols'],
            'loanconditions' => $arr['loanconditions'],
            'loancrops' => $arr['loancrop'],
            'suppins' => $arr['suppins'],
            'othercollateral' => $arr['othercollateral'],
            'priorlien' => $arr['priorliens'],
            'systemics' => $arr['systemics'],
            'last_activity' => $arr['updated_at'],
            'xcols' => $arr['xcollaterals']
        );
    }

}