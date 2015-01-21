<?php

class Cropexpenses extends \Eloquent {
	protected $fillable = ['loan_id', 'crop_id', 'cat_id', 'expense', 'arm', 'arm_adj', 'dist', 'dist_adj', 'other', 'other_adj'];

	public function crop()
	{
		return $this->belongsTo('Crop', 'crop_id');
	}
}