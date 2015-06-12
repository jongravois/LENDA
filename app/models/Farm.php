<?php

class Farm extends \Eloquent {
	protected $hidden = ['created_at', 'updated_at'];
	protected $fillable = ['loan_id', 'county_id', 'fsn', 'owner', 'perm_ins', 'share_rent', 'cash_rent', 'waived', 'when_due', 'irr', 'ni', 'percent_irrigated', 'fsa_paid'];

	/* RELATIONSHIPS */
	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function county()
	{
		return $this->belongsTo('County','county_id');
	}

	public function details(){
		return $this->belongsTo('Farmcrop');
	}

	public function loanpractices()
	{
		return $this->hasMany('Loanpractice');
	}

    public function farmpractices()
    {
        return $this->hasMany('Farmpractices');
    }

    public function crops()
    {
        return $this->hasMany('Farmcrops');
    }
	/* METHODS */
}