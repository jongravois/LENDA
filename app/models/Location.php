<?php

class Location extends Eloquent {
  protected $hidden = ['created_at', 'updated_at'];
  protected $fillable = ['location', 'loc_abr', 'region_id', 'address', 'city', 'state', 'zip', 'phone', 'manager_id'];

  public function staff()
  {
    return $this->belongsTo('Staff');
  }

  /*
  public function applicant()
  {
    return $this->belongsTo('Applicant');
  }
*/
  public function manager()
  {
    return $this->belongsTo('Staff', 'manager_id');
  }

  public function region()
  {
    return $this->belongsTo('Region');
  }
}