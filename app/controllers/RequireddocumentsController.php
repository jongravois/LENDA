<?php

use Acme\Transformers\RequireddocumentsTransformer;

class RequireddocumentsController extends ApiController {

	protected $requireddocumentsTransformer;

	function __construct(RequireddocumentsTransformer $requireddocumentsTransformer)
	{
		$this->requireddocumentsTransformer = $requireddocumentsTransformer;
	}


	public function index()
	{
		$docs = Requireddocuments::all();
		return $this->respond([
			'data' => $this->requireddocumentsTransformer->transformCollection($docs->all())
		]);
	}

	public function show($id)
	{
		$docs = Requireddocuments::with('loantype')->where('loantype_id', $id)->get();

		if($docs->isEmpty() ){
			return $this->respondNotFound('Loan Type is not recognized.');
		} // end if

		return $this->respond([
			'data' => $this->requireddocumentsTransformer->transformCollection($docs->all())
		]);
	}
}