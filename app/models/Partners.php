<?php

class Partners extends \Eloquent {
	protected $fillable = ['loan_id', 'partner', 'title', 'percent_owned', 'age', 'ssn', 'address', 'city', 'state_id', 'zip', 'email', 'phone'];

	public function states()
	{
		return $this->belongsTo('State', 'state_id');
	}
}