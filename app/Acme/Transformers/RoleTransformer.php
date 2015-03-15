<?php namespace Acme\Transformers;

class RoleTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return array(
			'id' =>	$arr['id'],
			'abr' => $arr['abr'],
			'role' => $arr['role'],
            'employment_status' => $arr['employment_status']
		);
	}
}