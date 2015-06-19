<?php

class Insurance extends \Eloquent {
	protected $table = 'insurance';

	protected $fillable = ['farmpractice_id', 'agent_id', 'policy', 'is_assigned', 'option', 'acres', 'practice', 'type', 'price', 'yield', 'level', 'premium', 'share'];

	/* RELATIONSHIPS */
    public function agent()
    {
        return $this->belongsTo('Agents', 'agent_id');
    }

    public function farmpractice()
    {
        return $this->belongsTo('Farmpractices', 'farmpractice_id');
    }

    public function farmpractices()
    {
        return $this->belongsTo('Farmpractices', 'farmpractice_id');
    }

    public function suppins()
    {
        return $this->hasMany('Supplementalinsurance');
    }
    /* RELATIONSHIPS */
}