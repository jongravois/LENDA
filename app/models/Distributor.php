<?php

class Distributor extends \Eloquent {
	public $timestamps = false;
    protected $fillable = ['distributor', 'name', 'address', 'city', 'state_id', 'zip', 'phone', 'email'];

  //Relationships
  public function state()
  {
    return $this->belongsTo('State', 'state_id');
  }
}