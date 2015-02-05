<?php

class Applicant extends \Eloquent {
  protected $dates = array('dob');
  protected $fillable = ['grade', 'loc_id', 'entity_id', 'farmer_id', 'applicant', 'ssn', 'email', 'dob', 'address', 'phone', 'city', 'state_id', 'zip', 'spouse', 'spouse_ssn'];

  public function entitytype()
  {
    return $this->belongsTo('Entitytype', 'entity_id');
  }

  public function farmer()
  {
    return $this->belongsTo('Farmer', 'farmer_id');
  }

  public function loan()
  {
    return $this->hasMany('Loan', 'applicant_id');
  }

  public function location()
  {
    return $this->belongsTo('Location', 'loc_id');
  }

  public function state()
  {
    return $this->belongsTo('State', 'state_id');
  }
}