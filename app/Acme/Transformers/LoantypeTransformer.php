<?php namespace Acme\Transformers;

class LoantypeTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id' =>	$arr['id'],
			'loantype' => $arr['loantype'],
			'ltPath' => $arr['ltPath'],
      'default_due_date' => $arr['default_due_date']
		];
	}
}