<?php

use Acme\Transformers\LoanexceptionsTransformer;
class LoanexceptionsController extends ApiController {

	protected $loanexceptionsTransformer;

	function __construct(LoanexceptionsTransformer $loanexceptionsTransformer)
	{
		$this->loanexceptionsTransformer = $loanexceptionsTransformer;
	}


	public function index()
	{
		$exceps = Loanexceptions::all();
		return $this->respond([
			'data' => $this->loanexceptionsTransformer->transformCollection($exceps->all())
		]);
	}

	public function destroy($id)
	{
		return Loanexceptions::where('id', $id)->delete();
	}

	public function show($id)
	{
		$exceps = Loanexceptions::where('loan_id', $id)->get();

		if($exceps->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanexceptionsTransformer->transformCollection($exceps->all())
		]);
	}

	public function store()
	{
		//TODO: Validate

		$doit = Loanexceptions::firstOrCreate(Input::all());
		return $this->respondCreated('Loancondition created');
	}

	public function update($id)
	{
		$loanexception = Loanexceptions::find($id);

		if(!$loanexception){
			Loanexceptions::create(Input::all());
			return $this->respondCreated('Loanexception Created');
		} // end if

		$loanexception->fill(Input::all())->save();

		return $this->respondCreated('Loanexception updated.');
	}

	public function byLoan($id)
	{
		$exceps = Loanexceptions::where('loan_id', $id)->orderBy('exception_id')->get();
		return $this->respond([
			'data' => $this->loanexceptionsTransformer->transformCollection($exceps->all())
		]);
	}
}