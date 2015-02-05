<?php

class Report extends \Eloquent {
    protected $hidden = ['created_at', 'updated_at'];
	protected $fillable = ['report', 'rptPath', 'is_required'];
}