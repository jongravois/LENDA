<?php

class Agency extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['agency', 'address', 'city', 'state', 'zip', 'phone', 'email'];

  public function insurance()
  {
      return $this->belongsTo('Insurance', 'agency_id');
  }
}