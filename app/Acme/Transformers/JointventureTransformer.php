<?php namespace Acme\Transformers;

class JointventureTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'partner' => $arr['partner'],
			'percent_owned' => (double) $arr['percent_owned'],
			'ssn' => $arr['ssn'],
			'address' => $arr['address'],
			'city' => $arr['city'],
			'state_id' => $arr['state_id'],
			'state' => $arr['states']['state'],
			'state_abr' => $arr['states']['abr'],
			'zip' => $arr['zip'],
			'email' => $arr['email'],
			'phone' => $arr['phone'],
			'age' => $arr['age']
		];
	}
}