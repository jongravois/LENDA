<?php

class Crosscollateral extends \Eloquent {
	protected $fillable = ['loan_id', 'collateral_id'];

    /* RELATIONSHIPS */
    public function loans()
    {
        return $this->hasMany('Loan', 'id', 'collateral_id');
    }
}