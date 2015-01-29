<?php

class Globals extends \Eloquent
{
    public $timestamps = false;

    protected $fillable = ['crop_year', 'season', 'int_percent_arm', 'int_percent_dist', 'proc_fee_rate', 'svc_fee_rate'];
}