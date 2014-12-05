<?php

use Acme\Transformers\LoandistributorTransformer;

class LoandistributorController extends ApiController {

	protected $loandistributorTransformer;

	function __construct(LoandistributorTransformer $loandistributorTransformer)
	{
		$this->loandistributorTransformer = $loandistributorTransformer;
	}

	public function index()
	{
		$loandistributors = Loandistributor::with('distributor')->get();
		return $this->respond([
			'data' => $this->loandistributorTransformer->transformCollection($loandistributors->all())
		]);
	}

	public function store()
	{
		Loandistributor::create(Input::all());

		return $this->respondCreated('Loan Distributor created');
	}

	public function show($id)
	{
		$loandistributor = Loandistributor::where('id', $id)->get();

		if( $loandistributor->isEmpty() ){
			return $this->respondNotFound('Loan Distributor does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loandistributorTransformer->transform($loandistributor[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$loandistributor = Loandistributor::find($id);

		if(!$loandistributor){
			Loandistributor::create(Input::all());
			return $this->respondCreated('Loan Distributor Created');
		} // end if

		$loandistributor->fill(Input::all())->save();

		return $this->respondCreated('Loandistributor updated.');
	}

	public function destroy($id)
	{
		return Loandistributor::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$loandistributors = Loandistributor::with('distributor')->where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->loandistributorTransformer->transformCollection($loandistributors->all())
		]);
	}

}