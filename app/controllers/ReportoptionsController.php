<?php

use Acme\Transformers\ReportoptionTransformer;

class ReportoptionsController extends ApiController {

    protected $reportoptionTransformer;

    function __construct(ReportoptionTransformer $reportoptionTransformer)
    {
        $this->reportoptionTransformer = $reportoptionTransformer;
    }

    public function index()
    {
        $reportoptions = Reportoptions::all();

        return $this->respond([
            'data' => $this->reportoptionTransformer->transformCollection($reportoptions->all())
        ]);
    }

    public function show($id)
    {
        $reportoption = Reportoptions::where('id', $id)->get();

        if( $reportoption->isEmpty() ){
            return $this->respondNotFound('Reportoption does not exist.');
        } // end if

        return $this->respond([
            'data' => $this->reportoptionTransformer->transform($reportoption[0])
        ]);
    }

    public function store()
    {
        Reportoptions::create(Input::all());

        return $this->respondCreated('Reportoption created.');
    }

    public function update($id)
    {
        $reportoption = Reportoptions::find($id);

        if(!$reportoption){
            Reportoptions::create(Input::all());
            return $this->respondCreated('Reportoption created.');
        }

        $reportoption->fill(Input::all())->save();

        return $this->respondCreated('Reportoption updated.');
    }

    public function destroy($id)
    {
        return Reportoptions::where('id', $id)->delete();
    }
}