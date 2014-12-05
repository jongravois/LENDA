<?php

class Staff extends \Eloquent {
  protected $table = 'staff';
  protected $hidden = ['created_at', 'updated_at'];
  // protected $dates = array('dob');
  protected $fillable = ['user_id', 'username', 'nick', 'email', 'phone', 'loc_id', 'manager_id', 'is_admin', 'is_approver', 'is_manager', 'role_id'];

  /* RELATIONSHIPS */
  public function location()
  {
    return $this->belongsTo('location', 'loc_id');
  }

  public function role()
  {
    return $this->belongsTo('role', 'role_id');
  }

  /* METHODS */
}