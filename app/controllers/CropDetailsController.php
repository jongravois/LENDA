<?php

use Acme\Transformers\CropdetailsTransformer;

class CropDetailsController extends ApiController {

	protected $cropdetailsTransformer;

	function __construct(CropdetailsTransformer $cropdetailsTransformer)
	{
		$this->cropdetailsTransformer = $cropdetailsTransformer;
	}

	public function index()
	{
		$dets = Cropdetails::with('crop')->get();
		return $this->respond([
			'data' => $this->cropdetailsTransformer->transformCollection($dets->all())
		]);
	}

	public function show($id)
	{
		$dets = Cropdetails::with('crop')->where('loan_id', $id)->get();

		if($dets->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->cropdetailsTransformer->transformCollection($dets->all())
		]);
	}
}