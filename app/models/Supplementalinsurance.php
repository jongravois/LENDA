<?php

class Supplementalinsurance extends \Eloquent {
	protected $fillable = ['insurance_id', 'supplement', 'harvest_price_exclusion', 'loss_trigger', 'desired_range', 'protection_factor', 'expected_yield'];

	/* RELATIONSHIPS */
	public function insurance()
	{
		return $this->belongsTo('Insurance', 'insurance_id');
	}
	/* RELATIONSHIPS */
}