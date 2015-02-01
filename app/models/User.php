<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface
{

    use UserTrait, RemindableTrait;

    protected $table = 'users';
    protected $hidden = ['password', 'remember_token'];
    protected $fillable = ['username', 'nick', 'email', 'password', 'phone', 'loc_id', 'region_id', 'manager_id', 'is_admin', 'is_approver', 'is_manager', 'role_id', 'active', 'remember_token'];

    public function location()
    {
        return $this->belongsTo('Location', 'loc_id');
    }

    public function notifications()
    {
        return $this->hasMany('Notification');
    }

    public function profile()
    {
        return $this->hasOne('Profile');
    }

    public function role()
    {
        return $this->belongsTo('Role', 'role_id');
    }

    public function viewoptions()
    {
        return $this->belongsTo('Viewoptions', 'id', 'user_id');
    }

    /* METHODS */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
