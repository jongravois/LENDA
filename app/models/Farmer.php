<?php

class Farmer extends \Eloquent {
  protected $table = 'farmers';
  protected $hidden = ['created_at', 'updated_at'];
  protected $dates = array('dob');
  protected $fillable = ['user_id', 'farmer', 'nick', 'ssn', 'address', 'city', 'state_id', 'zip', 'email', 'phone', 'dob', 'farm_exp', 'loc_id', 'is_repeat'];

  /* RELATIONSHIPS */
  public function location()
  {
    return $this->belongsTo('location', 'loc_id');
  }

  public function state()
  {
    return $this->belongsTo('state', 'state_id');
  }

  public function user()
  {
    return $this->belongsTo('User');
  }

  /* METHODS */
}