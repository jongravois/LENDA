<?php

class Insurance extends \Eloquent {
	protected $table = 'insurance';

	protected $fillable = ['crop_year', 'loan_id', 'agency', 'agent', 'agent_phone', 'agent_email', 'policy', 'loancounty_id', 'loancrop_id', 'croppractice_id', 'type', 'option', 'acres', 'price', 'aph', 'level', 'guaranty', 'premium', 'share'];

	// Relationships
	public function county()
	{
		return $this->belongsTo('county', 'loancounty_id');
	}

	public function crop()
	{
		return $this->belongsTo('crop', 'loancrop_id');
	}

	public function practice()
	{
		return $this->belongsTo('croppractice', 'croppractice_id');
	}
}