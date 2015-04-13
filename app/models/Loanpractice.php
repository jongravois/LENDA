<?php

class Loanpractice extends \Eloquent {
	protected $fillable = ['crop_year', 'loan_id', 'crop_id', 'crop', 'is_active', 'ins_type', 'ins_option', 'ins_price', 'ins_level', 'aph', 'ins_premium', 'acres', 'ins_share', 'guaranty', 'value'];

	/* RELATIONSHIPS */
    public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}
    /* RELATIONSHIPS */
}
