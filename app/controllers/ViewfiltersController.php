<?php

use Acme\Transformers\ViewfiltersTransformer;

class ViewfiltersController extends ApiController {

	protected $viewfiltersTransformer;

	function __construct(ViewfiltersTransformer $viewfiltersTransformer)
	{
		$this->viewfiltersTransformer = $viewfiltersTransformer;
	}


	public function index()
	{
		$all = Viewfilters::all();

		return $this->respond([
			'data' => $this->viewfiltersTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Viewfilters::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Viewfilters does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->viewfiltersTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		$single = Viewfilters::create(Input::all());

		return $this->respondCreated($single->id);
	}

	public function update($id)
	{
		$single = Viewfilters::find($id);
		$single->fill(Input::all())->save();
	}

	public function destroy($id)
	{
	    return Viewfilters::where('id', $id)->delete();
	}

}