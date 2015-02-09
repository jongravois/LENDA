<?php

use Acme\Transformers\GrainstorageTransformer;

class GrainstorageController extends ApiController {

	protected $grainstorageTransformer;

	function __construct(GrainstorageTransformer $grainstorageTransformer)
	{
		$this->grainstorageTransformer = $grainstorageTransformer;
	}

	public function index()
	{
		$grainstorage = Grainstorage::all();

		return $this->respond([
			'data' => $this->grainstorageTransformer->transformCollection($grainstorage->all())
		]);
	}

	public function show($id)
	{
		$grainstorage = Grainstorage::where('id', $id)->get();

		if( $grainstorage->isEmpty() ){
			return $this->respondNotFound('Grainstorage does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->grainstorageTransformer->transform($grainstorage[0])
		]);
	}

	public function store()
	{
		Grainstorage::create(Input::all());

		return $this->respondCreated('Grainstorage created.');
	}

	public function update($id)
	{
		$grainstorage = Grainstorage::find($id);

		if(!$grainstorage){
			Grainstorages::create(Input::all());
			return $this->respondCreated('Grainstorage created.');
		}

		$grainstorage->fill(Input::all())->save();

		return $this->respondCreated('Grainstorage updated.');
	}

	public function destroy($id)
	{
		return Grainstorage::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$grainstorage = Grainstorage::where('loan_id',$id)->get();

		return $this->respond([
			'data' => $this->grainstorageTransformer->transformCollection($grainstorage->all())
		]);
	}
}