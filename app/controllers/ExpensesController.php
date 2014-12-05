<?php
use Acme\Transformers\ExpensesTransformer;
class ExpensesController extends ApiController {

	protected $expensesTransformer;

	function __construct(ExpensesTransformer $expensesTransformer)
	{
		$this->expensesTransformer = $expensesTransformer;
	}


	public function index()
	{
		$uses = Expenses::with('crop')->get();
		return $this->respond([
			'data' => $this->expensesTransformer->transformCollection($uses->all())
		]);
	}

	public function show($id)
	{
		$uses = Expenses::with('crop')->where('loan_id', $id)->get();

		if($uses->isEmpty() ){
			return $this->respondNotFound("Loan does not exist.");
		} // end if

		return $this->respond([
			'data' => $this->expensesTransformer->transformCollection($uses->all())
		]);
	}

}