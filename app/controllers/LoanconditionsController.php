<?php

use Acme\Transformers\LoanconditionTransformer;

class LoanconditionsController extends ApiController {

	protected $loanconditionTransformer;

	function __construct(LoanconditionTransformer $loanconditionTransformer)
	{
		$this->loanconditionTransformer = $loanconditionTransformer;
	}

	public function index()
	{
		$loanconditions = Loanconditions::all();
		return $this->respond([
			'data' => $this->loanconditionTransformer->transformCollection($loanconditions->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('loancondition')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Loancondition::create(Input::all());

		return $this->respondCreated('Loancondition created');
	}

	public function show($id)
	{
		$loancondition = Loancondition::where('id', $id)->get();

		if( $loancondition->isEmpty() ){
			return $this->respondNotFound('Loancondition does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanconditionTransformer->transform($loancondition[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$loancondition = Loancondition::find($id);

		if(!$loancondition){
			Loancondition::create(Input::all());
			return $this->respondCreated('Loancondition Created');
		} // end if

		$loancondition->fill(Input::all())->save();

		return $this->respondCreated('Loancondition updated.');
	}

	public function destroy($id)
	{
		return Loancondition::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$loanconditions = Loanconditions::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->loanconditionTransformer->transformCollection($loanconditions->all())
		]);
	}

}