<?php namespace Acme\Transformers;

class ConditionsTransformer extends Transformer{

	public function transform($arr)
	{
		return [
			'id'			=>	$arr['id'],
			'condition'		=>	$arr['condition']
		];
	}
}