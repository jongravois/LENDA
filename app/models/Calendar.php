<?php

class Calendar extends \Eloquent {
    protected $dates = ['start', 'end'];
	protected $fillable = ['title', 'start', 'end', 'allDay', 'durationEditable', 'calendar_group', 'event_access', 'url'];
}