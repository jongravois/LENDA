<?php

class Comment extends \Eloquent {
	protected $fillable = ['loan_id', 'type', 'user_id', 'comment'];

	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function status()
	{
		return $this->hasMany('Commentstatus');
	}

	public function responses()
	{
		return $this->hasMany('Commentresponse');
	}

  public function user()
	{
		return $this->belongsTo('User', 'user_id');
	}
}