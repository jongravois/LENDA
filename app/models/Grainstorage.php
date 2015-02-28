<?php

use Carbon\Carbon;

class Grainstorage extends \Eloquent {
	protected $table = 'grainstorage';
	protected $dates = ['contract_date', 'delivery_date'];
	protected $fillable = ['loan_id', 'contract_number', 'contract_date', 'delivery_date', 'commodity', 'grain_buyer', 'lien_holder', 'contract_amount', 'contract_price', 'owner_share', 'amount_requested', 'revenue', 'eligible_proceeds', 'advance_percent', 'payment_terms'];

  public function setContractDateAttribute($date)
  {
    $this->attributes['contract_date'] = Carbon::parse($date);
  }

  public function setDeliveryDateAttribute($date)
  {
    $this->attributes['delivery_date'] = Carbon::parse($date);
  }
} // end class