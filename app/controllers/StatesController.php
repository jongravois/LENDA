<?php

use Acme\Transformers\StateTransformer;

class StatesController extends ApiController {

	protected $stateTransformer;

	function __construct(StateTransformer $stateTransformer)
	{
		$this->stateTransformer = $stateTransformer;
	}

	public function index()
	{
		$states = State::all();

		return $this->respond([
			'data' => $this->stateTransformer->transformCollection($states->all())
		]);
	}

	public function show($id)
	{
		$state = State::where('id', $id)->get();

		if( $state->isEmpty() ){
			return $this->respondNotFound('State does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->stateTransformer->transform($state[0])
		]);
	}

}