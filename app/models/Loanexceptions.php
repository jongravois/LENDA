<?php

class Loanexceptions extends \Eloquent {
	protected $table = 'loanexceptions';
	protected $fillable = ['loan_id', 'exception_id', 'exception_name', 'msg'];

	//RELATIONSHIPS
	public function exceptions()
	{
		return $this->belongsTo('Exceptions', 'exception_id');
	}
}