<?php

use Acme\Transformers\LoanassetTransformer;

class LoanassetsController extends ApiController {

	protected $loanassetTransformer;

	function __construct(LoanassetTransformer $loanassetTransformer)
	{
		$this->loanassetTransformer = $loanassetTransformer;
	}

	public function index()
	{
		$loanassets = Loanassets::all();
		return $this->respond([
			'data' => $this->loanassetTransformer->transformCollection($loanassets->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('loanasset')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Loanasset::create(Input::all());

		return $this->respondCreated('Loanasset created');
	}

	public function show($id)
	{
		$loanasset = Loanasset::where('id', $id)->get();

		if( $loanasset->isEmpty() ){
			return $this->respondNotFound('Loanasset does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanassetTransformer->transform($loanasset[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$loanasset = Loanasset::find($id);

		if(!$loanasset){
			Loanasset::create(Input::all());
			return $this->respondCreated('Loanasset Created');
		} // end if

		$loanasset->fill(Input::all())->save();

		return $this->respondCreated('Loanasset updated.');
	}

	public function destroy($id)
	{
		return Loanasset::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$loanassets = Loanassets::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->loanassetTransformer->transformCollection($loanassets->all())
		]);
	}

}