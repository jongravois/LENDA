<?php

class BudgetController extends ApiController {

	public function index($id)
	{
		$budget = [];
		$exps = Loancrop::where('loan_id', $id)->get();

        foreach($exps as $exp){
			$crp = $this->expenseByCrop($exp->id);
			array_push($budget, $crp);
		} // end foreach
		return $budget;
	}

	public function expenseByCrop($id)
	{
		$exps = Cropexpenses::with('crop', 'loancrop')->where('loancrop_id', $id)->orderBy('cat_id')->get();
		return $exps;
		return array_map(function($exps)
		{
			return [
				'crop' => $exps->crop->crop,
				'acres' => (double) $exps->loancrop->acres,
				'expense' => $exps->expense,
				'arm' => (double) $exps->arm,
				'dist' => (double) $exps->dist,
				'other' => (double) $exps->other,
				'peracre' => (double) $exps->arm + (double) $exps->dist + $exps->other,
				'calc_arm' => (double) $exps->loancrop->acres * (double) $exps->arm,
				'calc_dist' => (double) $exps->loancrop->acres * (double) $exps->dist,
				'calc_other' => (double) $exps->loancrop->acres * (double) $exps->other,
				'calc_total' => (double) $exps->loancrop->acres * ( (double) $exps->arm + (double) $exps->dist + $exps->other )
			];
		}, $exps->all());
	}
}