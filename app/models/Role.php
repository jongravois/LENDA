<?php

class Role extends \Eloquent {
	public $timestamps = false;
	protected $fillable = ['abr', 'role', 'employment_status'];
}