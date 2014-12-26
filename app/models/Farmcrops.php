<?php

class Farmcrops extends \Eloquent {
	protected $fillable = ['crop_year', 'loan_id', 'farm_id', 'crop_id', 'towhom_market', 'future_liable_quantity', 'future_liable_amount', 'gin_mill', 'ins_type', 'ins_price', 'ins_level', 'ins_yield', 'ins_premium', 'acres', 'mill_share', 'ins_share', 'prod_share', 'prod_yield', 'prod_price', 'bkqty', 'bkprice', 'harvest', 'rebates', 'disc_prod_percent', 'disc_ins_percent', 'percent_irrigated'];

	/* RELATIONSHIPS */
	public function farm(){
		return $this->belongsTo('Farm', 'farm_id');
	}

	public function crop(){
		return $this->belongsTo('Crop', 'crop_id');
	}
	/* METHODS */

}