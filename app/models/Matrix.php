<?php

class Matrix extends \Eloquent {
    protected $table = 'matrix';
    public $timestamps = false;
	protected $fillable = ['group_heading', 'responsibility', 'CEO', 'ABM', 'MGR', 'OAS', 'LBM', 'LOF', 'LAN', 'CON', 'HRM', 'IBM', 'IAS', 'COM'];
}

