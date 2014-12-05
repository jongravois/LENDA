<?php namespace Acme\Transformers;

class EntitytypeTransformer extends Transformer{

	public function transform($arr)
	{
		return $arr;
		return [
			'id' =>	$arr['id'],
			'loantype' => $arr['loantype'],
			'ltPath' => $arr['ltPath']
		];
	}
}