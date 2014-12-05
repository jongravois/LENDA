<?php

use Acme\Transformers\LoanquestionsTransformer;

class LoanquestionsController extends ApiController {

	protected $loanquestionsTransformer;

	function __construct(LoanquestionsTransformer $loanquestionsTransformer)
	{
		$this->loanquestionsTransformer = $loanquestionsTransformer;
	}

	public function index()
	{
		$quests = Loanquestions::all();
		return $this->respond([
			'data' => $this->loanquestionsTransformer->transformCollection($quests->all())
		]);
	}

	public function show($id)
	{
		$quests = Loanquestions::where('loan_id', $id)->get();

		if($quests->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanquestionsTransformer->transform($quests[0])
		]);
	}


}