<?php namespace Acme\Transformers;

class CorporationTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'corporation' => $arr['corporation'],
			'ssn' => $arr['ssn'],
			'address' => $arr['address'],
			'city' => $arr['city'],
			'state_id' => $arr['state_id'],
			'zip' => $arr['zip'],
			'email' => $arr['email'],
			'phone' => $arr['phone'],
			'description' => $arr['description'],
			'president' => $arr['president'],
			'vicepresident' => $arr['vicepresident'],
			'secretary' => $arr['secretary'],
			'treasurer' => $arr['treasurer']
		];
	}
}