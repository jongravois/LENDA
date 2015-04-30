<?php

use Acme\Transformers\SupplementalinsuranceTransformer;

class SupplementalinsurancesController extends ApiController {

	protected $supplementalinsuranceTransformer;

	function __construct(SupplementalinsuranceTransformer $supplementalinsuranceTransformer)
	{
		$this->supplementalinsuranceTransformer = $supplementalinsuranceTransformer;
	}


	public function index()
	{
		$all = Supplementalinsurance::all();

		return $this->respond([
			'data' => $this->supplementalinsuranceTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Supplementalinsurance::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Supplementalinsurance does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->supplementalinsuranceTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		$single = Supplementalinsurance::create(Input::all());

		return $this->respondCreated($single->id);
	}

	public function update($id)
	{
		$single = Supplementalinsurance::find($id);
		$single->fill(Input::all())->save();
	}

	public function destroy($id)
	{
	    return Supplementalinsurance::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$single = Supplementalinsurance::where('loan_id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Supplementalinsurance does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->supplementalinsuranceTransformer->transform($single[0])
		]);
	}

}