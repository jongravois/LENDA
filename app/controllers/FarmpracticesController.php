<?php

use Acme\Transformers\FarmpracticeTransformer;

class FarmpracticesController extends ApiController {

	protected $farmpracticeTransformer;

	function __construct(FarmpracticeTransformer $farmpracticeTransformer)
	{
		$this->farmpracticeTransformer = $farmpracticeTransformer;
	}

	public function index()
	{
		$farmpractices = Farmpractices::all();

		return $this->respond([
			'data' => $this->farmpracticeTransformer->transformCollection($farmpractices->all())
		]);
	}

	public function show($id)
	{
		$farmpractice = Farmpractices::where('id', $id)->get();

		if( $farmpractice->isEmpty() ){
			return $this->respondNotFound('Farmpractice does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->farmpracticeTransformer->transform($farmpractice[0])
		]);
	}

	public function store()
	{
		Farmpractices::create(Input::all());

		return $this->respondCreated('Farmpractice created.');
	}

	public function update($id)
	{
		$farmpractice = Farmpractices::find($id);

		if(!$farmpractice){
			Farmpractices::create(Input::all());
			return $this->respondCreated('Farmpractice created.');
		}

		$farmpractice->fill(Input::all())->save();

		return $this->respondCreated('Farmpractice updated.');
	}

	public function destroy($id)
	{
		return Farmpractices::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$farmpractices = Farmpractices::where('loan_id', $id)->get();

		return $this->respond([
			'data' => $this->farmpracticeTransformer->transformCollection($farmpractices->all())
		]);
	}
}