<?php

class Supplementalinsurance extends \Eloquent {
	protected $fillable = ['loan_id', 'crop_id', 'county_id', 'insurance_id', 'supplement', 'harvest_price_exclusion', 'acres', 'aph', 'price', 'share', 'level', 'loss_trigger', 'desired_range', 'range', 'protection_factor', 'expected_yield', 'expected_revenue', 'max_indemnity'];

	/* RELATIONSHIPS */
	public function insurance()
	{
		return $this->belongsTo('Insurance', 'insurance_id');
	}

    /* RELATIONSHIPS */
}