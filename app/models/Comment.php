<?php

class Comment extends \Eloquent {
	protected $fillable = ['loan_id', 'type', 'user_id', 'comment'];

	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function responses()
	{
		return $this->hasMany('responses');
	}

  public function staff()
  {
    return $this->belongsTo('Staff', 'user_id');
  }

  public function user()
	{
		return $this->belongsTo('User', 'user_id');
	}
}