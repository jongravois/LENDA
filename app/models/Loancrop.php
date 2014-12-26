<?php

class Loancrop extends \Eloquent {
	protected $table = 'loancrops';
	protected $fillable = ['crop_year', 'loan_id', 'crop_id', 'acres', 'is_active', 'markettowhom', 'prod_price', 'prod_yield', 'prod_share', 'mill_share', 'ins_share', 'bkqty', 'bkprice', 'gin_mill', 'harvest', 'rebates', 'claims', 'fsa_payment', 'percent_irrigated', 'break_even', 'p1_yield', 'p2_yield', 'p3_yield', 'p4_yield', 'p5_yield', 'p6_yield'];

	public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}

	public function croppractice()
{
	return $this->belongsTo('Croppractices', 'croppractice_id');
}

public function farm()
{
	return $this->belongsTo('Farm', 'farm_id');
}

public function farmcrop()
{
	return $this->hasMany('Farmcrop');
}

public function loan()
{
	return $this->belongsTo('Loan', 'loan_id');
}


}

