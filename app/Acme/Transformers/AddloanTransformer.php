<?php namespace Acme\Transformers;

use Carbon\Carbon;

class AddloanTransformer extends Transformer{

    public function transform($arr)
    {
        $dtToday = Carbon::now();
        $appDate = $arr['app_date'];
        $defaultDueDate = $arr['default_due_date'];
        $dueDate = $arr['due_date'];
        $diff = $dueDate->diffInDays($appDate);
        $staleDiff = $appDate->diffInDays($dtToday);
        //dd($staleDiff);

        if($arr['season'] == 'S'){
            $fullSeason = 'Spring';
        } else {
            $fullSeason = 'Fall';
        } // end if

        if(!$arr['default_due_date']){
            $defaultDueDate = null;
        } else {
            $defaultDueDate = $arr['default_due_date']->format('m/d/Y');
        }

        if(!$arr['distributor_approval_date']){
            $decision = null;
        } else {
            $decision = $arr['distributor_approval_date']->format('m/d/Y');
        }

        //is_stale
        if(!$arr['decision_date']){
            $decision = null;

            if($staleDiff > 3 && $arr['status_id'] == 1){
                $isStale = true;
            } else {
                $isStale = false;
            } // end if
        } else {
            $decision = $arr['decision_date']->format('m/d/Y');
            $isStale = false;
        } // end if

        //return $arr;
        return array(
            'id' =>	$arr['id'],
            'original_id' => $arr['original_id'],
            'has_addendum' => (boolean) $arr['has_addendum'],
            'addendum_type_id' => (integer) $arr['addendum_type'],
            'addendum_type' => (string) $arr['addendumtype']['type'],
            'app_date'	=> 	$arr['app_date']->format('m/d/Y'),
            'decision_date'	=> 	$decision,
            'due_date'	=>	$arr['due_date']->format('m/d/Y'),
            'default_due_date' => $defaultDueDate,
            'is_stale' => $isStale,
            'loan_days' =>	$diff,
            'loan_type_id' => $arr['loan_type_id'],
            'crop_year'	=>	$arr['crop_year'],
            'season'	=>	$arr['season'],
            'season_full' => $fullSeason,
            'status_id' =>	$arr['status_id'],
            'grade' => $arr['grade'],
            'user_id' => $arr['user_id'],
            'loc_id' => $arr['loc_id'],
            'region_id'	=> $arr['region_id'],
            'applicant_id'	=>	$arr['applicant_id'],
            'farmer_id'	=>	(integer) $arr['farmer_id'],
            'is_active' => (boolean) $arr['is_active'],
            'is_cross_collateralized' => (boolean) $arr['is_cross_collateralized'],
            'is_fast_tracked' => (boolean) $arr['is_fast_tracked'],
            'analyst_can_approve' => (boolean) $arr['analyst_can_approve'],
            'has_attachments' => (boolean) $arr['has_attachments'],
            'has_distributor' => (boolean) $arr['has_distributor'],
            'distributor_id' => $arr['distributor_id'],
            'distributor' => $arr['distributor']['distributor'],
            'bankruptcy_history' =>	(boolean) $arr['bankruptcy_history'],
            'required_3party' => (boolean) $arr['required_3party'],
            'added_land' => (boolean) $arr['added_land'],
            'controlled_disbursement' => (boolean) $arr['controlled_disbursement'],
            'attachments' => (boolean) $arr['attachments'],
            'its_list' => (integer) $arr['its_list'],
            'fsa_compliant' => (integer) $arr['fsa_compliant'],
            'prev_lien_verified' => (integer) $arr['prev_lien_verified'],
            'leases_valid' => (integer) $arr['leases_valid'],
            'bankruptcy_order_received' => (integer) $arr['bankruptcy_order_received'],
            'received_3party' =>	(integer) $arr['received_3party'],
            'recommended' => (integer) $arr['recommended'],
            'arm_approved' => (integer) $arr['arm_approved'],
            'dist_approved' => (integer) $arr['dist_approved'],
            'loan_closed' => (integer) $arr['loan_closed'],
            'loan_closed_date' => $arr['loan_closed_date'],
            'arm_balance' => (integer) $arr['arm_balance'],
            'added_land_verified' => (integer) $arr['added_land_verified'],
            'arm_ucc_received' => (integer) $arr['arm_ucc_received'],
            'dist_ucc_received' => (integer) $arr['dist_ucc_received'],
            'aoi_received' => (integer) $arr['aoi_received'],
            'ccc_received' => (integer) $arr['ccc_received'],
            'rebate_assignment' => (integer) $arr['rebate_assignment'],
            'limit_warning' => (integer) $arr['limit_warning'],
            'crop_inspection' => (integer) $arr['crop_inspection'],
            'reconciliation' => (integer) $arr['reconciliation'],
            'account_classification' => (integer) $arr['account_classification'],
            'last_activity' => $arr['updated_at'],
            'fins' => $arr['addfins']
        );
    }

}