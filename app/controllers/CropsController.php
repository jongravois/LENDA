<?php

class CropsController extends \BaseController {

	public function index()
	{
		$crops = Crop::all();
		return $crops;
	}

}