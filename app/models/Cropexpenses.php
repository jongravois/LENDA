<?php

class Cropexpenses extends \Eloquent {
	protected $fillable = ['loan_id', 'crop_id', 'cat_id', 'loancrop_id', 'expense', 'arm', 'arm_adj', 'dist', 'dist_adj', 'other', 'other_adj'];

	public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}

	public function loancrop()
	{
		return $this->belongsTo('Loancrop', 'loancrop_id');
	}
}