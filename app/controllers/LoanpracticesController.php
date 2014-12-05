<?php

use Acme\Transformers\LoanpracticesTransformer;
class LoanpracticesController extends ApiController {

	protected $loanpracticesTransformer;

	function __construct(LoanpracticesTransformer $loanpracticesTransformer)
	{
		$this->loanpracticesTransformer = $loanpracticesTransformer;
	}


	public function index()
	{
		$lp = Loanpractice::with('crop')->get();
		return $this->respond([
			'data' => $this->loanpracticesTransformer->transformCollection($lp->all())
		]);
	}

	public function show($id)
	{
		$lp = Loanpractice::with('crop')->where('loan_id', $id)->get();
		//return $lp;

		if($lp->isEmpty()){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanpracticesTransformer->transformCollection($lp->all())
		]);
	}

	public function getAcreTotals($id)
	{
		$tots = DB::select( DB::raw("SELECT crop, SUM(acres)  as acres FROM loanpractices WHERE loan_id = {$id} GROUP BY crop_id UNION SELECT 'Total', SUM(acres) as acres FROM loanpractices WHERE loan_id = {$id}") );
		return $tots;
	}

	public function getCropAcres($id, $crop)
	{
		$tots = DB::select( DB::raw("SELECT SUM(acres) as acres FROM loanpractices WHERE loan_id = {$id} AND crop_id = {$crop}") );
		return $tots;
	}

}