<?php

class Location extends Eloquent {
  protected $hidden = ['created_at', 'updated_at'];
  protected $fillable = ['location', 'loc_abr', 'region_id', 'address', 'city', 'state', 'zip', 'phone', 'manager_id'];

  public function user()
  {
    return $this->belongsTo('User');
  }

  /*
  public function applicant()
  {
    return $this->belongsTo('Applicant');
  }
*/
  public function manager()
  {
    return $this->belongsTo('User', 'manager_id');
  }

  public function region()
  {
    return $this->belongsTo('Region');
  }

  public function counties()
  {
    return $this->hasMany('County');
  }
}