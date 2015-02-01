<?php

class State extends \Eloquent
{
    public $timestamps = false;
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['abr', 'state'];

    /* RELATIONSHIPS */
    public function counties()
    {
        return $this->hasMany('County');
    }

}