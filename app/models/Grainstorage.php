<?php

class Grainstorage extends \Eloquent {
	protected $table = 'grainstorage';
	protected $dates = ['contract_date', 'delivery_date'];
	protected $fillable = ['loan_id', 'contract_number', 'contract_date', 'delivery_date', 'grain_buyer', 'lien_holder', 'contract_amount', 'contract_price', 'owner_share', 'revenue', 'eligible_proceeds', 'advance_percent', 'payment_terms'];
}