<?php

class SpendcatController extends \BaseController {

	public function index()
	{
		$cats = Spendcat::all();
		return $cats;
	}

}