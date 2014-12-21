<?php

class Commentstatus extends \Eloquent {
	protected $table = 'commentstatus';
	protected $fillable = ['loan_id', 'comment_id', 'user_id', 'status'];

	//Relationships
	public function comment()
	{
		return $this->belongsTo('Comment', 'comment_id');
	}
}