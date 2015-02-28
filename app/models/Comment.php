<?php

class Comment extends \Eloquent {
	protected $fillable = ['loan_id', 'type', 'user_id', 'comment'];

	public function loan()
	{
		return $this->belongsTo('Loan', 'loan_id');
	}

	public function status()
	{
		return $this->hasOne('Commentstatus', 'comment_id');
	}

	public function responses()
	{
		return $this->hasMany('Responses');
	}

  public function user()
	{
		return $this->belongsTo('User', 'user_id');
	}
}