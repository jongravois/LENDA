<?php

class Votestatus extends \Eloquent
{
    public $table = 'votestatus';
    public $timestamps = false;
    protected $fillable = ['status'];
}