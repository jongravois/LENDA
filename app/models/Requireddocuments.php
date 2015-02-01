<?php

class Requireddocuments extends \Eloquent
{
    public $table = 'requireddocuments';
    public $timestamps = false;
    protected $fillable = ['loantype_id', 'document'];

    public function loantype()
    {
        return $this->belongsTo('Loantype', 'loantype_id');
    }
}