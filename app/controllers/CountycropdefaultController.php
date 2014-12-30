<?php

use Acme\Transformers\CountycropdefaultTransformer;

class CountycropdefaultController extends ApiController {
	protected $countycropdefaultTransformer;

	function __construct(CountycropdefaultTransformer $countycropdefaultTransformer)
	{
		$this->countycropdefaultTransformer = $countycropdefaultTransformer;
	}

	public function index()
	{
		$counties = Countycropdefault::all();

		return $this->respond([
			'data' => $this->countycropdefaultTransformer->transform($counties->all())
		]);
	}

	public function show($id)
	{
		$countycropdefault = Countycropdefault::where('id', $id)->get();

		if( $countycropdefault->isEmpty()){
			return $this->respondNotFound('Countycropdefault does not exist.');
		} // end if

		return $this->respond([
			'data' => $this->countycropdefaultTransformer->transform($countycropdefault[0])
		]);
	}

	public function farmCounties($id)
	{
		$co = Countycropdefault::whereHas('farms', function($query) use ($id){
			$query->where('loan_id', $id);
		})->get();
		return $co;
	}
}