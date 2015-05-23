<?php

use Acme\Transformers\reportfiltersTransformer;

class reportfiltersController extends ApiController {

	protected $reportfilterTransformer;

	function __construct(reportfiltersTransformer $reportfilterTransformer)
	{
		$this->reportfilterTransformer = $reportfilterTransformer;
	}


	public function index()
	{
		$all = reportfilters::all();

		return $this->respond([
			'data' => $this->reportfilterTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = reportfilters::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('reportfilters does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->reportfilterTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		$single = reportfilters::create(Input::all());

		return $this->respondCreated($single->id);
	}

	public function update($id)
	{
		$single = reportfilters::find($id);
		$single->fill(Input::all())->save();
	}

	public function destroy($id)
	{
	    return reportfilters::where('id', $id)->delete();
	}

}