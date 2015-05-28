<?php

use Acme\Transformers\DisbursementTransformer;

class DisbursementsController extends ApiController {

	protected $disbursementTransformer;

	function __construct(DisbursementTransformer $disbursementTransformer)
	{
		$this->disbursementTransformer = $disbursementTransformer;
	}


	public function index()
	{
		$all = Disbursement::all();

		return $this->respond([
			'data' => $this->disbursementTransformer->transformCollection($all->all())
		]);
	}

	public function show($id)
	{
		$single = Disbursement::where('id', $id)->get();

		if( $single->isEmpty() ){
			return $this->respondNotFound('Disbursement does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->disbursementTransformer->transform($single[0])
		]);
	}

	public function store()
	{
		$single = Disbursement::create(Input::all());

		return $this->respondCreated($single->id);
	}

	public function update($id)
	{
		$single = Disbursement::find($id);
		$single->fill(Input::all())->save();
	}

	public function destroy($id)
	{
	    return Disbursement::where('id', $id)->delete();
	}

}