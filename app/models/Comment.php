<?php

class Comment extends \Eloquent {
	protected $fillable = ['loan_id', 'type', 'user', 'comment'];

	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function responses()
	{
		return $this->hasMany('responses');
	}

	public function user()
	{
		return $this->belongsTo('User', 'user_id');
	}
}