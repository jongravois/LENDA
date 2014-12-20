<?php

use Acme\Transformers\ViewoptionTransformer;

class ViewoptionsController extends ApiController {

	protected $viewoptionTransformer;

	function __construct(ViewoptionTransformer $viewoptionTransformer)
	{
		$this->viewoptionTransformer = $viewoptionTransformer;
	}

	public function index()
	{
		$viewoptions = Viewoptions::all();

		return $this->respond([
			'data' => $this->viewoptionTransformer->transformCollection($viewoptions->all())
		]);
	}

	public function show($id)
	{
		$viewoption = Viewoptions::where('id', $id)->get();

		if( $viewoption->isEmpty() ){
			return $this->respondNotFound('Viewoption does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->viewoptionTransformer->transform($viewoption[0])
		]);
	}

	public function store()
	{
		Viewoptions::create(Input::all());

		return $this->respondCreated('Viewoption created.');
	}

	public function update($id)
	{
		$viewoption = Viewoptions::find($id);

		if(!$viewoption){
			Viewoptions::create(Input::all());
			return $this->respondCreated('Viewoption created.');
		}

		$viewoption->fill(Input::all())->save();

		return $this->respondCreated('Viewoption updated.');
	}

	public function destroy($id)
	{
		return Viewoptions::where('id', $id)->delete();
	}
}