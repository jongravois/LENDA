<?php

class Distributor extends \Eloquent {
	public $timestamps = false;
    protected $fillable = ['distributor', 'name', 'address', 'city', 'state', 'zip', 'locale', 'phone', 'email'];
}