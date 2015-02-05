<?php

class Loanexceptions extends \Eloquent {
	protected $table = 'loanexceptions';
	protected $fillable = ['loan_id', 'exception_id', 'msg'];
}