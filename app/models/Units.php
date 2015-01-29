<?php

class Units extends \Eloquent
{
    public $timestamps = false;
    protected $fillable = ['unit', 'abr', 'toPounds'];
}