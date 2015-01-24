<?php

use Eloquent;

class Affiliate extends Eloquent {
	protected $fillable = ['loan_id', 'entity_name', 'percent_owned'];
}