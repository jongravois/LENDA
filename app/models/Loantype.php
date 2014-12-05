<?php

class Loantype extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['loantype', 'ltPath'];

  public function reqdocs()
  {
    return $this->hasMany('Requireddocuments');
  }
}