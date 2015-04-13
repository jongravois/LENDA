<?php

class Agents extends \Eloquent {
	protected $fillable = ['agency_id', 'agent', 'agent_phone', 'agent_email'];

	/* RELATIONSHIPS */
	public function agency()
	{
		return $this->belongsTo('Agency', 'agency_id');
	}
    /* RELATIONSHIPS */
}