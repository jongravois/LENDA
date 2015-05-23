<?php

class Profile extends \Eloquent {
  protected $table = 'profiles';
  protected $hidden = ['created_at', 'updated_at'];
  protected $fillable = ['user_id', 'homepage', 'cbCommentLenda', 'cbCommentCommittee', 'cbCommentAnalyst', 'cbCommentAccount', 'cbStatusInProgress', 'cbStatusRecommended', 'cbStatusWithdrawn', 'cbStatusApproved', 'cbStatusDenied', 'cbStatusPaid'];

  public function user()
  {
    return $this->belongsTo('User', 'user_id');
  }
}