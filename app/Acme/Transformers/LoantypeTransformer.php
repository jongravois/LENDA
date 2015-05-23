<?php namespace Acme\Transformers;

class LoantypeTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loantype' => $arr['loantype'],
			'abr' => $arr['abr'],
			'sort_order' => $arr['sort_order'],
            'default_due_date' => $arr['default_due_date']
		];
	}
}