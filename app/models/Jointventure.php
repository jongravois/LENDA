<?php

class Jointventure extends \Eloquent {
	protected $fillable = ['loan_id', 'partner', 'percent_owned', 'ssn', 'address', 'city', 'state_id', 'zip', 'email', 'phone', 'age'];

	public function states()
	{
		return $this->belongsTo('state', 'state_id');
	}
}