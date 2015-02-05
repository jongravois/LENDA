<?php

class Farmpractices extends \Eloquent {
	protected $fillable = ['crop_year', 'loan_id', 'farm_id', 'crop_id', 'practice', 'ins_type', 'ins_price', 'ins_level', 'aph', 'ins_premium', 'acres', 'ins_share', 'prod_share', 'mill_share', 'prod_yield', 'prod_price', 'bkqty', 'bkprice', 'harvest', 'rebates', 'disc_prod_percent', 'disc_ins_percent', 'disc_non_rp', 'percent_irrigated', 'break_even', 'margin', 'risk'];

	public function farm()
	{
		return $this->belongsTo('Farm', 'farm_id');
	}

	public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}
}