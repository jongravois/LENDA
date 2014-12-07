<?php

class Screen extends \Eloquent {
  public $timestamps = false;
  protected $fillable = ['loantype_id', 'screen', 'sort_order'];

  /* RELATIONSHIPS */
  public function loantypes()
  {
    return $this->belongsTo('loantypes', 'loantype_id');
  }
}