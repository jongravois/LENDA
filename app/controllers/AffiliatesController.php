<?php

use Acme\Transformers\AffiliateTransformer;

class AffiliatesController extends ApiController {

	protected $affiliateTransformer;

	function __construct(AffiliateTransformer $affiliateTransformer)
	{
		$this->affiliateTransformer = $affiliateTransformer;
	}

	public function index()
	{
		$affiliates = Affiliate::all();
		return $this->respond([
			'data' => $this->affiliateTransformer->transformCollection($affiliates->all())
		]);
	}

	public function store()
	{
		/*if( ! Input::get('affiliate')){
			return $this->respondCreationDenied('Failed Validation');
		} // end if
		*/

		Affiliate::create(Input::all());

		return $this->respondCreated('Affiliate created');
	}

	public function show($id)
	{
		$affiliate = Affiliate::where('id', $id)->get();

		if( $affiliate->isEmpty() ){
			return $this->respondNotFound('Affiliate does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->affiliateTransformer->transform($affiliate[0])
		]);
	}

	public function edit($id)
	{
		//
	}

	public function update($id)
	{
		$affiliate = Affiliate::find($id);

		if(!$affiliate){
			Affiliate::create(Input::all());
			return $this->respondCreated('Affiliate Created');
		} // end if

		$affiliate->fill(Input::all())->save();

		return $this->respondCreated('Affiliate updated.');
	}

	public function destroy($id)
	{
		return Affiliate::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$affiliates = Affiliate::where('loan_id', $id)->get();
		return $this->respond([
			'data' => $this->affiliateTransformer->transformCollection($affiliates->all())
		]);
	}

}