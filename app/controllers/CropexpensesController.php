<?php

use Acme\Transformers\CropexpensesTransformer;

class CropexpensesController extends ApiController {

	protected $cropexpensesTransformer;

	function __construct(CropexpensesTransformer $cropexpensesTransformer)
	{
		$this->cropexpensesTransformer = $cropexpensesTransformer;
	}

	public function index()
	{
		$crex = Cropexpenses::with('crop')->get();
		return $this->respond([
			'data' => $this->cropexpensesTransformer->transformCollection($crex->all())
		]);
	}

	public function store()
	{
		Cropexpense::create(Input::all());

		return $this->respondCreated('Crop Expense created');
	}

	public function show($id)
	{
		$crex = Cropexpense::with('crop')->where('id', $id)->get();

		if( $crex->isEmpty() ){
			return $this->respondNotFound('Crop Expense does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->cropexpenseTransformer->transform($crex[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$cropexpense = Cropexpense::find($id);

		if(!$cropexpense){
			Cropexpense::create(Input::all());
			return $this->respondCreated('Crop Expense Created');
		} // end if

		$cropexpense->fill(Input::all())->save();

		return $this->respondCreated('Crop Expense updated.');
	}

	public function destroy($id)
	{
		return Cropexpense::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$crex = Cropexpenses::with('loancrop.crop')->where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->cropexpensesTransformer->transformCollection($crex->all())
		]);
	}

	public function byLoanByCrop($loanID, $cropID)
	{
		$crex = Cropexpenses::with('crop')->where('loan_id', $loanID)->where('crop_id', $cropID)->get();
		return $this->respond([
			'data' => $this->cropexpensesTransformer->transformCollection($crex->all())
		]);
	}

}