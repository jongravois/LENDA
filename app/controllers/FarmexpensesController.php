<?php

use Acme\Transformers\FarmexpensesTransformer;

class FarmexpensesController extends ApiController {

	protected $farmexpensesTransformer;

	function __construct(FarmexpensesTransformer $farmexpensesTransformer)
	{
		$this->farmexpensesTransformer = $farmexpensesTransformer;
	}

	public function index()
	{
		$crex = Farmexpense::all();
		return $this->respond([
			'data' => $this->farmexpensesTransformer->transformCollection($crex->all())
		]);
	}

	public function store()
	{
		Farmexpense::create(Input::all());

		return $this->respondCreated('Farm Expense created');
	}

	public function show($id)
	{
		$crex = Farmexpense::where('id', $id)->get();

		if( $crex->isEmpty() ){
			return $this->respondNotFound('Farm Expense does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->farmexpenseTransformer->transform($crex[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$farmexpense = Farmexpense::find($id);

		if(!$farmexpense){
			Farmexpense::create(Input::all());
			return $this->respondCreated('Farm Expense Created');
		} // end if

		$farmexpense->fill(Input::all())->save();

		return $this->respondCreated('Farm Expense updated.');
	}

	public function destroy($id)
	{
		return Farmexpense::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$crex = Farmexpense::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->farmexpensesTransformer->transformCollection($crex->all())
		]);
	}

}