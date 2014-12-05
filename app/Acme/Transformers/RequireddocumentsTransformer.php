<?php namespace Acme\Transformers;

class RequireddocumentsTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id'	=>	(integer) $arr['id'],
			'loantype_id'	=> (integer) $arr['loantype_id'],
			'loantype'	=>	$arr['loantype']['loantype'],
			'document' =>	$arr['document']
		];
	}

}