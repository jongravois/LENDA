<?php

class Viewoptions extends \Eloquent {
	protected $fillable = ['user_id', 'view_region', 'view_season', 'view_distributor', 'view_agency', 'view_close_date', 'view_commit_total', 'view_commit_arm', 'view_commit_distributor', 'view_commit_other', 'view_fee_percentage', 'view_fee_total', 'view_rate_arm', 'view_rate_dist', 'view_balance_due', 'view_acres_total', 'view_acres_corn', 'view_acres_soybeans', 'view_acres_sorghum', 'view_acres_wheat', 'view_acres_cotton', 'view_acres_rice', 'view_acres_peanuts', 'view_acres_sugar_cane'];

	public function user()
	{
		return $this->belongsTo('user', 'user_id');
	}
}