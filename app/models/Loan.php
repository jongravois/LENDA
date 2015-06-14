<?php

use Carbon\Carbon;

class Loan extends \Eloquent
{
    protected $dates = array('app_date', 'distributor_approval_date', 'decision_date', 'loan_closed_date', 'due_date', 'default_due_date');
    protected $fillable = ['app_date', 'decision_date', 'distributor_approval_date', 'default_due_date', 'due_date', 'loan_type_id', 'status_id', 'crop_year', 'season', 'loc_id', 'region_id', 'user_id', 'farmer_id', 'applicant_id', 'is_cross_collateralized', 'is_fast_tracked', 'grade', 'equipment_collateral', 'realestate_collateral', 'other_collateral', 'analyst_can_approve', 'is_watched', 'disbursement_issue', 'has_rebates', 'has_distributor', 'distributor', 'is_stale', 'has_addendum', 'addendum_type', 'bankruptcy_history', 'required_3party', 'added_land', 'controlled_disbursement', 'its_list', 'fsa_compliant', 'prev_lien_verified', 'leases_valid', 'bankruptcy_order_received', 'received_3party', 'recommended', 'arm_approved', 'dist_approved', 'loan_closed', 'loan_closed_date', 'added_land_verified', 'permission_to_insure_verified', 'arm_ucc_received', 'dist_ucc_received', 'aoi_received', 'ccc_received', 'rebate_assignment', 'limit_warning', 'limit_warning_message', 'crop_inspection', 'reconciliation', 'account_classification', 'conditions_asa', 'conditions_aci', 'conditions_areb', 'conditions_adis', 'conditions_pg', 'conditions_ccl', 'conditions_cd'];

    /* DATES */
    public function setDistributorApprovalDateAttribute($value)
    {
        $this->attributes['distributor_approval_date'] = Carbon::createFromFormat('m/d/Y', $value);
    }

    public function setDecisionDateAttribute($value)
    {
        $this->attributes['decision_date'] = Carbon::createFromFormat('m/d/Y', $value);
    }

    public function setLoanClosedDateAttribute($value)
    {
        $this->attributes['loan_closed_date'] = Carbon::createFromFormat('m/d/Y', $value);
    }

    public function setDueDateAttribute($value)
    {
        $this->attributes['due_date'] = Carbon::createFromFormat('m/d/Y', $value);
    }

    public function setDefaultDueDateAttribute($value)
    {
        $this->attributes['default_due_date'] = Carbon::createFromFormat('m/d/Y', $value);
    }

    public function setAppDateAttribute($value)
    {
        $this->attributes['app_date'] = Carbon::createFromFormat('m/d/Y', $value);
    }

    /* RELATIONSHIPS */
    public function applicant()
    {
        return $this->belongsTo('Applicant', 'applicant_id');
    }

    public function appfins()
    {
        return $this->hasOne('Applicantfinancial');
    }

    public function attachments()
    {
        return $this->hasMany('Attachment');
    }

    public function comments()
    {
        return $this->hasMany('Comment');
    }

    public function committee()
    {
        return $this->hasMany('Committee');
    }

    public function corporations()
    {
        return $this->hasMany('Corporation');
    }

    public function crop()
    {
        return $this->belongsToMany('Crop');
    }

    public function cropexpenses()
    {
        return $this->hasMany('Cropexpenses');
    }

    public function cropdetails()
    {
        return $this->hasMany('Cropdetails');
    }

    public function cropyields()
    {
        return $this->hasMany('Cropyields');
    }

    public function disbursements()
    {
        return $this->hasMany('Disbursement');
    }

    public function distributor()
    {
        return $this->belongsTo('Distributor', 'distributor_id');
    }

    public function farmer()
    {
        return $this->belongsTo('Farmer', 'farmer_id');
    }

    public function farms()
    {
        return $this->hasMany('Farm');
    }

    public function farmcrops()
    {
        return $this->hasMany('Farmcrops');
    }

    public function farmexpenses()
    {
        return $this->hasMany('Farmexpense');
    }

    public function farmpractices()
    {
        return $this->hasMany('Farmpractices');
    }

    public function financials()
    {
        return $this->hasOne('Loanfinancials');
    }

    public function funduses()
    {
        return $this->hasMany('Funduses');
    }

    public function inspols()
    {
        return $this->hasMany('Insurance');
    }

    public function loanconditions()
    {
        return $this->hasMany('Loanconditions');
    }

    public function loancrop()
    {
        return $this->hasMany('Loancrop');
    }

    public function exceptions()
    {
        return $this->hasMany('Loanexceptions');
    }

    public function loanfinancial()
    {
        return $this->hasOne('Loanfinancials');
    }

    public function loanquestions()
    {
        return $this->hasMany('Loanquestions');
    }

    public function loanstatus()
    {
        return $this->belongsTo('Loanstatus', 'status_id');
    }

    public function loantype()
    {
        return $this->belongsTo('Loantype', 'loan_type_id');
    }

    public function location()
    {
        return $this->belongsTo('Location', 'loc_id');
    }

    public function othercollateral()
    {
        return $this->hasMany('Othercollateral');
    }

    public function partners()
    {
        return $this->hasMany('Partners');
    }

    public function prerequisites()
    {
        return $this->hasMany('Prerequisites');
    }

    public function priorliens()
    {
        return $this->hasMany('Priorliens');
    }

    public function quests()
    {
        return $this->hasMany('Loanquestions');
    }

    public function references()
    {
        return $this->hasMany('Reference');
    }

    public function regions()
    {
        return $this->belongsTo('Region', 'region_id');
    }

    public function reqdocs()
    {
        return $this->hasMany('Requireddocuments');
    }

    public function suppins()
    {
        return $this->hasMany('Supplementalinsurance');
    }

    public function systemics()
    {
        return $this->hasMany('Systemics');
    }

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function ventures()
    {
        return $this->hasMany('Jointventure');
    }

    public function xcollaterals()
    {
        return $this->hasMany('Crosscollateral', 'loan_id');
    }


    /* RELATIONSHIPS */

}