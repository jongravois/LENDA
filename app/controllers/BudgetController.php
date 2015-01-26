<?php

use Acme\Transformers\BudgetTransformer;

class BudgetController extends ApiController {

	protected $budgetTransformer;

	function __construct(BudgetTransformer $budgetTransformer)
	{
		$this->budgetTransformer = $budgetTransformer;
	}

	public function index($id)
	{
		$exps = Loancrop::with('crop', 'expenses')->where('loan_id', $id)->get();

		return $this->respond([
			'data' => $this->budgetTransformer->transformCollection($exps->all())
		]);
	}
}