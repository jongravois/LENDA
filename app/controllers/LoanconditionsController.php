<?php

use Acme\Transformers\LoanconditionTransformer;

class LoanconditionsController extends ApiController {

	protected $loanconditionTransformer;

	function __construct(LoanconditionTransformer $loanconditionTransformer)
	{
		$this->loanconditionTransformer = $loanconditionTransformer;
	}

	public function index()
	{
		$loanconditions = Loanconditions::all();
		return $this->respond([
			'data' => $this->loanconditionTransformer->transformCollection($loanconditions->all())
		]);
	}

	public function store()
	{
		//TODO: Validate
		/*if( ! Input::get('loancondition')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if*/

		$doit = Loanconditions::create(Input::all());

		//Add systemic
		$newInfo = [
			'loan_id'	=>	Input::get('loan_id'),
			'user'		=>	Auth::user()->username,
			'action'	=>	'Created Security Agreement Loan Condition'
		];
		if($doit){
			Systemics::create($newInfo);
		}

		return $this->respondCreated($doit->id);
	}

	public function show($id)
	{
		$loancondition = Loanconditions::where('id', $id)->get();

		if( $loancondition->isEmpty() ){
			return $this->respondNotFound('Loancondition does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->loanconditionTransformer->transform($loancondition[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$loancondition = Loanconditions::find($id);

		if(!$loancondition){
			Loanconditions::create(Input::all());
			return $this->respondCreated('Loancondition Created');
		} // end if

		$loancondition->fill(Input::all())->save();

		return $this->respondCreated('Loancondition updated.');
	}

	public function destroy($id)
	{
		//TODO: create systemic

		return Loanconditions::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$loanconditions = Loanconditions::where('loan_id', $id)->orderBy('condition_id')->get();
		return $this->respond([
			'data' => $this->loanconditionTransformer->transformCollection($loanconditions->all())
		]);
	}

}