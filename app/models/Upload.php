<?php

class Upload extends \Eloquent {
	protected $fillable = ['loan_id', 'user_id', 'document', 'filename', 'path', 'filetype', 'original_filename'];
}