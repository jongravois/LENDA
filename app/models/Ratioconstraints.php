<?php

class Ratioconstraints extends \Eloquent {
	public $table = 'ratioconstraints';
	public $timestamps = false;
	protected $fillable = ['constraint', 'gradeA', 'gradeB', 'gradeC', 'gradeD'];
}