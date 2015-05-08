<?php

class Othercollateral extends \Eloquent {
	protected $fillable = ['loan_id', 'type', 'source', 'description', 'amount'];

	/* RELATIONSHIPS */
	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}
	/* RELATIONSHIPS */
}