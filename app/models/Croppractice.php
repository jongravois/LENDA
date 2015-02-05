<?php

class Croppractice extends \Eloquent {
	public $timestamps = false;
	protected $table = 'croppractices';
	protected $fillable = ['crop_id', 'crop', 'practice'];
}