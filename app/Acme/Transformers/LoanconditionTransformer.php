<?php namespace Acme\Transformers;

class LoanconditionTransformer extends Transformer{

	public function transform($arr)
	{
		return [
			'id'			=>	$arr['id'],
			'crop_year'		=>	$arr['crop_year'],
			'loan_id'		=>	$arr['loan_id'],
			'condition_id'	=>	$arr['condition_id'],
			'condition'		=>	$arr['condition']
		];
	}
}