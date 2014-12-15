<?php

class Reference extends \Eloquent {
	protected $fillable = ['loan_id', 'creditor', 'city_state', 'contact', 'phone', 'email'];
}