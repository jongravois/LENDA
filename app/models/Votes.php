<?php

class Votes extends \Eloquent {
	public $table = 'vote';
	public $timestamps = false;
	protected $fillable = ['vote'];
}