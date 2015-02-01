<?php

class Screen extends \Eloquent
{
    public $timestamps = false;
    protected $fillable = ['loantype_id', 'screen', 'label', 'sort_order'];

    /* RELATIONSHIPS */
    public function loantypes()
    {
        return $this->belongsTo('Loantypes', 'loantype_id');
    }
}