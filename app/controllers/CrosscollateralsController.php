<?php

use Acme\Transformers\CrosscollateralTransformer;

class CrosscollateralsController extends ApiController {

	protected $crosscollateralTransformer;

	function __construct(CrosscollateralTransformer $crosscollateralTransformer)
	{
		$this->crosscollateralTransformer = $crosscollateralTransformer;
	}


	public function index()
	{
		$all = Crosscollateral::all();

		return $this->respond([
			'data' => $this->crosscollateralTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Crosscollateral::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Crosscollateral does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->crosscollateralTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		$single = Crosscollateral::create(Input::all());

		return $this->respondCreated($single->id);
	}

	public function update($id)
	{
		$single = Crosscollateral::find($id);
		$single->fill(Input::all())->save();
	}

	public function destroy($id)
	{
	    return Crosscollateral::where('id', $id)->delete();
	}

}