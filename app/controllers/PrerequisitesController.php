<?php

use Acme\Transformers\PrerequisiteTransformer;

class PrerequisitesController extends ApiController {

	protected $prerequisiteTransformer;

	function __construct(PrerequisiteTransformer $prerequisiteTransformer)
	{
		$this->prerequisiteTransformer = $prerequisiteTransformer;
	}

	public function index()
	{
		$docs = Prerequisites::all();
		return $this->respond([
			'data' => $this->prerequisiteTransformer->transformCollection($docs->all())
		]);
	}

	public function store()
	{
		Prerequisites::create(Input::all());

		return $this->respondCreated('Document created');
	}

	public function show($id)
	{
		$doc = Prerequisites::where('id', $id)->get();

		if( $doc->isEmpty() ){
			return $this->respondNotFound('Document does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->prerequisiteTransformer->transform($doc[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$doc = Prerequisites::find($id);

		if(!$doc){
			Prerequisites::create(Input::all());
			return $this->respondCreated('Document Created');
		} // end if

		$doc->fill(Input::all())->save();

		return $this->respondCreated('Document updated.');
	}

	public function destroy($id)
	{
		return Prerequisites::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$notes = Prerequisites::where('loan_id', $id)->get();

		if( $notes->isEmpty() ){
			return $this->respondNotFound('Notes do not exist.');
		} // end if

		return $this->respond([
			'data' => $this->prerequisiteTransformer->transformCollection($notes->all())
		]);
	}

}