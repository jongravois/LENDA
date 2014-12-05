<?php

use Acme\Transformers\LoanexceptionsTransformer;
class LoanexceptionsController extends ApiController {

	protected $loanexceptionsTransformer;

	function __construct(LoanexceptionsTransformer $loanexceptionsTransformer)
	{
		$this->loanexceptionsTransformer = $loanexceptionsTransformer;
	}


	public function index()
	{
		$exceps = Loanexceptions::all();
		return $this->respond([
			'data' => $this->loanexceptionsTransformer->transformCollection($exceps->all())
		]);
	}

	public function show($id)
	{
		$exceps = Loanexceptions::where('loan_id', $id)->get();

		if($exceps->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanexceptionsTransformer->transformCollection($exceps->all())
		]);
	}
}