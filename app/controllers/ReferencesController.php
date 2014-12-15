<?php

use Acme\Transformers\ReferenceTransformer;

class ReferencesController extends ApiController {

	protected $referenceTransformer;

	function __construct(ReferenceTransformer $referenceTransformer)
	{
		$this->referenceTransformer = $referenceTransformer;
	}

	public function index()
	{
		$references = Reference::all();
		return $this->respond([
			'data' => $this->referenceTransformer->transformCollection($references->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('reference')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Reference::create(Input::all());

		return $this->respondCreated('Reference created');
	}

	public function show($id)
	{
		$reference = Reference::where('id', $id)->get();

		if( $reference->isEmpty() ){
			return $this->respondNotFound('Reference does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->referenceTransformer->transform($reference[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$reference = Reference::find($id);

		if(!$reference){
			Reference::create(Input::all());
			return $this->respondCreated('Reference Created');
		} // end if

		$reference->fill(Input::all())->save();

		return $this->respondCreated('Reference updated.');
	}

	public function destroy($id)
	{
		return Reference::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$references = Reference::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->referenceTransformer->transformCollection($references->all())
		]);
	}

}