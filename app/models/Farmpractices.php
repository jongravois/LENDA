<?php

class Farmpractices extends \Eloquent {
	protected $fillable = ['crop_year', 'loan_id', 'farm_id', 'crop_id', 'towhom_market', 'gin_mill', 'acres', 'irrigated', 'ins_type', 'ins_option', 'ins_price', 'ins_level', 'aph', 'ins_premium', 'ins_share', 'prod_share', 'mill_share', 'prod_yield', 'prod_price', 'bkqty', 'bkprice', 'harvest', 'rebates', 'crop_disc', 'fsa_disc', 'cropins_disc', 'nonrp_disc', 'sco_disc'];

	public function farm()
	{
		return $this->belongsTo('Farm', 'farm_id');
	}

	public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}
}