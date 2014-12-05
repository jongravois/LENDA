<?php namespace Acme\Transformers;

class JointventureTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'partner' => $arr['partner'],
			'ssn' => $arr['ssn'],
			'address' => $arr['address'],
			'city' => $arr['city'],
			'state_id' => $arr['state_id'],
			'zip' => $arr['zip'],
			'email' => $arr['email'],
			'phone' => $arr['phone']
		];
	}
}