<?php

class LoanstatusController extends \BaseController {

	public function index()
	{
		$status = Loanstatus::all();
		return $status;
	}

}