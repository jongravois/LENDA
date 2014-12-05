<?php

class Crop extends \Eloquent {
	protected $hidden = ['created_at', 'updated_at'];
	protected $fillable = ['crop', 'measurement', 'rebate_measurement'];

	public function cropdetails()
	{
		return $this->hasOne('Cropdetails');
	}

	public function loan()
	{
		return $this->belongsToMany('Loan');
	}
}