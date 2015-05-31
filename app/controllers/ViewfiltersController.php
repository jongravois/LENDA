<?php

use Acme\Transformers\ViewfilterTransformer;

class ViewfiltersController extends ApiController {

	protected $viewfilterTransformer;

	function __construct(ViewfilterTransformer $viewfilterTransformer)
	{
		$this->viewfilterTransformer = $viewfilterTransformer;
	}


	public function index()
	{
		$all = Viewfilters::all();

		return $this->respond([
			'data' => $this->viewfilterTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Viewfilters::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Viewfilters does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->viewfilterTransformer->transform($single[0])
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