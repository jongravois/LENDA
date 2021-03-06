<?php

class Committee extends \Eloquent {
	public $table = 'committee';
	protected $fillable = ['loan_id', 'role_id', 'user_id', 'committee_role', 'vote_status', 'vote_request_date', 'vote_received_date', 'vote_id'];

	// RELATIONSHIPS //
	public function role()
	{
		return $this->belongsTo('Role', 'role_id');
	}

	public function user()
	{
		return $this->belongsTo('User', 'user_id');
	}

	public function vote()
	{
		return $this->belongsTo('Votes', 'vote_id');
	}
}