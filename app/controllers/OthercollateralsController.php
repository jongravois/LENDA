<?php

use Acme\Transformers\OthercollateralTransformer;

class OthercollateralsController extends ApiController {

	protected $othercollateralTransformer;

	function __construct(OthercollateralTransformer $othercollateralTransformer)
	{
		$this->othercollateralTransformer = $othercollateralTransformer;
	}


	public function index()
	{
		$all = Othercollateral::all();

		return $this->respond([
			'data' => $this->othercollateralTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Othercollateral::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Othercollateral does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->othercollateralTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		$single = Othercollateral::create(Input::all());

		return $this->respondCreated($single->id);
	}

	public function update($id)
	{
		$single = Othercollateral::find($id);
		$single->fill(Input::all())->save();
	}

	public function destroy($id)
	{
	    return Othercollateral::where('id', $id)->delete();
	}

}