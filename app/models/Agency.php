<?php

class Agency extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['agency', 'address', 'city', 'state', 'zip', 'phone', 'email'];
}