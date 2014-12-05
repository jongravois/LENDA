<?php

use Acme\Transformers\RegionTransformer;

class RegionsController extends ApiController {

	protected $regionTransformer;

	function __construct(RegionTransformer $regionTransformer)
	{
		$this->regionTransformer = $regionTransformer;
	}

	public function index()
	{
		$regions = Region::all();

		return $this->respond([
			'data' => $this->regionTransformer->transformCollection($regions->all())
		]);
	}

	public function show($id)
	{
		$region = Region::where('id', $id)->get();

		if( $region->isEmpty() ){
			return $this->respondNotFound('Region does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->regionTransformer->transform($region[0])
		]);
	}

	public function store()
	{
		Region::create(Input::all());

		return $this->respondCreated('Region created.');
	}

	public function update($id)
	{
		$region = Region::find($id);

		if(!$region){
			Region::create(Input::all());
			return $this->respondCreated('Region created.');
		}

		$region->fill(Input::all())->save();

		return $this->respondCreated('Region updated.');
	}

	public function destroy($id)
	{
		return Region::where('id', $id)->delete();
	}
}