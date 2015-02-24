<?php namespace Acme\Transformers;

class InsuranceTransformer extends Transformer{

	public function transform($arr)
	{
		//TODO: Factor in RP and non-RP
		//return $arr;
/*
		$guaranty = (((double) $arr['aph'] * ((double) $arr['level']/100) * (double) $arr['price']) - (double) $arr['premium']) * ((double) $arr['acres'] * ((double) $arr['share']/100));

		$value = ($guaranty - (double) $arr['premium']) * ((double) $arr['acres'] * ((double) $arr['share']/100));
*/
		return [
			'id' =>	$arr['id'],
			'loan_id' => $arr['loan_id'],
			'agency_id' => $arr['agency_id'],
			'agency' => $arr['agency']['agency'],
			'agent_id' => $arr['agent_id'],
			'agent' => $arr['agent']['agent'],
			'agent_phone' => $arr['agent']['agent_phone'],
			'agent_email' => $arr['agent']['agent_email'],
			'policy' => $arr['policy'],
			'is_assigned' => (boolean) $arr['is_assigned'],
			'fsn' => $arr['fsn'],
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
			'yield' => (double) $arr['yield'],
			'level' => (double) $arr['level'],
			'premium' => (double) $arr['premium'],
			'share' => (double) $arr['share'],
			'guaranty' => (double) $arr['guaranty'],
			'value' => (double) $arr['value']
		];
	}
}