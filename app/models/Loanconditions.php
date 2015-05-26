<?php

class Loanconditions extends \Eloquent
{
    protected $hidden = ['created_at', 'updated_at'];
    protected $fillable = ['crop_year', 'loan_id', 'condition_id', 'condition', 'status', 'action_date'];

}