<?php

use Acme\Transformers\StakeholderTransformer;
class StakeholderController extends ApiController {

	protected $stakeholderTransforer;

	function __construct(StakeholderTransformer $stakeholderTransformer)
	{
		$this->stakeholderTransformer = $stakeholderTransformer;
	}

	public function index()
	{
		$sh = Stakeholder::all();
		return $this->respond([
			'data' => $this->stakeholderTransformer->transformCollection($sh->all())
		]);
	}

	public function show($id)
	{
		$sh = Stakeholder::where('loan_id', $id)->get();

		if($sh->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->stakeholderTransformer->transformCollection($sh->all())
		]);
	}
}