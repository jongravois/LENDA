<?php

use Acme\Transformers\ReportTransformer;

class ReportsController extends ApiController {

	protected $reportTransformer;

	function __construct(ReportTransformer $reportTransformer)
	{
		$this->reportTransformer = $reportTransformer;
	}

	public function index()
	{
		$reports = Report::all();

		return $this->respond([
			'data' => $this->reportTransformer->transformCollection($reports->all())
		]);
	}

	public function show($id)
	{
		$report = Report::where('id', $id)->get();

		if( $report->isEmpty() ){
			return $this->respondNotFound('Report does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->reportTransformer->transform($report[0])
		]);
	}

	public function store()
	{
		if( ! Input::get('email')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Report::create(Input::all());

		return $this->respondCreated('Report created.');
	}

	public function update($id)
	{
		$report = Report::find($id);

		if(!$report){
			Report::create(Input::all());
			return $this->respondCreated('Report created.');
		}

		$report->fill(Input::all())->save();

		return $this->respondCreated('Report updated.');
	}

	public function destroy($id)
	{
		return Report::where('id', $id)->delete();
	}
}