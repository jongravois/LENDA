<?php

class Exceptions extends \Eloquent {
	public $timestamps = false;
	protected $fillable = ['message'];
}