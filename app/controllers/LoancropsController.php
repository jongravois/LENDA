<?php

use Acme\Transformers\LoancropTransformer;

class LoancropsController extends ApiController {
	/*
	 * TODO: get ins_price and aph from counties
	 */

	protected $loancropTransformer;

	function __construct(LoancropTransformer $loancropTransformer)
	{
		$this->loancropTransformer = $loancropTransformer;
	}

	public function index()
	{
		$loancrops = Loancrop::with('crop')->get();
		return $this->respond([
			'data' => $this->loancropTransformer->transformCollection($loancrops->all())
		]);
	}

	public function store()
	{
		//TODO: Add Validation
		/*if( ! Input::get('loancrop')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if
		*/

		Loancrop::create(Input::all());

		return $this->respondCreated('Loancrop created');
	}

	public function show($id)
	{
		$loancrop = Loancrop::where('id', $id)->get();

		if( $loancrop->isEmpty() ){
			return $this->respondNotFound('Loancrop does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loancropTransformer->transform($loancrop[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$loancrop = Loancrop::find($id);

		if(!$loancrop){
			Loancrop::create(Input::all());
			return $this->respondCreated('Loancrop Created');
		} // end if

		$loancrop->fill(Input::all())->save();

		return $this->respondCreated('Loancrop updated.');
	}

	public function destroy($id)
	{
		return Loancrop::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$loancrops = Loancrop::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->loancropTransformer->transformCollection($loancrops->all())
		]);
	}

	public function	allAcres($id)
	{
		$acres = Loancrop::where('loan_id', $id)->get(['crop_id', 'acres']);
		return $acres;
	}

	public function totalAcres($id)
	{
		$tot = Loancrop::where('loan_id', $id)->sum('acres');
		return $tot;
	}

}