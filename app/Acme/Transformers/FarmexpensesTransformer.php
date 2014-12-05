<?php namespace Acme\Transformers;

class FarmexpensesTransformer extends Transformer{

	public function transform($arr)
	{
		//return $arr;
		return [
			'id'			=>	(integer) $arr['id'],
			'expense'		=>	$arr['expense'],
			'cost'			=>	(double) $arr['cost']
		];
	}
}