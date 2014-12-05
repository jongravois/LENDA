<?php

class Loanstatus extends Eloquent {
    protected $table = 'loanstatus';
	public $timestamps = false;
	protected $fillable = ['status'];

}