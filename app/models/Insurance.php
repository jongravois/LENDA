<?php

class Insurance extends \Eloquent {
	protected $table = 'insurance';

	protected $fillable = ['farmpractice_id', 'agent_id', 'fsn', 'policy', 'is_assigned', 'option', 'acres', 'practice', 'type', 'price', 'yield', 'level', 'premium', 'share'];

	/* RELATIONSHIPS */
    public function agent()
    {
        return $this->belongsTo('Agents', 'agent_id');
    }

    public function agency()
    {
        return $this->belongsTo('Agency', 'agency_id');
    }

    public function crop()
    {
        return $this->belongsTo('Crop', 'crop_id');
    }

    public function county()
    {
        return $this->belongsTo('County', 'county_id');
    }

    public function farm()
    {
        return $this->belongsTo('Farm', 'fsn', 'fsn');
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