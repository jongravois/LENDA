<?php

class Addendumtype extends \Eloquent {
    public $timestamps = false;
	protected $fillable = ['type'];

    /* RELATIONSHIPS */
    public function addloan()
    {
        return $this->belongsTo('AddLoan');
    }
    /* RELATIONSHIPS */
}