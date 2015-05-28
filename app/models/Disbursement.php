<?php

class Disbursement extends \Eloquent {
	protected $fillable = ['loan_id', 'crop_year', 'cat_id', 'expense', 'arm_budget', 'spent', 'requested', 'status'];

	public function loan()
    {
        return $this->belongsTo('Loan', 'loan_id');
    }
}