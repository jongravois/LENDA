<?php

use Acme\Transformers\PartnerTransformer;

class PartnersController extends ApiController {

	protected $partnerTransformer;

	function __construct(PartnerTransformer $partnerTransformer)
	{
		$this->partnerTransformer = $partnerTransformer;
	}

	public function index()
	{
		$ps = Partners::with('states')->get();
		return $this->respond([
			'data' => $this->partnerTransformer->transformCollection($ps->all())
		]);
	}

	public function store()
	{
		Partners::create(Input::all());

		return $this->respondCreated('Partner created');
	}

	public function show($id)
	{
		$p = Partners::with('states')->where('id', $id)->get();

		if( $p->isEmpty() ){
			return $this->respondNotFound('Partner does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->partnerTransformer->transform($p[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$p = Partners::find($id);

		if(!$p){
			Partners::create(Input::all());
			return $this->respondCreated('Partner Created');
		} // end if

		$p->fill(Input::all())->save();

		return $this->respondCreated('Partner updated.');
	}

	public function destroy($id)
	{
		return Partners::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$ps = Partners::with('states')->where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->partnerTransformer->transformCollection($ps->all())
		]);
	}

}