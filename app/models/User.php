<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	protected $table = 'users';
	protected $hidden = ['password', 'remember_token'];
  protected $fillable = ['email', 'password', 'active', 'is_staff', 'remember_token'];

  public function client()
  {
    return $this->hasOne('farmer');
  }

  public function clientprofile()
  {
    return $this->hasOne('clientprofile');
  }

  public function staff()
  {
    return $this->hasOne('staff');
  }

  public function staffprofile()
  {
    return $this->hasOne('staffprofile');
  }

  /* METHODS */
  public function setPasswordAttribute($value){
    $this->attributes['password'] = Hash::make($value);
  }
}
