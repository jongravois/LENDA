<?php

class Loanconditions extends \Eloquent {
	protected $dates = array('action_date');
	protected $fillable = ['crop_year', 'loan_id', 'condition_id',  'condition', 'status', 'action_date'];
}