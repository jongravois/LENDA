<?php

use Acme\Transformers\CroppracticeTransformer;

class CroppracticesController extends ApiController {

	protected $croppracticeTransformer;

	function __construct(CroppracticeTransformer $croppracticeTransformer)
	{
		$this->croppracticeTransformer = $croppracticeTransformer;
	}

	public function index()
	{
		$croppractices = Croppractice::all();

		return $this->respond([
			'data' => $this->croppracticeTransformer->transformCollection($croppractices->all())
		]);
	}

	public function show($id)
	{
		$croppractice = Croppractice::where('id', $id)->get();

		if( $croppractice->isEmpty() ){
			return $this->respondNotFound('Croppractice does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->croppracticeTransformer->transform($croppractice[0])
		]);
	}

	public function store()
	{
		Croppractice::create(Input::all());

		return $this->respondCreated('Croppractice created.');
	}

	public function update($id)
	{
		$croppractice = Croppractice::find($id);

		if(!$croppractice){
			Croppractice::create(Input::all());
			return $this->respondCreated('Croppractice created.');
		}

		$croppractice->fill(Input::all())->save();

		return $this->respondCreated('Croppractice updated.');
	}

	public function destroy($id)
	{
		return Croppractice::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$croppractices = Croppractice::where('loan_id', $id)->get();

		return $this->respond([
			'data' => $this->croppracticeTransformer->transformCollection($croppractices->all())
		]);
	}
}