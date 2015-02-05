<?php

class Loandistributor extends \Eloquent {
	protected $table = 'loandistributor';
	protected $fillable = ['loan_id', 'distributor_id', 'contact', 'phone', 'email'];

	public function distributor()
	{
		return $this->belongsTo('Distributor', 'distributor_id');
	}
}