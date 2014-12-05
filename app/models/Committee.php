<?php

class Committee extends \Eloquent {
	public $table = 'committee';
	protected $fillable = ['loan_id', 'role_id', 'user_id', 'vote_status_id', 'vote_request_date', 'vote_received_date', 'vote_id'];

	// RELATIONSHIPS //
	public function role()
	{
		return $this->belongsTo('role', 'role_id');
	}

	public function user()
	{
		return $this->belongsTo('staff', 'user_id');
	}

	public function vote()
	{
		return $this->belongsTo('votes', 'vote_id');
	}

	public function vote_status()
	{
		return $this->belongsTo('votestatus', 'vote_status_id');
	}
}