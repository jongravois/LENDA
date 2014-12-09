<?php namespace Acme\Transformers;

class LoandistributorTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loan_id' => $arr['loan_id'],
			'distributor_id' => $arr['distributor']['id'],
			'distributor' => $arr['distributor']['distributor'],
			'address' => $arr['distributor']['address'],
			'city' => $arr['distributor']['city'],
			'state_id' => $arr['distributor']['state_id'],
			'state' => $arr['distributor']['state'],
			'zip' => $arr['distributor']['zip'],
			'contact' => $arr['contact'],
			'phone' => $arr['phone'],
			'email' => $arr['email']
		];
	}
}