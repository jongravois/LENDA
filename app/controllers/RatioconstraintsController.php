<?php

use Acme\Transformers\RatioconstraintsTransformer;

class RatioconstraintsController extends ApiController {

	protected $ratioconstraintsController;

	function __construct(RatioconstraintsTransformer $ratioconstraintsController)
	{
		$this->ratioconstraintsController = $ratioconstraintsController;
	}


	public function index()
	{
		$cons = Ratioconstraints::all();
		return $this->respond([
			$this->ratioconstraintsController->transformCollection($cons->all())
		]);
	}
}