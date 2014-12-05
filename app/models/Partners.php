<?php

class Partners extends \Eloquent {
	protected $fillable = ['loan_id', 'partner', 'ssn', 'address', 'city', 'state_id', 'zip', 'email', 'phone'];
}