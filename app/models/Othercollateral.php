<?php

class Othercollateral extends \Eloquent {
	protected $fillable = ['loan_id', 'source', 'description', 'amount'];

	/* RELATIONSHIPS */
	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}
	/* RELATIONSHIPS */
}