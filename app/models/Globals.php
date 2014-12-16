<?php

class Globals extends \Eloquent {
	public $timestamps = false;

	protected $fillable = ['crop_year', 'season', 'arm_interest_rate', 'dist_interest_rate', 'proc_fee_rate', 'svc_fee_rate'];
}