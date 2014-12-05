<?php namespace Acme\Transformers;

class AdmingraderTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'grade' => $arr['grade'],
			'debt2asset' => (double) $arr['debt2asset'],
			'current_ratio' => (double) $arr['current_ratio'],
			'working_capital' => (double) $arr['working_capital'],
			'borrowing_capacity' => (double) $arr['borrowing_capacity'],
			'years_farming' => (double) $arr['years_farming'],
			'credit_score' => (double) $arr['credit_score'],
			'cpa_financials' => (boolean) $arr['cpa_financials'],
			'bankruptcy' => (boolean) $arr['bankruptcy'],
			'judgement' => (boolean) $arr['judgement'],
			'all_max_loan' => (double) $arr['all_max_loan'],
			'ag_pro_max_loan' => (double) $arr['ag_pro_max_loan'],
			'capital_bridge_max_loan' => (double)
			$arr['capital_bridge_max_loan'],
			'ag_vest_max_loan' => (double) $arr['ag_vest_max_loan'],
			'ag_pro_max_rate' => (double) $arr['ag_pro_max_rate'],
			'capital_bridge_max_rate' => (double)
			$arr['capital_bridge_max_rate'],
			'ag_vest_max_rate' => (double) $arr['ag_vest_max_rate']
		];
	}
}