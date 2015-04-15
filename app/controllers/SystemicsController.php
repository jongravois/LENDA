<?php

use Acme\Transformers\SystemicTransformer;

class SystemicsController extends ApiController {

	protected $systemicTransformer;

	function __construct(SystemicTransformer $systemicTransformer)
	{
		$this->systemicTransformer = $systemicTransformer;
	}

	public function index()
	{
		$notes = Systemics::all();
		return $this->respond([
			'data' => $this->systemicTransformer->transformCollection($notes->all())
		]);
	}

	public function store()
	{
		Systemics::create(Input::all());

		return $this->respondCreated('Note created');
	}

	public function show($id)
	{
		$note = Systemics::where('id', $id)->get();

		if( $note->isEmpty() ){
			return $this->respondNotFound('Unit does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->systemicTransformer->transform($unit[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		Systemics::firstOrCreate(Input::all());

		return $this->respondCreated('Note updated.');
	}

	public function destroy($id)
	{
		return Systemics::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$notes = Systemics::where('loan_id', $id)->get();

		if( $notes->isEmpty() ){
			return $this->respondNotFound('Notes do not exist.');
		} // end if

		return $this->respond([
			'data' => $this->systemicTransformer->transformCollection($notes->all())
		]);
	}

}