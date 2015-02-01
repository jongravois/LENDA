<?php

class County extends \Eloquent
{
    public $timestamps = false;
    protected $fillable = ['state_id', 'location_id', 'county', 'label', 'locale'];

    /* RELATIONSHIPS */
    public function states()
    {
        return $this->belongsTo('State', 'state_id');
    }

    public function farms()
    {
        return $this->hasMany('Farm', 'county_id');
    }

    public function defaults()
    {
        return $this->hasOne('Countiescropdefault');
    }

}