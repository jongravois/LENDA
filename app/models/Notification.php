<?php

class Notification extends \Eloquent {
	protected $fillable = ['user_id', 'loan_id', 'notification_type', 'task', 'status'];

  public function user()
  {
    return $this->belongsTo('User', 'user_id');
  }
}