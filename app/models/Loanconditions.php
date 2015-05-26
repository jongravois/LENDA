<?php

class Loanconditions extends \Eloquent
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['crop_year', 'loan_id', 'category', 'condition', 'status', 'action_date'];

}