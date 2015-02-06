<?php namespace Acme\Transformers;

class LoanconditionTransformer extends Transformer{

	public function transform($arr)
	{
		if(!$arr['action_date']){
			$action_date = null;
		} else {
			$action_date = $arr['action_date']->format('m/d/Y');
		}

		return [
			'id' => $arr['id'],
			'crop_year' => $arr['crop_year'],
			'loan_id' => $arr['loan_id'],
			'condition_id' => $arr['condition_id'],
			'condition' => $arr['condition'],
			'status' => $arr['status'],
			'action_date' => $action_date
		];
	}
}