<?php

use Acme\Transformers\CommitteeTransformer;

class CommitteeController extends ApiController {

	protected $committeeTransformer;

	function __construct(CommitteeTransformer $committeeTransformer)
	{
		$this->committeeTransformer = $committeeTransformer;
	}

	public function index()
	{
		$committees = Committee::all();
		return $this->respond([
			'data' => $this->committeeTransformer->transformCollection($committees->all())
		]);
	}

	public function store()
	{
		if( ! Input::get('committee')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if

		Committee::create(Input::all());

		return $this->respondCreated('Committee created');
	}

	public function show($id)
	{
		$committee = Committee::where('id', $id)->get();

		if( $committee->isEmpty() ){
			return $this->respondNotFound('Committee does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->committeeTransformer->transform($committee[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$committee = Committee::find($id);

		if(!$committee){
			Committee::create(Input::all());
			return $this->respondCreated('Committee Created');
		} // end if

		$committee->fill(Input::all())->save();

		return $this->respondCreated('Committee updated.');
	}

	public function destroy($id)
	{
		return Committee::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$committees = Committee::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->committeeTransformer->transformCollection($committees->all())
		]);
	}

}