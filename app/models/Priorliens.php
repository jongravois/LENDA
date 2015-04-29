<?php

class Priorliens extends \Eloquent {
	protected $fillable = ['loan_id', 'lien_holder', 'city_state', 'contact', 'phone', 'email', 'projected_crops', 'fsa_payments', 'ins_over_discount', 'nonrp_discount', 'supplemental_coverage', 'claims', 'equipment', 'realestate', 'other'];

	// RELATIONSHIPS
	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}
}