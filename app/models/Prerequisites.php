<?php

class Prerequisites extends \Eloquent
{
    protected $dates = array('date_requested', 'date_received');
    protected $fillable = ['loan_id', 'document', 'date_requested', 'date_received', 'reason_pending', 'filename', 'path'];
}