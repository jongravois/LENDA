<?php namespace Acme\Transformers;

class InsuranceTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loan_id' => $arr['loan_id'],
			'crop_year' => $arr['crop_year'],
			'agency' => $arr['agency'],
			'agent' => $arr['agent'],
			'agent_phone' => $arr['agent_phone'],
			'agent_email' => $arr['agent_email'],
			'policy' => $arr['policy'],
			'loancounty_id' => $arr['loancounty_id'],
			'locale' => $arr['county']['locale'],
			'loancrop_id' => $arr['loancrop_id'],
			'crop' => $arr['crop']['crop'],
			'croppractice_id' => $arr['croppractice_id'],
			'practice' => $arr['practice']['croppractice'],
			'type' => $arr['type'],
			'option' => $arr['option'],
			'acres' => (double) $arr['acres'],
			'price' => (double) $arr['price'],
			'aph' => (double) $arr['aph'],
			'level' => (double) $arr['level'],
			'premium' => (double) $arr['premium'],
			'share' => (double) $arr['share']
		];
	}
}