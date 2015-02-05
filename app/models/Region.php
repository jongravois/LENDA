<?php

class Region extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['region'];

  /* RELATIONSHIPS */
  public function loans()
  {
    return $this->belongsTo('Loan');
  }
  /* RELATIONSHIPS */
}