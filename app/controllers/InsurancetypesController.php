<?php

class InsurancetypesController extends \BaseController {

	public function index()
	{
		$types = Insurancetype::all();
		return $types;
	}

}