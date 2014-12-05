<?php

use Acme\Transformers\ConditionsTransformer;
class ConditionsController extends ApiController {

	protected $conditionsTransformer;

	function __construct(ConditionsTransformer $conditionsTransformer)
	{
		$this->conditionsTransformer = $conditionsTransformer;
	}


	public function index()
	{
		$cons = Conditions::all();
		return $this->respond([
			'data' => $this->conditionsTransformer->transformCollection($cons->all())
		]);
	}
}