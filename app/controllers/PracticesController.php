<?php

use Acme\Transformers\PracticeTransformer;

class PracticesController extends ApiController {

	protected $practiceTransformer;

	function __construct(PracticeTransformer $practiceTransformer)
	{
		$this->practiceTransformer = $practiceTransformer;
	}

	public function index()
	{
		$practices = Practices::all();

		return $this->respond([
			'data' => $this->practiceTransformer->transformCollection($practices->all())
		]);
	}

	public function show($id)
	{
		$practice = Practices::where('id', $id)->get();

		if( $practice->isEmpty() ){
			return $this->respondNotFound('Practice does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->practiceTransformer->transform($practice[0])
		]);
	}

	public function store()
	{
		Practices::create(Input::all());

		return $this->respondCreated('Practice created.');
	}

	public function update($id)
	{
		$practice = Practices::find($id);

		if(!$practice){
			Practices::create(Input::all());
			return $this->respondCreated('Practice created.');
		}

		$practice->fill(Input::all())->save();

		return $this->respondCreated('Practice updated.');
	}

	public function destroy($id)
	{
		return Practices::where('id', $id)->delete();
	}
}