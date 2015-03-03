<?php

class Exceptions extends \Eloquent {
	public $timestamps = false;
	protected $fillable = ['title', 'message'];

	public function	loanexceptions()
	{
		return $this->hasMany('Loanexceptions');
	}
}