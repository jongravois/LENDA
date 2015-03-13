<?php namespace Acme\Transformers;

use Carbon\Carbon;

class CalendarTransformer extends Transformer{

    public function transform($arr)
    {
        //return $arr;
        return [
            'id' => $arr['id'],
            'title' => $arr['title'],
            'start' => $arr['start']->format('Y-m-d h:i:s'),
            'end' => $arr['end']->format('Y-m-d h:i:s'),
            'allDay' => (boolean) $arr['allDay'],
            'durationEditable' => (boolean) $arr['durationEditable'],
            'calendar_group' => $arr['calendar_group'],
            'event_access' => $arr['event_access'],
            'event_access' => $arr['event_access']
        ];
    }
}