<?php

class Insurance extends \Eloquent {
	protected $table = 'insurance';

	protected $fillable = ['loan_id', 'agency_id', 'agent_id', 'policy', 'loancounty_id', 'loancrop_id', 'croppractice_id', 'type', 'option', 'acres', 'price', 'aph', 'level', 'guaranty', 'premium', 'share'];

	// Relationships
	public function county()
	{
		return $this->belongsTo('County', 'loancounty_id');
	}

	public function crop()
	{
		return $this->belongsTo('Crop', 'loancrop_id');
	}

	public function practice()
	{
		return $this->belongsTo('Croppractice', 'croppractice_id');
	}

	public function agency()
	{
		return $this->belongsTo('Agency', 'agency_id');
	}
}