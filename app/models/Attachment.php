<?php

class Attachment extends \Eloquent {
    protected $table = 'attachments';
	protected $fillable = ['title', 'filename', 'filetype', 'description'];

    /* RELATIONSHIPS */
    public function loan()
    {
        return $this->belongsTo('Loan', 'loan_id');
    }
}