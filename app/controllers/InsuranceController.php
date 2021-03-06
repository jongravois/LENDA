<?php

use Acme\Transformers\InsuranceTransformer;

class InsuranceController extends ApiController {

	protected $insuranceTransformer;

	function __construct(InsuranceTransformer $insuranceTransformer)
	{
		$this->insuranceTransformer = $insuranceTransformer;
	}

	public function index()
	{
		$insurances = Insurance::with('agency', 'county', 'crop')->get();

		return $this->respond([
			'data' => $this->insuranceTransformer->transformCollection($insurances->all())
		]);
	}

	public function show($id)
	{
		$insurance = Insurance::with('agency', 'county', 'crop')->where('id', $id)->get();

		if( $insurance->isEmpty() ){
			return $this->respondNotFound('Insurance does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->insuranceTransformer->transform($insurance[0])
		]);
	}

	public function store()
	{
		Insurance::create(Input::all());

		return $this->respondCreated('Insurance created.');
	}

	public function update($id)
	{
		$insurance = Insurance::find($id);

		if(!$insurance){
			Insurance::create(Input::all());
			return $this->respondCreated('Insurance created.');
		}

		$insurance->fill(Input::all())->save();

		return $this->respondCreated('Insurance updated.');
	}

	public function destroy($id)
	{
		return Insurance::where('id', $id)->delete();
	}

	public function byLoan($id)
	{
		$insurances = Insurance::with('agency', 'agent', 'county', 'crop', 'farm')->where('loan_id', $id)->get();

		return $this->respond([
			'data' => $this->insuranceTransformer->transformCollection($insurances->all())
		]);
	}

	public function	totalValueByLoan($id)
	{
		$val = Insurance::where('loan_id',$id)->sum('value');
		if(!$val){ return 0;}
		return $val;
	}
}