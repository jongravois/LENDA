<?php

class Insurance extends \Eloquent {
	protected $table = 'insurance';

	protected $fillable = ['loan_id', 'agency_id', 'agent_id', 'policy', 'is_assigned', 'fsn', 'loancounty_id', 'loancrop_id', 'practice', 'type', 'option', 'acres', 'price', 'yield', 'level', 'premium', 'share', 'guaranty', 'value'];

	/* RELATIONSHIPS */
    public function agency()
    {
        return $this->belongsTo('Agency', 'agency_id');
    }

    public function agent()
    {
        return $this->belongsTo('Agents', 'agent_id');
    }

    public function county()
	{
		return $this->belongsTo('County', 'loancounty_id');
	}

	public function crop()
	{
		return $this->belongsTo('Crop', 'loancrop_id');
	}

    public function farm()
    {
        return $this->belongsTo('Farm', 'fsn', 'fsn');
    }
    /* RELATIONSHIPS */
}