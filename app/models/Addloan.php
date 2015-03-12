<?php

class Addloan extends \Eloquent {
    protected $dates = array('app_date', 'distributor_approval_date', 'decision_date', 'due_date', 'default_due_date');
    protected $fillable = ['original_id', 'addendum_type', 'app_date', 'decision_date', 'distributor_approval_date', 'default_due_date', 'due_date', 'loan_type_id', 'status_id', 'crop_year', 'season', 'loc_id', 'region_id', 'user_id', 'farmer_id', 'applicant_id', 'is_cross_collateralized', 'is_fast_tracked', 'has_attachments', 'grade', 'analyst_can_approve', 'has_distributor', 'distributor', 'is_stale', 'need_vote', 'has_comment', 'has_addendum', 'bankruptcy_history', 'required_3party', 'added_land', 'controlled_disbursement', 'its_list', 'fsa_compliant', 'prev_lien_verified', 'leases_valid', 'bankruptcy_order_received', 'received_3party', 'recommended', 'arm_approved', 'dist_approved', 'loan_closed', 'loan_closed_date', 'added_land_verified', 'arm_ucc_received', 'dist_ucc_received', 'aoi_received', 'ccc_received', 'rebate_assignment', 'limit_warning', 'crop_inspection', 'reconciliation', 'account_classification', 'conditions_asa', 'conditions_aci', 'conditions_areb', 'conditions_adis', 'conditions_pg', 'conditions_ccl', 'conditions_cd'];

    /* RELATIONSHIPS */

    /* RELATIONSHIPS */
}