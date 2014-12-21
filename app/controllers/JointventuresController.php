<?php

use Acme\Transformers\JointventureTransformer;

class JointventuresController extends ApiController {

	protected $jointventureTransformer;

	function __construct(JointventureTransformer $jointventureTransformer)
	{
		$this->jointventureTransformer = $jointventureTransformer;
	}

	public function index()
	{
		$jvs = Jointventure::with('states')->get();
		return $this->respond([
			'data' => $this->jointventureTransformer->transformCollection($jvs->all())
		]);
	}

	public function store()
	{
		Jointventure::create(Input::all());

		return $this->respondCreated('Partner created');
	}

	public function show($id)
	{
		$jv = Jointventure::with('states')->where('id', $id)->get();

		if( $jv->isEmpty() ){
			return $this->respondNotFound('Joint Venture does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->jointventureTransformer->transform($jv[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$jv = Jointventure::find($id);

		if(!$jv){
			Jointventure::create(Input::all());
			return $this->respondCreated('Partner Created');
		} // end if

		$unit->fill(Input::all())->save();

		return $this->respondCreated('Unit updated.');
	}

	public function destroy($id)
	{
		return Jointventure::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$ps = Jointventure::with('states')->where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->jointventureTransformer->transformCollection($ps->all())
		]);
	}

}