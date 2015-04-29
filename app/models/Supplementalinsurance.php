<?php

class Supplementalinsurance extends \Eloquent {
	protected $fillable = ['loan_id', 'crop_id', 'county_id', 'supplement', 'harvest_price_exclusion', 'aph', 'level', 'price', 'loss_trigger', 'desired_range', 'range', 'protection_factor', 'expected_yield', 'expected_revenue', 'max_indemnity', 'acres', 'share'];

	/* RELATIONSHIPS */
	public function loans()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function counties()
	{
		return $this->belongsTo('County', 'county_id');
	}

	public function crops()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}
	/* RELATIONSHIPS */
}