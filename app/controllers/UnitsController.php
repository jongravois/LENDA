<?php

use Acme\Transformers\UnitTransformer;

class UnitsController extends ApiController {

	protected $unitTransformer;

	function __construct(UnitTransformer $unitTransformer)
	{
		$this->unitTransformer = $unitTransformer;
	}

	public function index()
	{
		$units = Units::all();
		return $this->respond([
			'data' => $this->unitTransformer->transformCollection($units->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('unit')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Unit::create(Input::all());

		return $this->respondCreated('Unit created');
	}

	public function show($id)
	{
		$unit = Unit::where('id', $id)->get();

		if( $unit->isEmpty() ){
			return $this->respondNotFound('Unit does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->unitTransformer->transform($unit[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$unit = Unit::find($id);

		if(!$unit){
			Unit::create(Input::all());
			return $this->respondCreated('Unit Created');
		} // end if

		$unit->fill(Input::all())->save();

		return $this->respondCreated('Unit updated.');
	}

	public function destroy($id)
	{
		return Unit::where('id', $id)->delete();
	}

}