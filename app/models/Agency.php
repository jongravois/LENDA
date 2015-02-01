<?php

class Agency extends \Eloquent
{
    public $timestamps = false;
    protected $fillable = ['agency', 'name', 'address', 'city', 'state', 'zip', 'phone', 'email'];
}