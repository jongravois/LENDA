<?php

class Cropdetails extends \Eloquent {
	protected $hidden = ['created_at', 'updated_at'];
	protected $fillable = ['crop_year', 'loan_id', 'crop_id', 'is_active', 'irr', 'ni', 'faci', 'facni', 'towhom_market', 'bkqty', 'bkprice', 'gin_mill', 'rebate', 'prod_yield', 'prod_price', 'disc_prod_percent', 'disc_ins_percent', 'break_even', 'p1_yield', 'p2_yield', 'p3_yield', 'p4_yield', 'p5_yield', 'p6_yield'];

	/* RELATIONSHIPS */
	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}

	public function cropyield()
	{
		return $this->hasMany('Cropyield');
	}
}