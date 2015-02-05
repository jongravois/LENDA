<?php

class Loantype extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['loantype', 'ltPath', 'default_due_date'];

  public function reqdocs()
  {
    return $this->hasMany('Requireddocuments');
  }
}