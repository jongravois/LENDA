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
			'phone' => $arr['distributor']['phone'],
			'email' => $arr['distributor']['email'],
			'contact' => $arr['contact'],
			'contact_phone' => $arr['phone'],
			'contact_email' => $arr['email']
		];
	}
}