<?php

class Responses extends \Eloquent
{
    protected $fillable = ['loan_id', 'comment_id', 'user_id', 'body'];

    public function comments()
    {
        return $this->belongsTo('Comments', 'comment_id');
    }

    public function user()
    {
        return $this->belongsTo('User', 'user_id');
    }
}