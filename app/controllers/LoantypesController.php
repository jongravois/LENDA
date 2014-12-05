<?php

use Acme\Transformers\LoantypeTransformer;

class LoantypesController extends ApiController {

	protected $loantypeTransformer;

	function __construct(LoantypeTransformer $loantypeTransformer)
	{
		$this->loantypeTransformer = $loantypeTransformer;
	}

	public function index()
	{
		$types = Loantype::all();
		return $this->respond([
			'data' => $this->loantypeTransformer->transformCollection($types->all())
		]);
	}

	public function store()
	{
		Loantype::create(Input::all());

		return $this->respondCreated('Loan Type created');
	}

	public function show($id)
	{
		$type = Loantype::where('id', $id)->get();

		if( $type->isEmpty() ){
			return $this->respondNotFound('Loan Type does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loantypeTransformer->transform($type[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$type = Loantype::find($id);

		if(!$type){
			Loantype::create(Input::all());
			return $this->respondCreated('Loan Type Created');
		} // end if

		$type->fill(Input::all())->save();

		return $this->respondCreated('Loan Type updated.');
	}

	public function destroy($id)
	{
		return Loantype::where('id', $id)->delete();
	}

}