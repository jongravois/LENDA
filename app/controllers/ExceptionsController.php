<?php

use Acme\Transformers\ExceptionsTransformer;
class ExceptionsController extends ApiController {

	protected $exceptionsTransformer;

	function __construct(ExceptionsTransformer $exceptionsTransformer)
	{
		$this->exceptionsTransformer = $exceptionsTransformer;
	}


	public function index()
	{
		$exceps = Exceptions::all();
		return $this->respond([
			'data' => $this->exceptionsTransformer->transformCollection($exceps->all())
		]);
	}

	public function destroy($id)
	{
		return Exceptions::where('id', $id)->delete();
	}

	public function show($id)
	{
		$exceps = Exceptions::where('loan_id', $id)->get();

		if($exceps->isEmpty() ){
			return $this->respondNotFound('Loan does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->exceptionsTransformer->transformCollection($exceps->all())
		]);
	}

	public function store()
	{
		//TODO: Validate

		$doit = Exceptions::firstOrCreate(Input::all());
		return $this->respondCreated('Loancondition created');
	}

	public function update($id)
	{
		$exception = Exceptions::find($id);

		if(!$exception){
			Exceptions::create(Input::all());
			return $this->respondCreated('Exception Created');
		} // end if

		$exception->fill(Input::all())->save();

		return $this->respondCreated('Exception updated.');
	}

	public function byTitle($title)
	{
		$exception = Exceptions::where('title', $title)->pluck('id');
		return $exception;
	}
}