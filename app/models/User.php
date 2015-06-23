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
    protected $fillable = ['username', 'nick', 'email', 'outlook', 'password', 'phone', 'loc_id', 'region_id', 'manager_id', 'closer_id', 'is_admin', 'is_approver', 'is_manager', 'role_id', 'comms_email', 'comms_sms', 'comms_outlook', 'comms_online', 'active', 'full_sidebar', 'remember_token'];

    /* MODEL EVENTS */
    public static function boot()
    {
        parent::boot();
    }

    public function getId()
    {
        return $this->id;
    }

    /* RELATIONSHIPS */
    public function closer()
    {
        return $this->belongsTo('User', 'manager_id');
    }

    public function location()
    {
        return $this->belongsTo('Location', 'loc_id');
    }

    public function notifications()
    {
        return $this->hasMany('Notification');
    }

    public function manager()
    {
        return $this->belongsTo('User', 'manager_id');
    }

    public function profile()
    {
        return $this->hasOne('Profile');
    }

    public function region()
    {
        return $this->belongsTo('Region', 'region_id');
    }

    public function reportfilters()
    {
        return $this->belongsTo('Reportfilters', 'id', 'user_id');
    }

    public function reportoptions()
    {
        return $this->belongsTo('Reportoptions', 'id', 'user_id');
    }

    public function role()
    {
        return $this->belongsTo('Role', 'role_id');
    }

    public function viewfilters()
    {
        return $this->belongsTo('Viewfilters', 'id', 'user_id');
    }

    public function viewoptions()
    {
        return $this->belongsTo('Viewoptions', 'id', 'user_id');
    }

    public function optimizeroptions()
    {
        return $this->belongsTo('Optimizerviewoption', 'id', 'user_id');
    }

    /* METHODS */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
