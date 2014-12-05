<?php

use Acme\Transformers\LoancapacityTransformer;

class LoancapacityController extends ApiController {

	protected $loancapacityTransformer;

	function __construct(LoancapacityTransformer $loancapacityTransformer)
	{
		$this->loancapacityTransformer = $loancapacityTransformer;
	}

	public function index()
	{
		$cap = Loancapacity::all();
		return $this->respond([
			$this->loancapacityTransformer->transformCollection($cap->all())
		]);
	}

	public function show($id)
	{
		$cap = Loancapacity::where('loan_id', $id)->get();

		if($cap->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if
		return $this->respond([
			$this->loancapacityTransformer->transformCollection($cap->all())
		]);
	}

	}