<?php

use Acme\Transformers\OptimizerviewoptionTransformer;

class OptimizerviewoptionsController extends ApiController {

	protected $optimizerviewoptionTransformer;

	function __construct(OptimizerviewoptionTransformer $optimizerviewoptionTransformer)
	{
		$this->optimizerviewoptionTransformer = $optimizerviewoptionTransformer;
	}

	public function index()
	{
		$all = Optimizerviewoption::all();

		return $this->respond([
			'data' => $this->optimizerviewoptionTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Optimizerviewoption::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Viewoption does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->optimizerviewoptionTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		Optimizerviewoption::create(Input::all());

		return $this->respondCreated('Viewoption created.');
	}

	public function update($id)
	{
		$optimizerviewoption = Optimizerviewoption::where('loan_id', $id)->get();

		if(!$optimizerviewoption){
			Optimizerviewoption::create(Input::all());
			return $this->respondCreated('Viewoption created.');
		}

		$optimizerviewoption->fill(Input::all())->save();

		return $this->respondCreated('Viewoption updated.');
	}

	public function destroy($id)
	{
		return Optimizerviewoption::where('id', $id)->delete();
	}
}