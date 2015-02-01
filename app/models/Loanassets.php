<?php

class Loanassets extends \Eloquent
{
    protected $fillable = ['loan_id', 'total_arm', 'total_dist', 'total_other', 'total_total'];
}