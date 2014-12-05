<?php

use Acme\Transformers\CorporationTransformer;

class CorporationsController extends ApiController {

	protected $corporationTransformer;

	function __construct(CorporationTransformer $corporationTransformer)
	{
		$this->corporationTransformer = $corporationTransformer;
	}

	public function index()
	{
		$corps = Corporation::all();
		return $this->respond([
			'data' => $this->corporationTransformer->transformCollection($corps->all())
		]);
	}

	public function store()
	{
		Corporation::create(Input::all());

		return $this->respondCreated('Corporation created');
	}

	public function show($id)
	{
		$corp = Corporation::where('id', $id)->get();

		if( $corp->isEmpty() ){
			return $this->respondNotFound('Corporation does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->corporationTransformer->transform($corp[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$corp = Corporation::find($id);

		if(!$corp){
			Corporation::create(Input::all());
			return $this->respondCreated('Corporation Created');
		} // end if

		$corp->fill(Input::all())->save();

		return $this->respondCreated('Corporation updated.');
	}

	public function destroy($id)
	{
		return Corporation::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$corps = Corporation::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->corporationTransformer->transformCollection($corps->all())
		]);
	}

}