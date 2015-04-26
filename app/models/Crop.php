<?php

class Crop extends \Eloquent {
	protected $hidden = ['created_at', 'updated_at'];
	protected $fillable = ['crop', 'name', 'tea', 'arm_default_price', 'arm_default_ins_price', 'arm_default_yield', 'measurement', 'rebate_measurement'];

	public function cropdetails()
	{
		return $this->hasOne('Cropdetails');
	}

    public function loan()
	{
		return $this->belongsToMany('Loan');
	}

    public function expenses()
    {
        return $this->hasOne('Expenses');
    }
}