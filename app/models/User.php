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

  public function staff()
  {
    return $this->hasOne('staff');
  }

  public function profile()
  {
    return $this->hasOne('staffprofile');
  }

  /* METHODS */
  public function setPasswordAttribute($value){
    $this->attributes['password'] = Hash::make($value);
  }
}
