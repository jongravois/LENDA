<?php

use Acme\Transformers\CalendarTransformer;

class CalendarController extends ApiController {

    protected $calendarTransformer;

    function __construct(CalendarTransformer $calendarTransformer)
    {
        $this->calendarTransformer = $calendarTransformer;
    }

    public function index()
    {
        $calendars = Calendar::all();

        return $this->respond([
            'data' => $this->calendarTransformer->transformCollection($calendars->all())
        ]);
    }

    public function show($id)
    {
        $calendar = Calendar::where('id', $id)->get();

        if( $calendar->isEmpty() ){
            return $this->respondNotFound('Calendar does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->calendarTransformer->transform($calendar[0])
        ]);
    }

    public function store()
    {
        Calendars::create(Input::all());

        return $this->respondCreated('Calendar created.');
    }

    public function update($id)
    {
        $calendar = Calendar::find($id);

        if(!$calendar){
            Calendar::create(Input::all());
            return $this->respondCreated('Calendar created.');
        }

        $calendar->fill(Input::all())->save();

        return $this->respondCreated('Calendar updated.');
    }

    public function destroy($id)
    {
        return Calendar::where('id', $id)->delete();
    }
}