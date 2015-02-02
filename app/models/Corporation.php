<?php

class Corporation extends \Eloquent {
	protected $fillable = ['loan_id', 'corporation', 'ssn', 'address', 'city', 'state_id', 'zip', 'email', 'phone', 'president', 'vicepresident', 'secretary', 'treasurer'];
}