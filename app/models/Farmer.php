<?php


use Carbon\Carbon;

class Farmer extends \Eloquent {
  protected $table = 'farmers';
  protected $hidden = ['created_at', 'updated_at'];
  protected $dates = array('dob');
  protected $fillable = ['user_id', 'farmer', 'nick', 'ssn', 'address', 'city', 'state_id', 'zip', 'email', 'phone', 'dob', 'first_year_farmer', 'farm_exp', 'loc_id', 'new_client'];

    public function setDobAttribute($value)
    {
        $this->attributes['dob'] = Carbon::createFromFormat('d/m/Y', $value);
    }

  /* RELATIONSHIPS */
  public function location()
  {
    return $this->belongsTo('Location', 'loc_id');
  }

  public function state()
  {
    return $this->belongsTo('State', 'state_id');
  }

  public function user()
  {
    return $this->belongsTo('User');
  }

  /* METHODS */
}