<?php

class Applicantfinancial extends \Eloquent {
	protected $fillable = ['loan_id', 'applicant_id', 'cpa_financials', 'credit_score', 'grade', 'experience', 'amount_requested', 'collateral_equipment', 'collateral_realestate', 'year_1_revenue', 'year_1_expenses', 'year_2_revenue', 'year_2_expenses', 'year_3_revenue', 'year_3_expenses', 'current_assets', 'current_assets_factor', 'current_assets_liability', 'intermediate_assets', 'intermediate_assets_factor', 'intermediate_assets_liability', 'fixed_assets', 'fixed_assets_factor', 'fixed_assets_liability', 'debt2asset_ratio', 'debt2asset_ratio_adj', 'ratio_current', 'ratio_current_adj', 'capWork', 'capWork_adj', 'capBorrow', 'capBorrow_adj'];

    /* RELATIONSHIPS */
    public function applicant()
    {
        return $this->belongsTo('Applicant', 'applicant_id');
    }

    public function loan()
    {
        return $this->belongsTo('Loan', 'loan_id');
    }
    /* RELATIONSHIPS */
}